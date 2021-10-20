use("movies");
db.class.updateOne(
  { title: "Batman" },
  {
    $pull: {
      category: "action"
    },
  },
);
