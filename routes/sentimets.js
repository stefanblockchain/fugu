const express = require('express');
const passport = require('passport');

const router = express.Router();
const SentimentService = require('../services/sentimentService');

router.post('/', passport.authenticate('jwt', { session: false }), async function (req, res, next) {
    const sentimentService = new SentimentService();
    const completion = await sentimentService.sentimet(req.body.emailText);
    res.json({ status: completion });
});

module.exports = router;
