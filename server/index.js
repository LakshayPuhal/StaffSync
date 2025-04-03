const express = require('express');
const cors = require('cors');
const { MongoConnect } = require('./models/user'); // MongoDB connection
const loginRoute = require('./hr/routes/login'); // Import login route
const leaveRoutes = require("./hr/routes/leaveR"); // Import leave routes
const payrollRoutes = require("./hr/routes/payR");
const productivityRoute = require("./hr/routes/performanceR");
const jobRoutes = require("./hr/routes/jobPostingR");


const app = express(); // ✅ Initialize app first

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

MongoConnect(); // Connect to MongoDB

app.use('/api/login', loginRoute); // Login route
app.use('/api/leaves', leaveRoutes); // ✅ Fix leave request route
app.use("/api/payroll", payrollRoutes);
app.use("/api/productivity", productivityRoute);
app.use("/api/jobs",jobRoutes );


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
