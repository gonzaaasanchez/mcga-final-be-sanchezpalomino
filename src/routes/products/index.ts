import { Router } from 'express';
import productsController from '../../controllers/products/index';
import { verifyToken } from '../../middleware/index';

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getById);
productsRouter.post('/', verifyToken, productsController.create);
productsRouter.delete('/:id', verifyToken, productsController.delete);
productsRouter.put('/:id', verifyToken, productsController.update);

export default productsRouter;
