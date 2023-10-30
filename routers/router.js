const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/home", controller.home);
router.get("/tentangKami", controller.tentangKami);
router.get("/tentangKami/sejarah", controller.sejarah);
module.exports = router;
