import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.json("Assignment 2 - Backend (API)");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
