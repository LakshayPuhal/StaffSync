const { getUserCollection } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";

async function loginUser(req, res) {  // <== FIXED: Added (req, res)
  try {
    const { company, username, password } = req.body;

    if (!username || !password || !company) {
      return res.status(400).json({ message: "Fill all the required fields" });
    }

    const userCollection = getUserCollection();
    const existingUser = await userCollection.findOne({ username });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("authToken", token, { httpOnly: true, secure: false, maxAge: 3600000 }); // Set auth token
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { loginUser };
