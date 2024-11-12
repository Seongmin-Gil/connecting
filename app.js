const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const logger = require("./winston");

const router = require("./route");

const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(morgan(":method :status :url :response-time ms", { stream: logger.stream }));
    app.use(express.json());
    app.use(router);

    return app;
}

module.exports = { createApp };