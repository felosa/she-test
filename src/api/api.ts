import axios from "axios";
import mockData from "./db.json";

export const GET = (query: string) =>
  axios
    .get(``)
    .then(() => mockData)
    .catch((err) => err);

export const apiGenerateQuestions = () => GET("amount=10");
