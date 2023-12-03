import { Router } from 'express';
import productsController from '../products/index.js';

const productsRouter = Router();

//GET
productsRouter.get('/', productsController.getAll);

//POST
productsRouter.post('/', productsController.create);

//GET
productsRouter.get('/:id', productsController.getById);

//DELETE
productsRouter.delete('/:id', productsController.delete);

//PUT
productsRouter.put('/:id', productsController.update);

export default productsRouter;
