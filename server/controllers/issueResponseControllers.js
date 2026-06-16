const Issue = require("../db/models/Issue");
const IssueResponse = require("../db/models/IssueResponse");

exports.createResponse = async (req, res) => {
  try {
    const issue = await Issue.find(req.params.id);

    if (!issue) {
      return res.status(404).json({
        error: "Issue not found",
      });
    }

    const response = await IssueResponse.create(
      req.params.id,
      req.session.userId,
      req.body.body
    );

    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create response",
    });
  }
};

exports.getResponsesByIssue = async (req, res) => {
  try {
    const responses = await IssueResponse.findByIssueId(req.params.id);

    res.json(responses);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to fetch responses",
    });
  }
};