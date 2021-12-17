import "reflect-metadata";
import express from "express";
import "./database";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.listen(port, () => console.log("Server is running!"));