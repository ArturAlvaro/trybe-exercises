// aumenta em 5  o budget do filme Home Alone

use("movies");
db.class.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 } }
);
