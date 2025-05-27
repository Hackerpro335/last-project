import { ThemeToggle } from '@shared/ui/ThemeToggle';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        
        <Link to="/" className="header__logo">
          TechShop
        </Link>

        <nav className="header__nav">
          <Link to="/login" className="header__link">
            Login
          </Link>
          <Link to="/registration" className="header__link">
            Register
          </Link>
          <Link to="/products" className="header__link">
            Products
          </Link>
        </nav>

        <div className="header__toggle">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
