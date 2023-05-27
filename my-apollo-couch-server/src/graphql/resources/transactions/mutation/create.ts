import { generateId, getCollection, handleCouchbaseError } from "apollo-couch";
import { Transaction, TransactionContentInput, TransactionsResponse } from "../../../generated-types";

const COLLECTION_NAME = "transactions";
const collection = await getCollection(COLLECTION_NAME);

async function createTransaction(content: TransactionContentInput): Promise<Transaction> {
  const id = generateId(COLLECTION_NAME);
  await collection.insert(id, content);
  return { id, content }
}

export async function resolver(_: any, { contents }: { contents: TransactionContentInput[] }): Promise<TransactionsResponse> {
  const results = await Promise.allSettled(contents.map(createTransaction));
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
