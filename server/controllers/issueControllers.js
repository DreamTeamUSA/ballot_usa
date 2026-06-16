const Issue = require("../db/models/Issue");
const IssueResponse = require("../db/models/IssueResponse");

exports.createIssue = async (req, res) => {
  try {
    const { title, description, category, district } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        error: "Title, description, and category are required",
      });
    }

    const issue = await Issue.create(
      req.session.userId,
      title,
      description,
      category,
      district
    );

    res.status(201).json(issue);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create issue" });
  }
};

exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.getAll(req.query);
    res.json(issues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch issues" });
  }
};

exports.getIssueById = async (req, res) => {
  try {
    const issue = await Issue.find(req.params.id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    const responses = await IssueResponse.findByIssueId(req.params.id);

    res.json({
      issue,
      responses,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch issue" });
  }
};

exports.updateIssue = async (req, res) => {
  try {
    const issue = await Issue.find(req.params.id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    if (issue.user_id !== req.session.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    if (issue.status !== "submitted") {
      return res.status(403).json({
        error: "Cannot edit issue after review begins",
      });
    }

    const updated = await Issue.update(
      req.params.id,
      req.body.title,
      req.body.description,
      req.body.category,
      req.body.district
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update issue" });
  }
};

exports.updateIssueStatus = async (req, res) => {
  try {
    const updated = await Issue.updateStatus(
      req.params.id,
      req.body.status
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update status" });
  }
};

exports.deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.find(req.params.id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    if (issue.user_id !== req.session.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await Issue.delete(req.params.id);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete issue" });
  }
};