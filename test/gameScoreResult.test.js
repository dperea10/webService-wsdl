const getGameScoreResult = require('../routes/gameScoreResult');


// test('status(200)', () => {
//   // read from XML file

  let responseData =
    {
      "GameScoreResult": {
          "iGameNumber": 3,
          "sDescription": "Match 3",
          "dtLocalPlayDateTime": "2021-06-12 18:00:00.000",
          "dtUTCPlayDateTime": "2021-06-12 16:00:00.000",
          "sTeamName1": "Denmark",
          "sTeamName2": "Finland",
          "iScoreTeam1": 0,
          "iScoreTeam2": 1,
          "iRedCards": 0,
          "iYellowCards": 2,
          "sGroupCode": "B",
          "bFinished": true,
          "iPenaltiesWonTeam1": 0,
          "iPenaltiesWonTeam2": 0
      }
  };

  let sendTest = {
    "iGameNumber": 3
}

test('should pass', async () => {
    const res = await getGameScoreResult.get('/get-score-result')
      .send(sendTest);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(responseData);
  });
