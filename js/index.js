import { teams } from "./teams.js";
import { renderCard } from "./renderCard.js";
import { statAnalisis } from "./stats.js";
import { updateResponse } from "./map.js";
export { GET };

let juveLenght = 0;
let milanLenght = 0;
let napoliLenght = 0;
let romaLenght = 0;
let lazioLenght = 0;
let interLenght = 0;

const GET = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    });

const updatedUsers = await updateResponse(GET());
updatedUsers.forEach((updatedSingleUser) => {
  renderCard(updatedSingleUser);

  switch (updatedSingleUser.favouriteTeam.name) {
    case "Juventus":
      juveLenght++;
      break;
    case "Milan":
      milanLenght++;
      break;
    case "Inter":
      interLenght++;
      break;
    case "Napoli":
      napoliLenght++;
      break;
    case "Roma":
      romaLenght++;
      break;
    case "Lazio":
      lazioLenght++;
      break;
  }
});

teams.forEach((team) => {
  statAnalisis(team, juveLenght, milanLenght, napoliLenght, romaLenght, lazioLenght, interLenght);
});

// const PATCH = fetch(`https://jsonplaceholder.typicode.com/users/2`, {
//   method: "PATCH",
//   body: JSON.stringify({
//     favouriteTeam: "Team A",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// console.log(teams);

// ASSEGNIAMO UNA SQUADRA RANDOM AD OGNI UTENTE E STAMPIAMO IN DOM
// const assignRandomTeams = async () => {
//   const updateUser = [];
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     for (const user of users) {
//       const randomTeam = teams[Math.floor(Math.random() * teams.length)];

//       const updateResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           favouriteTeam: randomTeam,
//         }),
//       });

//       const updateUser = await updateResponse.json();
//       console.log(`Utente aggiornato:`, updateUser);
//       renderCard(updateUser);
//     }
//   } catch (error) {
//     console.error("Errore:", error);
//   }
// };

// assignRandomTeams();
