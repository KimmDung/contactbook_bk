const express = require("express");
const ApiError = require("./app/api-error");
const contactRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(express.json());
// routes
app.use("/api/contacts", contactRouter);
// run server

//handle 404 response
app.use((req, res, next) => {
    // Code o day se chay khi khong co route duoc dinh nghia nao
    // khop voi yeu cau. Goi next() de chuyen sang middleware xu ly loi
    return next(new ApiError(404, "Resource not found"));
});

// define error-handing middleware last, after other app.use() and routes calls
app.use((req, res, next) => {
    // Middleware xu ly loi tapj trung.
    // Trong cac doan code xu ly o cac route, goi next(error)
    // se chuyen ve middleware xu ly loi nay
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});



app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});



module.exports = app;