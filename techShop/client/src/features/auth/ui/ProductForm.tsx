import { useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';

interface ProductFormValues {
  id: number,
  name: string,
  image: string,
  description: string,
  quantity: number,
  price: string,
  discount_price: string
}

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>();

  const onSubmit = async (data: ProductFormValues) => {
    try {
      const res = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      alert(resData.message);
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="CLASS__NAME">
      <div>
        <label className="CLASS__NAME">Name</label>
        <Input
          {...register('name', { required: 'Name is required' })}
          className="CLASS__NAME"
        />
        {errors.name && (
          <p className="CLASS__NAME">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="CLASS__NAME">Image</label>
        <Input
          type="image"
          {...register('image', { required: 'image is required' })}
          className="CLASS__NAME"
        />
        {errors.image && (
          <p className="CLASS__NAME">{errors.image.message}</p>
        )}
      </div>
      
      <div>
        <label className="CLASS__NAME">Description</label>
        <Input
          type="description"
          {...register('description', { required: 'description is required' })}
          className="CLASS__NAME"
        />
        {errors.description && (
          <p className="CLASS__NAME">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="CLASS__NAME">Quantity</label>
        <Input
          type="quantity"
          {...register('quantity', { required: 'quantity is required' })}
          className="CLASS__NAME"
        />
        {errors.quantity && (
          <p className="CLASS__NAME">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <label className="CLASS__NAME">Price</label>
        <Input
          type="price"
          {...register('price', { required: 'price is required' })}
          className="CLASS__NAME"
        />
        {errors.price && (
          <p className="CLASS__NAME">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="CLASS__NAME">Discount price</label>
        <Input
          type="discount_price"
          {...register('discount_price', { required: 'discount price is required' })}
          className="CLASS__NAME"
        />
        {errors.discount_price && (
          <p className="CLASS__NAME">{errors.discount_price.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="CLASS__NAME"
      >
        Create
      </button>
    </form>
  );
};