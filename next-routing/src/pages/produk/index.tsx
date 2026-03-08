import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div>
      <h1>Halaman Product</h1>
      <p>Selamat datang di halaman produk</p>
    </div>
  );
}