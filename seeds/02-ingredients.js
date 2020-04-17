exports.seed = function(knex) {
    return knex("ingredients").insert([
      { name: "Flour", quantity: 5, id:  1 },
      { name: "Eggs", quantity: 2, id: 1 },
      { name: "Chocolate", quantity: 7, id: 1 }
    ]);
  };