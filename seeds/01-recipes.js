exports.seed = function(knex) {
    return knex('recipes').insert([   
     {name: "Spaghetti"},
     {name: "Pizza"},
     {name: "Cookies"},
    ]);
  };