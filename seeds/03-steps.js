exports.seed = function(knex) {
    return knex('steps').insert([   
        {step: "Blend flour with eggs and milk", id: 1},
        {step: "Mix in chocolate", id: 1},
        {step: "Bake at 350F for 30 minutes", id: 1}
    ]);
  };