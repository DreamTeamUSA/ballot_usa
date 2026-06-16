const knex = require("../knex");

const VALID_STATUSES = ["submitted", "in_progress", "resolved"];

class Issue {
  static async create(user_id, title, description, category, district = null) {
    const query = `
      INSERT INTO issues (user_id, title, description, category, district)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [
      user_id,
      title,
      description,
      category,
      district,
    ]);
    return rows[0];
  }

  static async find(id) {
    const query = `
      SELECT issues.*, users.username, users.picture_url
      FROM issues
      JOIN users ON issues.user_id = users.id
      WHERE issues.id = ?
    `;
    const { rows } = await knex.raw(query, [id]);
    return rows[0] ?? null;
  }

  static async list({ district, status, user_id } = {}) {
    const conditions = [];
    const params = [];

    if (district) {
      conditions.push("issues.district = ?");
      params.push(district);
    }
    if (status) {
      conditions.push("issues.status = ?");
      params.push(status);
    }
    if (user_id) {
      conditions.push("issues.user_id = ?");
      params.push(user_id);
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    const query = `
      SELECT issues.*, users.username, users.picture_url
      FROM issues
      JOIN users ON issues.user_id = users.id
      ${where}
      ORDER BY issues.created_at DESC
    `;
    const { rows } = await knex.raw(query, params);
    return rows;
  }

  static async update(id, title, description, category, district) {
    const query = `
      UPDATE issues
      SET title = ?, description = ?, category = ?, district = ?, updated_at = NOW()
      WHERE id = ?
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [
      title,
      description,
      category,
      district,
      id,
    ]);
    return rows[0] ?? null;
  }

  static async updateStatus(id, status) {
    if (!VALID_STATUSES.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }
    const query = `
      UPDATE issues
      SET status = ?, updated_at = NOW()
      WHERE id = ?
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [status, id]);
    return rows[0] ?? null;
  }

  static async delete(id) {
    await knex.raw("DELETE FROM issues WHERE id = ?", [id]);
  }
}

module.exports = Issue;
