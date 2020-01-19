const express = require('express');
const User = require('../models/User')
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router.post('/users/create', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    } catch(error) {
        res.status(400).send('Unable to login');
    }
});

module.exports = router;