import { generateId, getCollection, handleCouchbaseError } from "apollo-couch";
import { Venue, VenueContentInput, VenuesResponse } from "../../../generated-types";

const COLLECTION_NAME = "venues";
const collection = await getCollection(COLLECTION_NAME);

async function createVenue(content: VenueContentInput): Promise<Venue> {
  const id = generateId(COLLECTION_NAME);
  await collection.insert(id, content);
  return { id, content }
}

export async function resolver(_: any, { contents }: { contents: VenueContentInput[] }): Promise<VenuesResponse> {
  const results = await Promise.allSettled(contents.map(createVenue));
  const response = results.reduce<VenuesResponse>((acc, result) => {
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
