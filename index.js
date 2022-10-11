import express from "express";
import {
  getUsers,
  getAllGames,
  getGameById,
  createGame,
  deleteGameById,
} from "./models/models.js";

const app = express();
const PORT = 3000;
app.use(express.json());
//routes that handle requests
//GET all games
app.get("/", async function (req, res) {
  const users = await getUsers();
  res.json(users);
});

app.get("/games", async function (req, res) {
  const games = await getAllGames();
  res.json({
    message: "Here is a list of games I have played",
    payload: games,
  });
});

app.get("/games/:game_id", async function (req, res) {
  const game_found = await getGameById(Number(req.params.game_id));
  if (game_found === undefined) {
    return res.json({
      message: `Unfortunately I have not played the game with the id of ${req.params.game_id}`,
    });
  }
  res.json({
    message: `Here is the game I have played with the id of ${req.params.game_id}`,
    game: game_found,
  });
});

app.post("/games", async function (req, res) {
  const game = await createGame(req.body);
  res.json({ message: "Hey there!", success: true, payload: game });
});

app.delete("/games/:id", async function (req, res) {
  const game = await deleteGameById(req.params.id);
  res.json({ success: true, payload: game });
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
