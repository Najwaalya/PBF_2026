import TampilanProduk from "../../views/auth/produk";
import { ProductType } from "../../types/product.type";
import Link from "next/link";

const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <div style={{ padding: "30px", background: "#f5f5f5", minHeight: "100vh" }}>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "32px",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          Daftar Produk
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {products.map((product: ProductType) => (
            <Link href={`/produk/${product.id}`} key={product.id}>
              <div
                style={{
                  width: "220px",
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "12px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                      color: "#222",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#777" }}>
                    {product.category}
                  </p>

                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#ff5722",
                      marginTop: "8px",
                    }}
                  >
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default halamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const respone = await res.json();
  
  return {
    props: {
      products: respone.data,
    },
  };
}