import axios from "axios";

export const githubBasePoint = axios.create({
  baseURL: "https://api.github.com/",
});

export const pokeBasePoint = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
