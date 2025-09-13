import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
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
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
