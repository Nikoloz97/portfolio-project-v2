import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

export const getPlayerList = () => {
  mock
    .onGet("https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerList")
    .reply(200, {
      body: [
        {
          playerID: "94914298027",
          team: "CHA",
          longName: "LaMelo Ball",
          teamID: "4",
        },

        {
          playerID: "94914479047",
          team: "MIA",
          longName: "Tyler Herro",
          teamID: "16",
        },
        {
          playerID: "94614279027",
          team: "ORL",
          longName: "Franz Wagner",
          teamID: "22",
        },
      ],
    });
};

export const getPlayerInfo = () => {
  mock
    .onGet("https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo")
    .reply(200, {
      body: [
        {
          bDay: "8/22/2001",
          bRefID: "ballla01",
          bRefName: "LaMelo Ball",
          cbsPlayerID: "3149252",
          college: "—",
          espnHeadshot:
            "https://a.espncdn.com/i/headshots/nba/players/full/4432816.png",
          espnID: "4432816",
          espnLink: "https://www.espn.com/nba/player/_/id/4432816/lamelo-ball",
          espnName: "LaMelo Ball",
          exp: "3",
          height: "6-7",
          jerseyNum: "1",
          lastGamePlayed: "20240126_HOU@CHA",
          longName: "LaMelo Ball",
          nbaComHeadshot:
            "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
          nbaComID: "1630163",
          nbaComLink: "https://www.nba.com/player/1630163",
          nbaComName: "LaMelo Ball",
          playerID: "94914298027",
          pos: "PG",
          shortName: "L. Ball",
          stats: {
            DefReb: "3.8",
            OffReb: "1.3",
            TOV: "3.8",
            ast: "8.0",
            blk: "0.2",
            effectiveShootingPercentage: "51.5",
            fga: "19.2",
            fgm: "8.3",
            fgp: "43.3",
            fta: "4.7",
            ftm: "4.1",
            ftp: "86.5",
            gamesPlayed: "22",
            mins: "32.4",
            pts: "23.9",
            reb: "5.1",
            stl: "1.8",
            tptfga: "9.0",
            tptfgm: "3.2",
            tptfgp: "35.5",
            trueShootingPercentage: "56.1",
          },
          team: "CHA",
          teamID: "4",
          weight: "180",
        },
      ],
    });
};
