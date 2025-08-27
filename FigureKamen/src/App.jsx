import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/header";
import ProductPage from "./page/productPage";
import "./main.scss";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";
import PolicyPage from "./page/policyPage/index";
import CheckoutPage from "./page/checkOutPage";

function FigureKamen() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage />
        </div>
      ),
    },
    {
      path: "/product",
      element: (
        <div>
          <ProductPage />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <AboutPage />
        </div>
      ),
    },
    {
      path: "/policy",
      element: (
        <div>
          <PolicyPage />
        </div>
      ),
    },
    {
      path: "/checkout",
      element: (
        <div>
          <CheckoutPage />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default FigureKamen;
