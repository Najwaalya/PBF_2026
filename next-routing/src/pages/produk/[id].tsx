import { Router, useRouter } from "next/router";

const HalamanProduk = () => {
    //const {query} = useRouter();
    //console.log(Router);
    const {query} = useRouter();
    return (
    <div>
        <h1>Halaman Produk</h1>
        <p>Produk: {query.id}</p>
    </div>
    );
};

export default HalamanProduk; 