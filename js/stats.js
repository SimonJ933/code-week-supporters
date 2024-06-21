const statisticsContainer = document.querySelector(".statistics-container");

// FUNZIONE PER STAMPARE LE STATISTICHE IN DOM

const statAnalisis = (team, juveLenght, milanLenght, napoliLenght, romaLenght, lazioLenght, interLenght) => {
  const statDiv = document.createElement("div");
  const teamImg = document.createElement("img");
  const teamName = document.createElement("p");
  const teamVote = document.createElement("p");

  statDiv.classList.add("stat-grid");
  teamImg.src = team.img;
  teamName.textContent = team.name;

  switch (team.name) {
    case "Juventus":
      teamVote.textContent = `% Voti utenti : ${juveLenght}`;
      break;
    case "Milan":
      teamVote.textContent = `% Voti utenti : ${milanLenght}`;
      break;
    case "Inter":
      teamVote.textContent = `% Voti utenti : ${interLenght}`;
      break;
    case "Napoli":
      teamVote.textContent = `% Voti utenti : ${napoliLenght}`;
      break;
    case "Roma":
      teamVote.textContent = `% Voti utenti : ${romaLenght}`;
      break;
    case "Lazio":
      teamVote.textContent = `% Voti utenti : ${lazioLenght}`;
      break;
  }

  teamImg.width = "60";
  teamImg.height = "60";

  statDiv.append(teamImg, teamName, teamVote);
  statisticsContainer.append(statDiv);
};

export { statAnalisis };
