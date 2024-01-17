const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.index);
router.post("/add", CustomerController.add);
router.get("/find", CustomerController.find);
router.put("/update", CustomerController.update);
router.delete("/delete", CustomerController.delete);

module.exports = router;
