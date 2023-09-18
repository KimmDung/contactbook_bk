const express = require("express");
const contactRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(express.json());
// routes
app.use("/api/contacts", contactRouter);
// run server
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});



module.exports = app;