'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <div className="background-1">
      <div className="top-navbar">
      <div className="logo-title">
                {/* <img src="Logo.png" alt="Logo Rumah Impian Kola"/> */}
                <p className="title">
                Rumah Impian Kola</p>
      </div>
      <div className="menu-navbar">
                <button className="selected-menu-navbar">
                Beranda</button>
                <button className="select-menu-navbar">
                Layanan</button>
                <button className="select-menu-navbar">
                Fitur</button>
                <button className="select-menu-navbar" onClick={() => router.push('/kontak')}>
                Kontak</button>
            </div>
          <div className="div-akun">
              <button className="button-daftar">
              Daftar</button>
              <button className="button-masuk">
              Masuk</button>
          </div>  
          </div>
          <p className="subtitle">
            Membantu </p>
          <p className="subtitle">Menemukan Rumah </p>  
          <p className="subtitle">Impianmu Disini ! </p>

          <p className="promp-1">
            Kini telah hadir <strong>Rumah Impian Kola</strong> untuk </p>
          <p className="promp-1">menemukan rumah untuk dijual dan di </p>  
          <p className="promp-1">sewa dengan sumber terpercaya.  </p>

          {/* <img src="opening house.png" alt="Gambar rumah impian kola" class="image-hand"/> */}
        <div className="div-temukan">
          <button className="button-temukan">
          Temukan Rumah</button>
        <div>
          <Button variant="primary">Hubungi Kami</Button>
        </div>
        </div>

        </div>
    </div>
    
  );
}
  