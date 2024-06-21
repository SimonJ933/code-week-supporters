import { teams } from "./teams.js";

// FUNZIONE PER PATCHARE LA NOSTRA LISTA UTENTI E RANDOMIZZARE LA SQUADRA ASSEGNATA

const updateResponse = async (data) => {
  const users = await data;

  let usersWithFavouriteTeams = users.map(async (user) => {
    let randomIndex = Math.floor(Math.random() * teams.length);

    const singleUserToUpdate = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        favouriteTeam: teams[randomIndex],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const updatedSingleUser = await singleUserToUpdate.json();

    return updatedSingleUser;
    // console.log(updatedSingleUser);
    // console.log(user);
  });

  const resolvedUsersWithFavouriteTeams = await Promise.all(usersWithFavouriteTeams);
  //   console.log(resolvedUsersWithFavouriteTeams);

  return resolvedUsersWithFavouriteTeams;
};
export { updateResponse };
