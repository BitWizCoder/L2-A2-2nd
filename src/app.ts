import express, { Application, Request, Response } from "express";

const app: Application = express();

// Parsers
app.use(express.json());

// Application Routes
app.get("/", (req: Request, res: Response) => {
  res.json("Assignment 2 - Backend (API)");
});

export default app;