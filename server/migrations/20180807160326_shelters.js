exports.up = function(knex, Promise) {
  return knex.schema.createTable("shelters", function(table) {
    table.increments("shelter_id");
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("shelters");
};
