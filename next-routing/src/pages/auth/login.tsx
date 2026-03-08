import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");

    router.push({
      pathname: "/produk/[id]",
      query: { id: 1 }
    });
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      <button onClick={handleLogin}>Login</button>

      <p>
        Belum punya akun? <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
}