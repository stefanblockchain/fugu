const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

router.post('/login', async function (req, res, next) {
  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred.');
          return next(error);

        }
        req.login(
          user,
          { session: false },
          async (error) => {
            if (error) return next(error);

            const body = { id: user.id, email: user.email, username: user.username };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRETS || "SECRET");

            return res.json({ token });
          }
        );
      } catch (error) {
        console.error(error);
        return next(error);
      }
    }
  )(req, res, next);
});

module.exports = router;
