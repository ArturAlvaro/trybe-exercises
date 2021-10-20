use("movies");
db.class.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: -1
    },
  },
);
