import { getCollection, handleCouchbaseError } from "apollo-couch";
import { EventsDeleteResponse } from "../../../generated-types";

const COLLECTION_NAME = "events";
const collection = await getCollection(COLLECTION_NAME);

async function deleteEvent(id: string): Promise<string> {
  await collection.remove(id);
  return id;
}

export async function resolver(_: any, { ids }: { ids: string[] }): Promise<EventsDeleteResponse> {
  const results = await Promise.allSettled(ids.map(deleteEvent));
  const response = results.reduce<EventsDeleteResponse>((acc, result) => {
      if (result.status === "fulfilled") {
        acc.deletedIds.push(result.value);
      } else {
        acc.errors.push(handleCouchbaseError(result.reason));
      }
      return acc;
    }, {
      deletedIds: [],
      errors: []
    }
  );

  return response;
}
