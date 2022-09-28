var nbaData = require("./modules/nbaData");

// test inputs
let team = "Toronto Raptors";
let location = "Los Angeles";
let lastname = "Achiuwa";

nbaData
  .initialize()
  .then(function () {
    nbaData
      .getAllPlayers()
      .then(function (data) {
        console.log(`NBA has ${data.length} players.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .getAllTeams()
      .then(function (data) {
        console.log(`NBA has ${data.length} teams.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .getTeamByName(team)
      .then(function (data) {
        console.log(`Succesfully retreived ${data.length} players in ${team}.`);
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .getTeamsByLocation(location)
      .then(function (data) {
        process.stdout.write(`The teams in ${location}: `);
        for (let i = 0; i < data.length; i++) {
          process.stdout.write(`${data[i].teamName}`);
          if (i !== data.length - 1) {
            process.stdout.write(`, `);
          } else {
            process.stdout.write(`.`);
          }
        }
      })
      .catch(function (reason) {
        console.log(reason);
      });
    nbaData
      .getPlayerTeamByLastname(lastname)
      .then(function (data) {
        // TO CONTINUE
        console.log(data);
      })
      .catch(function (reason) {
        console.log(reason);
      });
  })
  .catch(function (reason) {
    console.log(reason);
  });
