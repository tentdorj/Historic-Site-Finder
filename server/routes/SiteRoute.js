const express = require("express");
const SiteController = require("../controller/SiteController");

const router = express.Router();

router.get("/all", SiteController.getSites);
// router.get("/siteRating", SitesController.getSiteRating);

module.exports = router;
