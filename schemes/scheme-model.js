const db = require("../data/db-config.js"); 

module.exports = {
    find,
    findById,
    findSteps,
    add, 
    update, 
    remove
}; 


function find() {
    return db.select("*")
    .from("schemes")
}

function findById(id) {
    return db.select("*")
    .from("schemes")
    .where({ id }).first()
}

// Don't understand how to do this at all 
// .get() post from /:id/steps ~ With SQL 
function findSteps(id) {
    return db("steps")
    .innerJoin(
    "schemes", 
    "steps.scheme_id", 
    "schemes.id"
    ) 
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where("steps.scheme_id", id)
    .orderBy("steps.step_number")
}

function add(scheme) {
    return db.select("*")
    .from("schemes")

    .insert(scheme, "id")
    .then(([id]) => {
        return findById(id)
    })
} 

function update(changes, id) {
    return db.select("*")
    .from("schemes")
    .where({ id }).first()
    .update(changes)
}

function remove(id) {
   return db.select("*")
    .from("schemes")
    .where({ id })
    // remove()
   .delete()
}