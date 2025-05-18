import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { HomePage } from "@pages/home/HomePage";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import { RegistrationForm } from "@features/auth/ui/registrationForm";
import { LoginPage } from "@shared/ui/loginPage";
import { ProductsPage } from "@pages/products/ProductsPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'registration',
          element: <RegistrationForm />,
        },
        {
          path: 'products',
          element: <ProductsPage />,
        },
        {
            path: '*',
            element: <NotFoundPage />, //страница 404 
        }
      ],
    },
  ]);