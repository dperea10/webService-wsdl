const { Router } = require('express');

const { getTeamNames } = require('../controllers/teamNames')

const router = Router();


router.get('/get-team-names', getTeamNames );


module.exports = router;