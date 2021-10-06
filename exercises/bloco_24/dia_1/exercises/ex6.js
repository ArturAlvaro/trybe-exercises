// multiplique por 4 o valor de imdbRating do filme Batman

use("movies");
db.class.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: NumberDecimal("4") } }
);
