import useSWR from "swr";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

// fetcher
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProdukPage() {
  const { data, error, isLoading, mutate } = useSWR("/api/produk", fetcher);

  const products = data?.data || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        Daftar Produk
      </h1>

    <button
      onClick={() => mutate()}
      style={{
        marginBottom: "20px",
        padding: "10px 16px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
      }}
    >
      Refresh Data
    </button>

      {error && <p>Gagal mengambil data</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "200px",
                  height: "250px",
                  background: "#eee",
                  borderRadius: "10px",
                }}
              />
            ))

          : products.map((product: ProductType) => (
              <Link href={`/produk/${product.id}`} key={product.id}>
                <div
                  style={{
                    width: "200px",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
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
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#ff5722",
                      marginTop: "5px",
                    }}
                  >
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <p>{product.category}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}