//The index js file acts as a "central hub" to pull the other js files together.
const express = require("express");
const router = express.Router();

router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));
router.use(require("./voterRoutes"));
router.use(require("./voteRoutes"));

module.exports = router;
