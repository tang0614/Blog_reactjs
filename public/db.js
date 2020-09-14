const winston = require("winston");
const mongoose = require("mongoose");

require("dotenv").config();

const db =
  "mongodb+srv://xinyu_tang:CS2020er..@moviecluster.3sbef.mongodb.net/portfolio?retryWrites=true&w=majority";

module.exports = function () {
  //connect mongoose with mongo db named movieDB
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      winston.info(`connecting to ${db}`);
      winston.info(`connecting successfully`);
    });
};
