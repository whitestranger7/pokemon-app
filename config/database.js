const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require('config');

const dbURL = config.get('mongoURI');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = function() {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("connected", function() {
        console.log(connected("Mongoose default connection is open"));
    });

    mongoose.connection.on("error", function(err) {
        console.log(
            error("Mongoose default connection has occured " + err + " error")
        );
    });

    mongoose.connection.on("disconnected", function() {
        console.log(
            disconnected("Mongoose default connection is disconnected")
        );
    });

    process.on("SIGINT", function() {
        mongoose.connection.close(function() {
            console.log(
                termination(
                    "Mongoose default connection is disconnected due to application termination"
                )
            );
            process.exit(0);
        });
    });
};
