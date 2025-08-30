import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import Layout from "./component/Layout";
import ProductPage from "./page/productPage";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";
import CollectionsPage from "./page/collectionsPage";
import ContactPage from "./page/contactPage";
import PromotionPage from "./page/promotionPage";

function FigureKamen() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/collections", element: <CollectionsPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/promotion", element: <PromotionPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default FigureKamen;
