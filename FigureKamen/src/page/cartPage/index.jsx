import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./index.scss";

function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();

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

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 500000 ? 0 : 50000;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart-page">
            <div className="empty-icon">🛒</div>
            <h2>Giỏ hàng của bạn đang trống</h2>
            <p>
              Hãy khám phá bộ sưu tập Figure Rise Standard tuyệt vời của chúng
              tôi
            </p>
            <Link to="/collections" className="continue-shopping-btn">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Giỏ hàng của bạn</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            Xóa tất cả
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items-section">
            <div className="items-header">
              <span>Sản phẩm</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </div>

            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-type">{item.type}</p>
                      <div className="item-price">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  </div>

                  <div className="quantity-section">
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
                      Xóa
                    </button>
                  </div>

                  <div className="item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Tóm tắt đơn hàng</h3>

              <div className="summary-line">
                <span>Tạm tính:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="summary-line">
                <span>Phí vận chuyển:</span>
                <span>
                  {shipping === 0 ? "Miễn phí" : formatPrice(shipping)}
                </span>
              </div>

              {subtotal < 500000 && (
                <div className="shipping-note">
                  Mua thêm {formatPrice(500000 - subtotal)} để được miễn phí vận
                  chuyển
                </div>
              )}

              <div className="summary-total">
                <span>Tổng cộng:</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="summary-actions">
                <Link to="/checkout" className="checkout-btn">
                  Tiến hành thanh toán
                </Link>
                <Link to="/collections" className="continue-shopping">
                  Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
