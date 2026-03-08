import styles from "@/styles/404.module.scss";
import Link from "next/link";

const Custom404 = () => {
 return (
    <div className={styles.container}>

      <h1 className={styles.title}>404 - Halaman Tidak Ditemukan</h1>

      <p className={styles.desc}>
        Halaman yang kamu cari tidak ditemukan
      </p>

      <img 
        src="/page-not-found.png" 
        alt="404"
        className={styles.image}
        width="300"
      />

      {/* Tombol kembali */}
      <Link href="/">
        <button style={{marginTop:"20px"}}>
          Kembali ke Home
        </button>
      </Link>

    </div>
  );
};

export default Custom404;