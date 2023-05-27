import { getCollection, handleCouchbaseError } from "apollo-couch";
import { Event, EventReplaceInput, EventsResponse } from "../../../generated-types";

const COLLECTION_NAME = "events";
const collection = await getCollection(COLLECTION_NAME);

async function replaceEvent(record: EventReplaceInput): Promise<Event> {
  await collection.upsert(record.id, record.content);
  return record;
}

export async function resolver(_: any, { records }: { records: EventReplaceInput[] }): Promise<EventsResponse> {
  const results = await Promise.allSettled(records.map(replaceEvent));
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
