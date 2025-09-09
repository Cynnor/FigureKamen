import { useParams } from "react-router-dom";
import { collectionsMap } from "../collectionsPage/index";
import "./index.scss";

function ProductDetailPage() {
  const { id } = useParams();
  const product = collectionsMap[id];

  if (!product) {
    return <div style={{ padding: 32 }}>Không tìm thấy sản phẩm!</div>;
  }

  return (
    <div
      className="product-detail-page"
      style={{ padding: "32px", maxWidth: 600, margin: "0 auto" }}
    >
      <h2 style={{ marginBottom: "24px" }}>{product.name}</h2>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "24px" }}
      />
      <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "12px" }}>
        Giá: {product.price.toLocaleString("vi-VN")} VND
      </p>
      <p style={{ color: "#666", marginBottom: "12px" }}>{product.type}</p>
      <p style={{ marginBottom: "24px" }}>{product.desc}</p>
    </div>
  );
}

export default ProductDetailPage;
