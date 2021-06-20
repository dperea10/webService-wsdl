const { Router } = require('express');

const { getGameScoreResult } = require('../controllers/gameScoreResult')

const router = Router();


router.get('/get-score-result', getGameScoreResult );


module.exports = router;