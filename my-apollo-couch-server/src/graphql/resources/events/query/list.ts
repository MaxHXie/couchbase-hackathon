import { getCouchbaseClient } from "apollo-couch";
import { EventsListInput, EventsListResponse } from "../../../generated-types";

export async function resolver(_: any, { query }: { query: EventsListInput }) : Promise<EventsListResponse> {
    const { cluster } = await getCouchbaseClient();
    let queryString = "SELECT META().id, * FROM main.play.events";
    const response = await cluster.query(queryString);
    const records = response.rows.map((row: any) => { return { id: row.id, content: row.events } });

    return {
        code: 200,
        message: "Success", 
        records: records
    }
}
