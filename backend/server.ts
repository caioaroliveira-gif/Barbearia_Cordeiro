import { Message } from './../node_modules/typescript/vendor/vscode-jsonrpc/lib/common/messages.d';
import { type Request, type Response } from "express";
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({message: "Isso está funcionando"});
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});