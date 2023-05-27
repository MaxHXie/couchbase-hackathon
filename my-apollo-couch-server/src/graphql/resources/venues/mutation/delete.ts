import { getCollection, handleCouchbaseError } from "apollo-couch";
import { VenuesDeleteResponse } from "../../../generated-types";

const COLLECTION_NAME = "venues";
const collection = await getCollection(COLLECTION_NAME);

async function deleteVenue(id: string): Promise<string> {
  await collection.remove(id);
  return id;
}

export async function resolver(_: any, { ids }: { ids: string[] }): Promise<VenuesDeleteResponse> {
  const results = await Promise.allSettled(ids.map(deleteVenue));
  const response = results.reduce<VenuesDeleteResponse>((acc, result) => {
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
