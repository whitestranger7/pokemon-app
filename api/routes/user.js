const express = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/User/User');
const auth = require('../middleware/auth');

const router = express.Router();

//get current user information
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

//create user
router.post(
    '/users/create',
    [
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
        check('email', 'Please include valid email').isEmail()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = new User(req.body);
        try {
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.send(error);
        }
    }
);

//user login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send('Unable to login');
    }
});

//logout user
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        });
        await req.user.save();

        res.status(200).send(req.user);
    } catch (error) {
        res.status(400).send('Unable to logout');
    }
});

//logout user from all devices (remove all tokens)
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        res.status(200).send(req.user);
    } catch (error) {
        res.status(400).send('Unable to logout');
    }
});

//delete user
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send('Something wrong...');
    }
});

module.exports = router;
