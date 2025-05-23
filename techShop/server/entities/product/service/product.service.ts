import { User } from '../../user/models/User';
import { Product } from '../models/Product';

interface ProductData {
  title: string;
  content: string;
  count: number;
  user_id: number;
  tag_id: number;
}

export const productService = {
  async createProduct({ title, content, count, user_id, tag_id }: ProductData) {
    // Проверка существования пользователя
    const user = await User.findByPk(user_id);
    if (!user) {
      throw new Error('User not found');
    }

    // Создаем продукт
    const newProduct = await Product.create({
      name: title,  // Используем title для name
      description: content,  // Используем content для description
      quantity: count,  // Используем count для quantity
      user_id: user_id,  // Используем user_id
    });

    const productData = newProduct.toJSON();

    return {
      id: productData.id,
      name: productData.name,
      description: productData.description,
      quantity: productData.quantity,
      user_id: productData.user_id,
    };
  }
};
