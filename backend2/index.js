const couchbase = require("couchbase");

const main = async () => {
  const clusterConnStr = "couchbases://cb.qqamrw94bkgapenm.cloud.couchbase.com";
  const username = "max";
  const password = "Something123!?";
  const bucketName = "main";

  const cluster = await couchbase.connect(clusterConnStr, {
    username: username,
    password: password,
    configProfile: "wanDevelopment",
  });

  const bucket = cluster.bucket(bucketName);
  const collection = bucket.scope("_default").collection("artists");

  const ftsMatchWord = async (term) => {
    try {
      const result = await cluster.searchQuery(
        "artists-index",
        couchbase.SearchQuery.match(term),
        {limit: 10}
      );
      result.rows.forEach((row) => {
        console.log("Found row: ");
        console.log(row);
      });
      console.log("Reported total rows: " + result.meta.total_hits);
    } catch (error) {
      console.error(error);
    }
  };

  const getDocument = async (key) => {
    try {
      const result = await collection.get(key);
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  ftsMatchWord("Dr.").then(() => process.exit(0));

  getDocument("0008dbe8-b184-436f-a915-07598b041248").then(() =>
    process.exit(0)
  );
};

main();
