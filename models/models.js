import { deployGames, users } from "../data/data.js";

export async function getUsers() {
  return users;
}

export async function getAllGames() {
  let games = deployGames();
  return games;
}

export async function getGameById(game_id) {
  let games = deployGames();
  return games.find(function (game) {
    return game.id === game_id;
  });
}

export async function createGame(new_game) {
  let games = deployGames();
  const toAdd = {
    id: games.length + 1,
    title: new_game.title,
    star_rating: new_game.star_rating,
    released_date: new_game.released_date,
    game_description: new_game.game_description,
  };
  games.push(toAdd);
  return games;
}

export async function deleteGameById(requestedId) {
  let games = deployGames();
  let deletedGameIndex = games.findIndex(function (game) {
    return game.id === Number(requestedId);
  });
  console.log(deletedGameIndex);
  if (deletedGameIndex < 0) {
    return { message: "This ID does not exist, please try again" };
  }
  games = [
    ...games.slice(0, deletedGameIndex),
    ...games.slice(deletedGameIndex + 1),
  ];
  return games;
}

// let array = [
//   { score: 31, name: "Snoop" },
//   { score: 42, name: "Teddy" },
//   { score: 63, name: "Simba" },
// ];
// console.log(
//   array.findIndex(function (x) {
//     return x.score === 63;
//   })
// );
