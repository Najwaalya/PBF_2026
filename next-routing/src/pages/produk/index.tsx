import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import TampilanProduk from "../../views/auth/produk";

const Kategori = () => {
  const { push } = useRouter();

  // Mengambil data produk menggunakan SWR dan fetcher global
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Handle error jika gagal mengambil data
  if (error) return <div style={{ padding: "20px" }}>Gagal mengambil data produk</div>;

  return (
    <div>
      {/* Mengirim data ke TampilanProduk. Jika loading kirim array kosong, jika ada datanya kirim data.data */}
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default Kategori;