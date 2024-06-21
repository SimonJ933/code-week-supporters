const statisticsContainer = document.querySelector(".statistics-container");

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
      teamVote.textContent = `% voti : ${juveLenght}`;
      break;
    case "Milan":
      teamVote.textContent = `% voti : ${milanLenght}`;
      break;
    case "Inter":
      teamVote.textContent = `% voti : ${interLenght}`;
      break;
    case "Napoli":
      teamVote.textContent = `% voti : ${napoliLenght}`;
      break;
    case "Roma":
      teamVote.textContent = `% voti : ${romaLenght}`;
      break;
    case "Lazio":
      teamVote.textContent = `% voti : ${lazioLenght}`;
      break;
  }

  teamImg.width = "60";
  teamImg.height = "60";

  statDiv.append(teamImg, teamName, teamVote);
  statisticsContainer.append(statDiv);
};

export { statAnalisis };
