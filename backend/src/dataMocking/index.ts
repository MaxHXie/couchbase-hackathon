import { faker } from "@faker-js/faker";
import { Artist, Ticket, Event, Venue, Transaction } from "./types";
import { runFunctionNTimes } from "./helpers";
import { mock } from "node:test";

const mockVenue = (): Venue => {
  return {
    id: faker.string.uuid(),
    venueType: "festival",
    name: faker.location.street(),
    description: faker.lorem.paragraph(),
    address: faker.location.streetAddress(),
    seatingCapacity: faker.number.int(100000),
    events: [],
  };
};

const mockArtist = (): Artist => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    genre: runFunctionNTimes(faker.number.int(3), faker.music.genre),
    description: faker.lorem.paragraph(),
    events: [],
    popularity: faker.number.int(100),
  };
};

const mockTicket = (availableQuantity: number): Ticket => {
  return {
    type: "general",
    price: faker.number.float({
      min: 10,
      max: 100,
      precision: 0.01,
    }),
    availableQuantity: availableQuantity,
  };
};

const mockEvent = (venues: Venue[], artists: Artist[]): Event => {
  const randomVenueIndex = faker.number.int({ min: 0, max: venues.length - 1 });
  const venue = venues[randomVenueIndex];
  const randomArtistIndexes = [... new Set(runFunctionNTimes(faker.number.int(10), () =>
    faker.number.int({ min: 0, max: artists.length - 1 })
  ))]
  const artistIds = randomArtistIndexes.map((index) => artists[index].id);
  return {
    id: faker.string.uuid(),
    name: faker.music.genre() + " festival",
    description: faker.lorem.paragraph(),
    venueId: venue.id,
    artistIds: artistIds,
    dateTime: faker.date.future().toISOString(),
    popularity: faker.number.int(100),
    tickets: runFunctionNTimes(1, () => mockTicket(venue.seatingCapacity)),
  };
};

const mockTransaction = (event: Event): Transaction => {
  const tickets = runFunctionNTimes(faker.number.int(5), () => {
    return {
      type: "general",
      quantity: faker.number.int(10),
    };
  });
  const pricePerTicket = event.tickets[0].price;
  return {
    id: faker.string.uuid(),
    eventId: event.id,
    userId: faker.string.uuid(),
    tickets: tickets,
    totalPrice: tickets.reduce((acc, curr) => {
      return acc + curr.quantity * pricePerTicket;
    }, 0),
    dateTime: faker.date.soon().toISOString(),
    status: "paid",
    paymentMethod: "credit card",
  };
};

export const mockData = () => {
  const venues: Venue[] = runFunctionNTimes(2, mockVenue);
  const artists: Artist[] = runFunctionNTimes(5, mockArtist);
  const events: Event[] = runFunctionNTimes(2, () =>
    mockEvent(venues, artists)
  );
  venues.forEach((venue) => {
    venue.events = events
        .filter((event) => event.venueId === venue.id)
        .map((event) => event.id);
  });
  artists.forEach((artist) => {
    artist.events = events
      .filter((event) => event.artistIds.includes(artist.id))
      .map((event) => event.id);
  });
  return {
    venues,
    events,
    artists,
  };
};

mockData();
