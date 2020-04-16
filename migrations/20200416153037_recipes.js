exports.up = function(knex) {
    return knex.schema

    // Recipes table
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 25)
        .notNullable()
        .unique();
    })

    // Ingredients table with foreign key (recipes.id)
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 25)
        .notNullable();
        tbl.float("quantity")
        .notNullable();
        tbl.integer("recipe_id")
        .references("recipes.id");
    })

    // Step instructions table with foreign key (recipes.id)
    .createTable("steps", tbl => {
        tbl.increments();
        tbl.string("step", 255)
        tbl.integer("recipe_id")
        .references("recipes.id");
    })
};

exports.down = function(knex) {
    // Drops the tables
    return knex.schema
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};
