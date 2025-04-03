const express = require("express");
const router = express.Router();
const payrollController = require("../controller/PayC");

router.get("/", payrollController.getAllPayrolls);
router.get("/payslip/:id", payrollController.generatePayslip);

module.exports = router;
