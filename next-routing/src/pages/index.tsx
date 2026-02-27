import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Navbar from '@/components/layouts/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Praktikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Teknik Informatika</p>
      
      <Link href="/about">
        Ke Halaman About
      </Link>
    </div>
  )
}