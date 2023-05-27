import { getCollection, handleCouchbaseError } from "apollo-couch";
import { Venue, VenueReplaceInput, VenuesResponse } from "../../../generated-types";

const COLLECTION_NAME = "venues";
const collection = await getCollection(COLLECTION_NAME);

async function replaceVenue(record: VenueReplaceInput): Promise<Venue> {
  await collection.upsert(record.id, record.content);
  return record;
}

export async function resolver(_: any, { records }: { records: VenueReplaceInput[] }): Promise<VenuesResponse> {
  const results = await Promise.allSettled(records.map(replaceVenue));
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
