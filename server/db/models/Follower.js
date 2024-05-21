const knex = require("../knex");

class Follower {

  static async followUser(user_id, followed_user_id, username) {
    const query = `
      INSERT INTO followers(user_id, followed_user_id, username)
      SELECT ?, ?
      WHERE NOT EXISTS (
        SELECT 1 FROM followers
        WHERE user_id = ? AND followed_user_id = ? AND username = ?
      )`;

    const result = await knex.raw(query, [
      user_id,
      followed_user_id,
      username,
      user_id,
      followed_user_id,
      username,
    ]);

    return result.rowCount > 0;
  }

  static async unfollowUser(user_id, followed_user_id) {
    const query = `
    DELETE FROM followers
    WHERE user_id = ? AND followed_user_id = ?`;

    const result = await knex.raw(query, [user_id, followed_user_id]);
    return result.rowCount > 0;
  }

  static async getFollowers(user_id) {
    const query = `SELECT * FROM followers WHERE user_id = ?`;

    const followers = await knex.raw(query, [user_id]);
    return followers.rows;
  }

  static async getFollowed(user_id) {
    const query = `SELECT * FROM followed WHERE user_id = ?`;

    const followed = await knex.raw(query, [user_id]);
    return followed.rows;
  }

  static async create({ user_id, followed_user_id, username }) {
    const query = `
      INSERT INTO followers(user_id, followed_user_id, username)
      VALUES (?, ?, ?)`;

    const result = await knex.raw(query, [user_id, followed_user_id, username]);
    return result.rowCount > 0;
  }
}

module.exports = Follower;