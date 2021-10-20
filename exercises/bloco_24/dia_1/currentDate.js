use("conteudo_trybe");
db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true, // ISODate("2020-01-22T21:21:41.052Z"),
      "cancellation.date": { $type: "timestamp" } // Timestamp(1579728101, 1),
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);
