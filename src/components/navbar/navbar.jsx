import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.Navbar}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="Logo.png" alt="" />
          Rumah Impian Kolana
        </a>
        <div>
          <a className="nav-link" aria-current="page" href="/">Beranda</a>
          <a href="/layanan">Layanan</a>
          <a href="/fitur">Fitur</a>
          <a href="/kontak">Kontak</a>
        </div>
      </div>
    </nav>
  );
}
