const express = require('express');
const User = require('../models/User')

const router = express.Router();

//Display all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        // const token = await user.generateAuthToken()
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;