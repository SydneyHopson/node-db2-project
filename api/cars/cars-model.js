const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
}
const getByVin = (vin) => {
  return db('cars').where('vin', vin).first();
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

const create = async (newCar) => {
  // DO YOUR MAGIC
  return await db('cars').insert(newCar)
  .then(([id]) => {
    return getById(id)
  })
}

module.exports = {
getAll,
getById,
create,
getByVin
}
