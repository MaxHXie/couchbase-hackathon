import { generateId, getCollection, handleCouchbaseError } from "apollo-couch";
import { Artist, ArtistContentInput, ArtistsResponse } from "../../../generated-types";

const COLLECTION_NAME = "artists";
const collection = await getCollection(COLLECTION_NAME);

async function createArtist(content: ArtistContentInput): Promise<Artist> {
  const id = generateId(COLLECTION_NAME);
  await collection.insert(id, content);
  return { id, content }
}

export async function resolver(_: any, { contents }: { contents: ArtistContentInput[] }): Promise<ArtistsResponse> {
  const results = await Promise.allSettled(contents.map(createArtist));
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
