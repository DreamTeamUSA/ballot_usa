const knex = require("../knex");

class IssueResponse {
  static async create(issue_id, user_id, body) {
    const query = `
      INSERT INTO issue_responses (issue_id, user_id, body)
      VALUES (?, ?, ?)
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [issue_id, user_id, body]);
    return rows[0];
  }

  static async findByIssueId(issue_id) {
    const query = `
      SELECT issue_responses.*, users.username, users.picture_url
      FROM issue_responses
      JOIN users ON issue_responses.user_id = users.id
      WHERE issue_responses.issue_id = ?
      ORDER BY issue_responses.created_at ASC
    `;
    const { rows } = await knex.raw(query, [issue_id]);
    return rows;
  }
}

module.exports = IssueResponse;
