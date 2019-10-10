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

// .get() post from /:id/steps ~ With SQL 
function findSteps(id) {
    // return db("schemes")
    return db.select("*")
    .where("schemes as P")
    .join("")
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
    db.select("*")
    .from("schemes")
    .where({ id })
    remove()
}