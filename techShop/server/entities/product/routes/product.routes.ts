import { Router } from 'express';
import { asyncHandler } from '../../../shared/lib/asyncHandler';
import { productController } from '../controller/product.controller';

const productRouter = Router();
productRouter.post('/', asyncHandler(productController.createProduct));

productRouter.get('/', (req, res) => {
  res.status(405).json({ message: 'Use POST method to create product' });
});

export default productRouter;
