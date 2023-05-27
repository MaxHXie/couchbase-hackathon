import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Transaction, TransactionPatchInput, TransactionsResponse } from "../../../generated-types";

const COLLECTION_NAME = "transactions";
const collection = await getCollection(COLLECTION_NAME);

async function patchTransaction(record: TransactionPatchInput): Promise<Transaction> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });
  await collection.mutateIn(record.id, specs);
  const transaction = await collection.get(record.id);
  return { id: record.id, content: transaction.content };
}

export async function resolver(_: any, { records }: { records: TransactionPatchInput[] }): Promise<TransactionsResponse> {
  const results = await Promise.allSettled(records.map(patchTransaction));
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
