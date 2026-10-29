
require("dotenv").config();

const mongoose = require("mongoose");

const mongodbconnection = async () => {
    try {
        const url = process.env.URL;

        if (!url) {
            throw new Error("MongoDB URL is missing");
        }

        await mongoose.connect(url);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        throw error;
    }
};

module.exports = { mongodbconnection };
