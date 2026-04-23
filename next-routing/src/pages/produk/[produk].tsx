import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "../../types/product.type";

const HalamanProduk = ({ produk }: { produk: ProductType }) => {
    {/digunakan client-side rendering dengan SWR untuk mengambil data produk/}
  // const Router = useRouter();
  // console.log(Router);
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(`/api/products/${query.produk}`, fetcher);
  
  return (
    <div>
      <DetailProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

// return (
//     <div>
//       <DetailProduk products={produk}/>
//     </div>
//   );
// }

export default HalamanProduk;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
// (digunakan server-side rendering)
{/digunakan server-side rendering dengan getServerSideProps untuk mengambil data produk sebelum merender halaman/}
// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
//   const response = await res.json();

//   return {
//     props: {
//       produk: response.data || null,
//     },
//   };
// }

{/digunakan static generation dengan getStaticProps untuk mengambil data produk pada build time/}
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/produk');
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: { produk: product.id.toString() }
//   }));

//   return {
//     paths,
//     fallback: false
//   };
// }

// export async function getStaticProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
//   const response: { data: ProductType } = await res.json(); // ✅ FIX (bukan array)

//   return {
//     props: {
//       produk: response.data || null, // ✅ FIX nama
//     }
//   };
// }