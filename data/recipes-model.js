const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("ingredients")
    .select("name", "quantity")
    .where("id", id);
}

function getInstructions(id) {
    return db("steps")
    .select("step")
    .where("id", id);
}