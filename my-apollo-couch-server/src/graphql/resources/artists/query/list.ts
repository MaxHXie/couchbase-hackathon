import { getCouchbaseClient } from "apollo-couch";
import { ArtistsListInput, ArtistsListResponse } from "../../../generated-types";

export async function resolver(_: any, { query }: { query: ArtistsListInput }) : Promise<ArtistsListResponse> {
    const { cluster } = await getCouchbaseClient();
    let queryString = "SELECT META().id, * FROM main.play.artists";
    const response = await cluster.query(queryString);
    const records = response.rows.map((row: any) => { return { id: row.id, content: row.artists } });

    return {
        code: 200,
        message: "Success", 
        records: records
    }
}
