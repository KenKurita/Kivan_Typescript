import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Fuck you Ken");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});