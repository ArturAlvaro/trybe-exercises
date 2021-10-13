use("movies");
db.class.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  {
    $push: {
      category: "90's"
    },
  },
);
