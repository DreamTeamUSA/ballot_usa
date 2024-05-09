/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    { user_id: 1, content: 'hello' },
    { user_id: 2, content: 'bye' },
    { user_id: 3, content: 'hellobye' }
  ]);
};