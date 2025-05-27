import { ProductForm } from "@features/auth/ui/ProductForm";
import './productPage.css';
import { ProductList } from "@features/auth/ui/ProductList";

export const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1 className="products-page__title">Products page</h1>
      <div className="product-form">
        <ProductForm />
      </div>
      <ProductList />
    </div>
  );
};
