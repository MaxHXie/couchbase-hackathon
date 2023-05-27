import { getCouchbaseClient } from "apollo-couch";
import { TransactionsListInput, TransactionsListResponse } from "../../../generated-types";

export async function resolver(_: any, { query }: { query: TransactionsListInput }) : Promise<TransactionsListResponse> {
    const { cluster } = await getCouchbaseClient();
    let queryString = "SELECT META().id, * FROM main.play.transactions";
    const response = await cluster.query(queryString);
    const records = response.rows.map((row: any) => { return { id: row.id, content: row.transactions } });

    return {
        code: 200,
        message: "Success", 
        records: records
    }
}
