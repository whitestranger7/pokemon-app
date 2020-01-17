const express = require("express");
const properties = require("./config/properties");
const db = require("./config/database");

const userRouter = require("./api/routes/user");

const app = express();

db();

app.use(express.json());
app.use(userRouter);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});
