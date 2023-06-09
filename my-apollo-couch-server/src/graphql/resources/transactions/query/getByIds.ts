import { getCouchbaseClient } from "apollo-couch";
import { Transaction, ErrorResponse } from "src/graphql/generated-types";
import { handleCouchbaseError } from "apollo-couch";

const COLLECTION = "transactions";

export async function resolver(_: any, { ids }: { ids: string[] }) {
    const records: Transaction[] = [];
    const errors: ErrorResponse[] = [];

    const { scope } = await getCouchbaseClient();
    const collection = scope.collection(COLLECTION);
    const results = await Promise.allSettled(ids.map(id => collection.get(id)));
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            records.push({ id: ids[index], content: result.value.content });
        } else {
            errors.push(handleCouchbaseError(result.reason, ids[index]));
        }
    });

    return {
        records,
        errors
    };
}
