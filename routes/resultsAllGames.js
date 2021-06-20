const { Router } = require('express');

const { getResultsAllGames } = require('../controllers/resultsAllGames')

const router = Router();


router.get('/get-results-all-games', getResultsAllGames );


module.exports = router;