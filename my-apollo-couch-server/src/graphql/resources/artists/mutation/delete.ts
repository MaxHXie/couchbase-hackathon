import { getCollection, handleCouchbaseError } from "apollo-couch";
import { ArtistsDeleteResponse } from "../../../generated-types";

const COLLECTION_NAME = "artists";
const collection = await getCollection(COLLECTION_NAME);

async function deleteArtist(id: string): Promise<string> {
  await collection.remove(id);
  return id;
}

export async function resolver(_: any, { ids }: { ids: string[] }): Promise<ArtistsDeleteResponse> {
  const results = await Promise.allSettled(ids.map(deleteArtist));
  const response = results.reduce<ArtistsDeleteResponse>((acc, result) => {
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
