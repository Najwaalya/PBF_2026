import useSWR from "swr";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

// fetcher function
const fetcher = (url: string) => fetch(url).then(res => res.json());


const Kategori = () => {
  // pakai SWR
  const { data, error, isLoading, mutate } = useSWR("/api/produk", fetcher);

  // ambil data
  const products = data?.data || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Produk</h1>

      {/* 🔄 Refresh manual */}
      <button
        onClick={() => mutate()}
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

      {/* Error */}
      {error && <p>Gagal mengambil data</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        
        {/* 🔥 Skeleton Loading */}
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "200px",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#eee",
                  animation: "pulse 1.5s infinite",
                }}
              >
                <div
                  style={{
                    height: "150px",
                    background: "#ddd",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <div style={{ height: "10px", background: "#ddd", marginBottom: "6px" }} />
                <div style={{ height: "10px", background: "#ddd", width: "70%" }} />
              </div>
            ))

          : products.map((product: ProductType) => (
              <div
                key={product.id}
                className="card"
                style={{
                  width: "200px",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3>{product.name}</h3>
                <p>Rp {product.price}</p>
                <p>{product.category}</p>
              </div>
            ))}
      </div>

      {/* Animasi */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          .card:hover {
            transform: translateY(-5px) scale(1.03);
          }
        `}
      </style>
    </div>
  );
};

export default Kategori;