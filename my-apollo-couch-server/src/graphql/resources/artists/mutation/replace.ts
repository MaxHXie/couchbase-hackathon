import { getCollection, handleCouchbaseError } from "apollo-couch";
import { Artist, ArtistReplaceInput, ArtistsResponse } from "../../../generated-types";

const COLLECTION_NAME = "artists";
const collection = await getCollection(COLLECTION_NAME);

async function replaceArtist(record: ArtistReplaceInput): Promise<Artist> {
  await collection.upsert(record.id, record.content);
  return record;
}

export async function resolver(_: any, { records }: { records: ArtistReplaceInput[] }): Promise<ArtistsResponse> {
  const results = await Promise.allSettled(records.map(replaceArtist));
  const response = results.reduce<ArtistsResponse>((acc, result) => {
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
