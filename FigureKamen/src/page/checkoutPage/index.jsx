import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./index.scss";

function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    note: "",
    paymentMethod: "cod",
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    alert("Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    clearCart();
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 500000 ? 0 : 50000;
  const total = subtotal + shipping;

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Thanh toán</h1>

        <div className="checkout-content">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Thông tin liên hệ</h3>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Thông tin giao hàng</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Họ *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Họ"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tên *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Tên"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="0123 456 789"
                  />
                </div>

                <div className="form-group">
                  <label>Địa chỉ *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Số nhà, tên đường"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Thành phố *</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Chọn thành phố</option>
                      <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                      <option value="ha-noi">Hà Nội</option>
                      <option value="da-nang">Đà Nẵng</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quận/Huyện *</label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      required
                      placeholder="Quận/Huyện"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phường/Xã *</label>
                  <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                    required
                    placeholder="Phường/Xã"
                  />
                </div>

                <div className="form-group">
                  <label>Ghi chú (tùy chọn)</label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Ghi chú cho đơn hàng..."
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="form-section">
                <h3>Phương thức thanh toán</h3>
                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                    />
                    <span className="payment-label">
                      <strong>Thanh toán khi nhận hàng (COD)</strong>
                      <small>Thanh toán bằng tiền mặt khi nhận hàng</small>
                    </span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={handleInputChange}
                    />
                    <span className="payment-label">
                      <strong>Chuyển khoản ngân hàng</strong>
                      <small>Chuyển khoản trước khi giao hàng</small>
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="place-order-btn">
                Đặt hàng
              </button>
            </form>
          </div>

          <div className="order-summary">
            <div className="summary-card">
              <h3>Đơn hàng của bạn</h3>

              <div className="order-items">
                {items.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-image">
                      <img src={item.img} alt={item.name} />
                      <span className="quantity-badge">{item.quantity}</span>
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <span className="item-price">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-totals">
                <div className="total-line">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="total-line">
                  <span>Phí vận chuyển:</span>
                  <span>
                    {shipping === 0 ? "Miễn phí" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="total-line final">
                  <span>Tổng cộng:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
