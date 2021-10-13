db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);

// equivale a 

db.inventory.find(
  {
and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);
