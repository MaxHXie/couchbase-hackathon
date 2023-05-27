import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Venue, VenuePatchInput, VenuesResponse } from "../../../generated-types";

const COLLECTION_NAME = "venues";
const collection = await getCollection(COLLECTION_NAME);

async function patchVenue(record: VenuePatchInput): Promise<Venue> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });
  await collection.mutateIn(record.id, specs);
  const venue = await collection.get(record.id);
  return { id: record.id, content: venue.content };
}

export async function resolver(_: any, { records }: { records: VenuePatchInput[] }): Promise<VenuesResponse> {
  const results = await Promise.allSettled(records.map(patchVenue));
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
