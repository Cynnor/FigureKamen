
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProductById } from "../../data/products";
import { useCart } from "../../contexts/CartContext";

import "./index.scss";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Sản phẩm không tồn tại</h2>
        <button onClick={() => navigate("/collections")}>
          Quay lại bộ sưu tập
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img
              src={product.images?.[selectedImage] || product.img}
              alt={product.name}
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? "active" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-type">{product.type}</p>
          <p className="product-price">{formatPrice(product.price)}</p>

          <div className="product-description">
            <h3>Mô tả sản phẩm</h3>
            <p>{product.desc}</p>
          </div>

          {product.specifications && (
            <div className="product-specs">
              <h3>Thông số kỹ thuật</h3>
              <ul>
                <li>Chiều cao: {product.specifications.height}</li>
                <li>Chất liệu: {product.specifications.material}</li>
                <li>Nhà sản xuất: {product.specifications.manufacturer}</li>
                <li>Ngày phát hành: {product.specifications.releaseDate}</li>
              </ul>
            </div>
          )}

          <div className="product-actions">
            <div className="quantity-selector">
              <label>Số lượng:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
            </button>
          </div>

          <div className="product-status">
            <span
              className={`status ${
                product.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.inStock ? "Còn hàng" : "Hết hàng"}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetailPage;
