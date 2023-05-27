import { generateId, getCollection, handleCouchbaseError } from "apollo-couch";
import { Event, EventContentInput, EventsResponse } from "../../../generated-types";

const COLLECTION_NAME = "events";
const collection = await getCollection(COLLECTION_NAME);

async function createEvent(content: EventContentInput): Promise<Event> {
  const id = generateId(COLLECTION_NAME);
  await collection.insert(id, content);
  return { id, content }
}

export async function resolver(_: any, { contents }: { contents: EventContentInput[] }): Promise<EventsResponse> {
  const results = await Promise.allSettled(contents.map(createEvent));
  const response = results.reduce<EventsResponse>((acc, result) => {
      if (result.status === "fulfilled") {
        acc.records.push(result.value);
      } else {
        acc.errors.push(handleCouchbaseError(result.reason));
      }
      return acc;
    }, {
      records: [],
      errors: []
    }
  );
  return response;
}
