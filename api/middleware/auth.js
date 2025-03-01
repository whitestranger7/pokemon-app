const jwt = require('jsonwebtoken');
const User = require('../models/User/User');
const config = require('config');

const auth = async (req, res, next) => {
    try {
        // const token = req.header('Authorization').replace('Bearer ', '');
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, config.get('tokenSecret'));
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token
        });

        if (!user) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;
