import { getCouchbaseClient } from "apollo-couch";
import { VenuesListInput, VenuesListResponse } from "../../../generated-types";

export async function resolver(_: any, { query }: { query: VenuesListInput }) : Promise<VenuesListResponse> {
    const { cluster } = await getCouchbaseClient();
    let queryString = "SELECT META().id, * FROM main.play.venues";
    const response = await cluster.query(queryString);
    const records = response.rows.map((row: any) => { return { id: row.id, content: row.venues } });

    return {
        code: 200,
        message: "Success", 
        records: records
    }
}
