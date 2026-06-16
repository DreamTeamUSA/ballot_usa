/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("issues", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("category").notNullable();
    table
      .enu("status", ["submitted", "in_progress", "resolved"])
      .notNullable()
      .defaultTo("submitted");
    table.string("district");
    table.timestamps(true, true);

    table.index(["district", "status"]);
    table.index(["user_id"]);
    table.index(["status", "created_at"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("issues");
