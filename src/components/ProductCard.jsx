// src/components/ProductCard.jsx
import Badge from "./Badge";

const ProductCard = ({ name, price, category, inStock, imageUrl }) => {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      overflow: "hidden",
      transition: "box-shadow 0.2s",
    }}>
      <div style={{
        height: "160px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
        fontSize: "14px",
      }}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span>No image available</span>
        )}
      </div>

      <div style={{ padding: "16px" }}>
        <div style={{ marginBottom: "8px" }}>
          <Badge text={category} />
          {!inStock && <Badge text="Sold Out" color="#dc3545" />}
        </div>

        <h3 style={{ margin: "8px 0", fontSize: "16px" }}>{name}</h3>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#2d6a4f" }}>
            KES {price.toLocaleString()}
          </span>
          <button
            disabled={!inStock}
            style={{
              padding: "8px 16px",
              backgroundColor: inStock ? "#2d6a4f" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: inStock ? "pointer" : "not-allowed",
              fontSize: "14px",
            }}
          >
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;