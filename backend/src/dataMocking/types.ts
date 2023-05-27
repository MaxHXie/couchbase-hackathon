export interface Artist {
    id: string;
    name: string;
    description: string;
    genre: string[];
    events: string[];
    popularity: number;
}

export interface Event {
    id: string;
    name: string;
    description: string;
    venueId: string;
    artistIds: string[];
    dateTime: string;
    popularity: number;
    tickets: Ticket[];
}

export interface Ticket {
    type: string;
    price: number;
    availableQuantity: number;
}

export interface Venue {
    id: string;
    venueType: string;
    name: string;
    description: string;
    address: string;
    seatingCapacity: number;
    events: string[];
}

export interface Transaction {
    id: string;
    eventId: string;
    userId: string;
    tickets: {
        type: string;
        quantity: number;
    }[];
    totalPrice: number;
    dateTime: string;
    status: string;
    paymentMethod: string;
}