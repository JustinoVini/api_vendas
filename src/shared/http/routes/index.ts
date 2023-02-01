import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Vinicius!' })
});

// exportando as rotas para uso.
export default routes;
