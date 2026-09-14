// src/components/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: "#1a1a2e",
      color: "#aaa",
      padding: "24px",
      textAlign: "center",
      marginTop: "40px",
    }}>
      <p>Duka Marketplace &copy; {currentYear}</p>
      <p style={{ fontSize: "14px" }}>Nairobi, Kenya | support@duka.co.ke | 0700 123 456</p>
    </footer>
  );
};

export default Footer;