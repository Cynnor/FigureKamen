import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./index.scss";

function CartSidebar({ isOpen, onClose }) {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`cart-sidebar ${isOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h3>Giỏ hàng ({items.length})</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <p>Giỏ hàng của bạn đang trống</p>
              <Link
                to="/collections"
                className="continue-shopping"
                onClick={onClose}
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-type">{item.type}</p>
                      <div className="item-price">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="qty-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="qty-btn"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="total-section">
                  <div className="total-price">
                    Tổng cộng: {formatPrice(getTotalPrice())}
                  </div>
                  <div className="shipping-note">
                    Miễn phí vận chuyển cho đơn hàng từ 500.000đ
                  </div>
                </div>
                <div className="cart-actions">
                  <Link to="/cart" className="view-cart-btn" onClick={onClose}>
                    Xem giỏ hàng
                  </Link>
                  <Link
                    to="/checkout"
                    className="checkout-btn"
                    onClick={onClose}
                  >
                    Thanh toán
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
