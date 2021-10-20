use("movies");
db.class.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: {
        $each: ["villain", "comic-based"]
      }
    }
  },
);
