const userContainer = document.querySelector(".user-container");

const renderCard = (user) => {
  const cardDiv = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("h4");
  const cardEmail = document.createElement("h4");
  const cardFavouriteTeam = document.createElement("p");
  const cardTrophie = document.createElement("p");
  const cardImg = document.createElement("img");

  cardDiv.classList.add("user-card");
  cardName.textContent = `Name : ${user.name}`;
  cardUserName.textContent = `Username : ${user.username}`;
  cardEmail.textContent = `Email : ${user.email}`;
  cardFavouriteTeam.textContent = `Favourite Team : ${user.favouriteTeam.name}`;
  cardTrophie.textContent = `Trofei : ${user.favouriteTeam.scudetti} Scudetti - Champions League : ${user.favouriteTeam.championsLeague}`;
  cardImg.src = user.favouriteTeam.img;
  cardImg.width = "60";
  cardImg.height = "60";
  cardDiv.append(cardName, cardUserName, cardEmail, cardFavouriteTeam, cardTrophie, cardImg);
  userContainer.append(cardDiv);
};

export { renderCard };
