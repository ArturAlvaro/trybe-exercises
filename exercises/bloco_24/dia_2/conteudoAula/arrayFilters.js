db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
set : {
      "ingredients.$[elemento].name": "Farinha Integral", // altera o valor para "Farinha Integral..."
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] }, // ... onde o nome for "Farinha"
);

// adiciona unidade buscando por title e filtrando por nome do elemento

db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
set : {
      "ingredients.$[elemento].unit": "xícara",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha Integral" } ] },
);

// outro exemplo

db.recipes.updateMany( // Passamos de updateOne para updateMany.
  {}, // Retiramos a restrição do título.
  {
set : {
      "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral", // `name` como "Farinha Integral".
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] }, // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
);
