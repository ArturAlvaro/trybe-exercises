use("movies");
db.class.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $set : {
      "cast.$.character": "Marv",
    },
  },
);
