/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("issue_responses", (table) => {
    table.increments("id").primary();
    table
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("body").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.index(["issue_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("issue_responses");
