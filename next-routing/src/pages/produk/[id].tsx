import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Halaman Product</h1> <br />
      <p>Produk: {id}</p><br />
      <p>Selamat datang di halaman produk</p>
    </div>
  );
}