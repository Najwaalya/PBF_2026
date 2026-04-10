import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const Kategori = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    const res = await fetch("/api/produk");
    const result = await res.json();
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Produk</h1>

      <button
        onClick={getProducts}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🔄 Refresh Data
      </button>

      {/* LIST PRODUK */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {/* GAMBAR */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",      // full lebar card
                height: "150px",    // tinggi tetap
                objectFit: "cover", // biar ga gepeng
                borderRadius: "8px",
              }}
            />

            <h3>{product.name}</h3>
            <p>Harga: {product.price}</p>
            <p>Kategori: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategori;