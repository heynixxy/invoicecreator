const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const invoice = require("./controllers/invoice.js");

// Initialize express
const app = express();

// Stores server port number
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 1024 * 1024 }, // 1MB
    abortOnLimit: true,
  })
);

// Routes
app.post("/create", invoice.createInvoice);

app.get("/download", invoice.sendInvoice);

// Start server
app.listen(PORT, () => `Server started on http://localhost:${PORT}`);
