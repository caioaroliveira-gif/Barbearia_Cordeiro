import { type Request, type Response } from "express";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({message: "Isso está funcionando"});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});