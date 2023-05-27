import { getCollection, handleCouchbaseError } from "apollo-couch";
import { Transaction, TransactionReplaceInput, TransactionsResponse } from "../../../generated-types";

const COLLECTION_NAME = "transactions";
const collection = await getCollection(COLLECTION_NAME);

async function replaceTransaction(record: TransactionReplaceInput): Promise<Transaction> {
  await collection.upsert(record.id, record.content);
  return record;
}

export async function resolver(_: any, { records }: { records: TransactionReplaceInput[] }): Promise<TransactionsResponse> {
  const results = await Promise.allSettled(records.map(replaceTransaction));
  const response = results.reduce<TransactionsResponse>((acc, result) => {
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
