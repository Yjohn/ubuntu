const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getStatus = () => {
  return knex.select().from("status");
};

const getShelters = () => {
  return knex.select().from("shelters");
};

const getUsers = () => {
  return knex.select().from("users");
};

const getAddresses = () => {
  return knex.select().from("addresses");
};

module.exports = {
  getStatus: getStatus,
  getUsers: getUsers,
  getAddresses: getAddresses,
  getShelters: getShelters
};
