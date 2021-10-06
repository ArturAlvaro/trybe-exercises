use("class");
db.xmen.updateMany(
  { class: { $in: ["omega", "gama"] } },
  {
    $max: { power: 500 },
    $currentDate: { lastUpdate: { $type: "timestamp" } },
  }
);
