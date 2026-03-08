import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Navbar from '@/components/layouts/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      
      {/* Judul halaman */}
      <h1 className="text-3xl font-bold">Selamat Datang di Website Kami</h1>

      {/* Deskripsi singkat */}
      <p>
        Website ini menyediakan berbagai informasi dan produk menarik
        yang dapat kamu jelajahi dengan mudah.
      </p>

      {/* Gambar ilustrasi */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src="/home-page.png"
          alt="Ilustrasi Home"
          width={400}
          height={300}
        />
      </div>

    </div>
  );
}