import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
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
    <div>
      <h1>Daftar Produk</h1>

      <button
        onClick={() => {
          console.log("KEKLIK!");
          getProducts();
        }}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "16px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 10
        }}
      >
        🔄 Refresh Data
      </button>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori;