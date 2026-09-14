// src/components/Badge.jsx
const Badge = ({ text, color = "#2d6a4f" }) => {
  return (
    <span style={{
      display: "inline-block",
      backgroundColor: color,
      color: "white",
      padding: "2px 10px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "bold",
    }}>
      {text}
    </span>
  );
};

export default Badge;