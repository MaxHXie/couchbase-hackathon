import { getCollection, handleCouchbaseError } from "apollo-couch";
import { TransactionsDeleteResponse } from "../../../generated-types";

const COLLECTION_NAME = "transactions";
const collection = await getCollection(COLLECTION_NAME);

async function deleteTransaction(id: string): Promise<string> {
  await collection.remove(id);
  return id;
}

export async function resolver(_: any, { ids }: { ids: string[] }): Promise<TransactionsDeleteResponse> {
  const results = await Promise.allSettled(ids.map(deleteTransaction));
  const response = results.reduce<TransactionsDeleteResponse>((acc, result) => {
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
