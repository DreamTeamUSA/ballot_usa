const express = require("express");

const router = express.Router();

const issueControllers = require("../controllers/issueControllers");
const responseControllers = require("../controllers/issueResponseControllers");

const checkAuthentication = require("../middleware/checkAuthentication");
const officialAuthorization = require("../middleware/officialAuthorization");

router.get("/", issueControllers.getAllIssues);

router.get("/:id", issueControllers.getIssueById);

router.post(
  "/",
  checkAuthentication,
  issueControllers.createIssue
);

router.patch(
  "/:id",
  checkAuthentication,
  issueControllers.updateIssue
);

router.patch(
  "/:id/status",
  checkAuthentication,
  officialAuthorization,
  issueControllers.updateIssueStatus
);

router.delete(
  "/:id",
  checkAuthentication,
  issueControllers.deleteIssue
);

router.post(
  "/:id/responses",
  checkAuthentication,
  officialAuthorization,
  responseControllers.createResponse
);

router.get(
  "/:id/responses",
  responseControllers.getResponsesByIssue
);

module.exports = router;