import { Request, Response } from 'express';
import { productService } from '../service/product.service';

export const productController = {
  createProduct: async (req: Request, res: Response) => {
    const { title, content, count, user_id, tag_id } = req.body;

    try {
      // Создаем продукт через сервис
      const newProduct = await productService.createProduct({ title, content, count, user_id, tag_id });

      res.status(201).json({
        id: newProduct.id,
        message: 'Product created successfully!',
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message || 'Product creation failed',
      });
    }
  }
};