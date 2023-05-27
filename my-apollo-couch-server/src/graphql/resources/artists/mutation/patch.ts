import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Artist, ArtistPatchInput, ArtistsResponse } from "../../../generated-types";

const COLLECTION_NAME = "artists";
const collection = await getCollection(COLLECTION_NAME);

async function patchArtist(record: ArtistPatchInput): Promise<Artist> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });
  await collection.mutateIn(record.id, specs);
  const artist = await collection.get(record.id);
  return { id: record.id, content: artist.content };
}

export async function resolver(_: any, { records }: { records: ArtistPatchInput[] }): Promise<ArtistsResponse> {
  const results = await Promise.allSettled(records.map(patchArtist));
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
