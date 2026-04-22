import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  const { push } = useRouter();

  const handleRegister = () => {
    alert("Register berhasil!");
    push("/auth/login");
  };

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold text-green-600">Halaman Register</h1>

      <input type="text" placeholder="Nama" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />

      <button className={styles.button} onClick={handleRegister}>
        Register
      </button>

      <h3>Sudah punya akun?</h3>

      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;