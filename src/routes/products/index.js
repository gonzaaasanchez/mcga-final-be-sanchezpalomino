import express from 'express';
import productsController from '../../controllers/products/index.js';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);
productsRouter.post('/', productsController.create);
productsRouter.get('/:id', productsController.getById);
productsRouter.delete('/:id', productsController.delete);
productsRouter.put('/:id', productsController.update);

export default productsRouter;
