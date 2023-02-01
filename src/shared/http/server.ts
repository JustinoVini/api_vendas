import express, { NextFunction, Request, Response }  from "express";
import cors from 'cors'
import routes from './routes';
import AppError from "@shared/errors/AppError";
// instanciando os frameworks para podermos trabalhar com o node

const app = express();

app.use(cors());
app.use(express.json());

// método para poder utilizar as rotas
app.use(routes);

// middleware para tratamento de erro. geralmente recebe 3 parametros porém neste caso, como estamos capturando um erro sem usar try_catch ele vem
// com 4 parametros
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    // quando o erro for uma instacia da nossa classe, ele tem os 2 atributos
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  // quando não for uma instancia da nossa classe, o codigo vai ser desconhecido
    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    })
});

// chama a conexão e passa uma mensagem
app.listen(3000, () => {
  console.log("Server running on PORT! ");
});
