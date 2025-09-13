import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./page/homePage";
import CollectionsPage from "./page/collectionsPage";
import AboutPage from "./page/aboutPage";
import ContactPage from "./page/contactPage";
import LoginPage from "./page/loginPage";
import RegisterPage from "./page/registerPage";
import PromotionPage from "./page/promotionPage";
import CartPage from "./page/cartPage";
import CheckoutPage from "./page/checkoutPage";
import "./main.scss";

// Layout component to conditionally render header and footer
function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}



function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/promotions" element={<PromotionPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
