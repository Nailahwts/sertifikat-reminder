const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

// Routes
const sertifikatRoute = require("./routes/sertifikat");
app.use("/api/sertifikat", sertifikatRoute);

// Connect MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
