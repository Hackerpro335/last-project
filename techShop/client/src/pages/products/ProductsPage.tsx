import { ProductForm } from "@features/auth/ui/ProductForm";
import './productPage.css';
import { ProductList } from "@features/auth/ui/ProductList";

export const ProductsPage = () => {
  return (
    <div className="products-page">
        <ProductForm />
      <ProductList />
    </div>
  );
};
