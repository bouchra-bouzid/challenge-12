// app.js
const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", postRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
