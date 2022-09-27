var nbaData = require("./modules/nbaData");

nbaData
  .initialize()
  .then(function () {
    //     nbaData.getAllPlayers().then(function (data) {
    //       console.log(`Succesfully retreived ${data.length} players.`);
    //     });
    //   })
    //   .catch(function (reason) {
    //     console.log(reason);
    //   });
    // nbaData
    //   .getAllTeams()
    //   .then(function (data) {
    //     console.log(`Succesfully retreived ${data.length} teams.`);

    // console.log("success");

    nbaData
      .getAllPlayers()
      .then(function (data) {
        console.log(`Succesfully retreived ${data.length} players.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .getAllTeams()
      .then(function (data) {
        console.log(`Succesfully retreived ${data.length} teams.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .atlantaPlayers()
      .then(function (data) {
        console.log(`Succesfully retreived ${data.length} players.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
  })
  .catch(function (reason) {
    console.log(reason);
  });
