// aumente em 2 o imdbRating do filme Batman

use("movies");
db.class.update(
  { title: "Batman" },
  { $inc: { imdbRating: 2 } }
);
