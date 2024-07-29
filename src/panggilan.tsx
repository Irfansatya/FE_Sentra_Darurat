import { Component } from 'solid-js';
import styles from './beranda.module.css';
import logo from './image/logo.svg';
import notifikasi from './image/notifikasi.svg';
import riwayat from './image/riwayat.svg';
import search from './image/search.svg';
import ilustration from './image/ilustration.svg';

const Panggilan: Component = () => {
    return (
      <div class={styles.container}>
        {/* Navbar */}
        <div class={styles.navbar}>
          <img src={logo} alt="Logo" class={styles.logo} />
          <h1 class={styles.appName}>Sentra Darurat</h1>
          <div class={styles.navItems}>
            <a href="/beranda" class={styles.navItemActive}>Beranda</a>
            <a href="#" class={styles.navItemPanggilan}>Panggilan</a>
            <a href="/riwayat" class={styles.navItemRiwayat}>Riwayat</a>
          </div>
          <div class={styles.navRight}>
            <div class={styles.cariLayanan}>
              <img src={search} alt="Search" class={styles.searchIcon} />
              <input type="text" placeholder="Cari layanan..." class={styles.searchBox} />
            </div>
            <img src={notifikasi} alt="Notifikasi" class={styles.iconNotifikasi} />
            <img src={riwayat} alt="Riwayat" class={styles.iconRiwayat} />
            <h1 class={styles.namaUser}>Irfan Satya</h1>
            <div class={styles.profileCircle}>I</div>
          </div>
        </div>
        <div class={styles.kosong}>
        <img src={ilustration} alt="Ilustration" class={styles.ilustration} />
        </div>
    </div>
    );
}; 

export default Panggilan;