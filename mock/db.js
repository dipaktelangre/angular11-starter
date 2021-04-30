var faker = require("faker");

genrateCardData = (totalCards = 100) => {
  return Array(totalCards)
    .fill({})
    .map((_) => {
      return faker.helpers.createCard();
    });
};

module.exports = () => {
  const data = {
    post: [{ label: "Post label 1" }],
    users: [
      {
        name: "Dipak",
      },
    ],
    cards: genrateCardData(200),
  };
  return data;
};
