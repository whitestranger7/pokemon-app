const express = require('express');
const db = require('./config/database');
const cors = require('cors');

const userRouter = require('./api/routes/user');

const app = express();
app.use(cors());

db();

app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT} port.`);
});
