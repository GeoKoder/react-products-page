// src/App.jsx
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  const products = [
    { id: 1, name: "Kenyan AA Coffee Beans", price: 850, category: "Beverages", inStock: true },
    { id: 2, name: "Macadamia Nuts (500g)", price: 1200, category: "Snacks", inStock: true },
    { id: 3, name: "Organic Manuka Honey", price: 3500, category: "Pantry", inStock: false },
    { id: 4, name: "Dried Mango Slices", price: 450, category: "Snacks", inStock: true },
    { id: 5, name: "Cold Press Coconut Oil", price: 600, category: "Pantry", inStock: true },
    { id: 6, name: "Chai Masala Blend (100g)", price: 350, category: "Beverages", inStock: true },
    { id: 7, name: "Roasted Cashew Nuts", price: 900, category: "Snacks", inStock: true },
    { id: 8, name: "Avocado Oil (250ml)", price: 1100, category: "Pantry", inStock: false },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header title="Duka Marketplace" subtitle="Fresh Kenyan products delivered to your door" />

      <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
        <h2>Featured Products</h2>
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Showing {products.length} products
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              imageUrl="https://picsum.photos/seed/picsum/500/300/" 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;