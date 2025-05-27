import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './productDetails.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  quantity: number;
  image: string;
}

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(err => console.error('Failed to fetch product:', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
        <button 
            className="product-detail__back"
            onClick={() => navigate('/products')}
        >
                ← Back to Products
        </button>
      <h2>{product.name}</h2>
      <img
        src={`http://localhost:3001/uploads/${product.image}`}
        alt={product.name}
        width="300"
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discount_price && <p>Discount: ${product.discount_price}</p>}
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};
