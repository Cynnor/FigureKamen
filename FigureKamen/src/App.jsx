import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import Layout from "./component/Layout";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";
import CollectionsPage from "./page/collectionsPage";
import ContactPage from "./page/contactPage";
import PromotionPage from "./page/promotionPage";
import ProductManagement from "./page/productManagement";
import OrderManagement from "./page/orderManagement";
import UserManagement from "./page/userManagement";
import Login from "./page/login";
import Register from "./page/register";
import ProductDetailPage from "./page/productDetailPage";

function FigureKamen() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/collections", element: <CollectionsPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/promotion", element: <PromotionPage /> },
        { path: "/productManagement", element: <ProductManagement /> },
        { path: "/orderManagement", element: <OrderManagement /> },
        { path: "/userManagement", element: <UserManagement /> },
        { path: "/product/:id", element: <ProductDetailPage /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default FigureKamen;
