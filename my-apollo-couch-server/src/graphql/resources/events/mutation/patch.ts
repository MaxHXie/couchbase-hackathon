import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Event, EventPatchInput, EventsResponse } from "../../../generated-types";

const COLLECTION_NAME = "events";
const collection = await getCollection(COLLECTION_NAME);

async function patchEvent(record: EventPatchInput): Promise<Event> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });
  await collection.mutateIn(record.id, specs);
  const event = await collection.get(record.id);
  return { id: record.id, content: event.content };
}

export async function resolver(_: any, { records }: { records: EventPatchInput[] }): Promise<EventsResponse> {
  const results = await Promise.allSettled(records.map(patchEvent));
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
