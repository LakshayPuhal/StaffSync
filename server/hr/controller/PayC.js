const Payroll = require("../../models/paySlipM");
const PDFDocument = require("pdfkit");
const fs = require("fs");

// Fetch all payroll records
exports.getAllPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.find();
    res.json(payrolls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payroll data", error });
  }
};

// Generate Payslip PDF
exports.generatePayslip = async (req, res) => {
  try {
    const { id } = req.params;
    const payroll = await Payroll.findById(id);
    if (!payroll) {
      return res.status(404).json({ message: "Payroll record not found" });
    }

    const doc = new PDFDocument();
    const filePath = `./payslips/payslip_${payroll.employeeId}.pdf`;
    doc.pipe(fs.createWriteStream(filePath));

    // Payslip Content
    doc.fontSize(20).text("Employee Payslip", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Employee ID: ${payroll.employeeId}`);
    doc.text(`Employee Name: ${payroll.employeeName}`);
    doc.text(`Basic Salary: $${payroll.basicSalary}`);
    doc.text(`Bonuses: $${payroll.bonuses}`);
    doc.text(`Deductions: -$${payroll.deductions}`);
    doc.text(`Net Salary: $${payroll.netSalary}`);
    doc.text(`Payment Date: ${payroll.paymentDate.toDateString()}`);
    doc.end();

    res.json({ message: "Payslip generated", filePath });
  } catch (error) {
    res.status(500).json({ message: "Error generating payslip", error });
  }
};
