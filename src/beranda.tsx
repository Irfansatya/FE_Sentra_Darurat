import { Component } from 'solid-js';
import styles from './beranda.module.css';
import logo from './image/logo.svg';
import notifikasi from './image/notifikasi.svg';
import riwayat from './image/riwayat.svg';
import search from './image/search.svg';
import background from './image/background.svg';
import iconKategori from './image/iconKategori.svg';
import iconRiwayat from './image/iconRiwayat.svg';
import panahKiri from './image/panahKiri.svg';
import panahKanan from './image/panahKanan.svg';
import layanan1 from './image/layanan1.svg';
import layanan2 from './image/layanan2.svg';
import layanan3 from './image/layanan3.svg';
import layanan4 from './image/layanan4.svg';
import layanan5 from './image/layanan5.svg';
import layanan6 from './image/layanan6.svg';
import panggilLayanan from './image/panggilLayanan.svg';
import logoKepolisian from './image/logoKepolisian.svg';
import logoKemenkes from './image/logoKemenkes.svg';
import logoDamkar from './image/logoDamkar.svg';
import logoKemensos from './image/logoKemensos.svg';
import logoBasarnas from './image/logoBasarnas.svg';
import logoPln from './image/logoPln.svg';
import nomorKepolisian from './image/nomorKepolisian.svg';
import nomorKemenkes from './image/nomorKemenkes.svg';
import nomorDamkar from './image/nomorDamkar.svg';
import nomorKemensos from './image/nomorKemensos.svg';
import nomorBasarnas from './image/nomorBasarnas.svg';
import nomorPln from './image/nomorPln.svg';
import linkedin from './image/linkedin.svg';
import facebook from './image/facebook.svg';
import instagram from './image/instagram.svg';
import twitter from './image/twitter.svg';

const Beranda: Component = () => {
  return (
    <div class={styles.container}>
      {/* Navbar */}
      <div class={styles.navbar}>
        <img src={logo} alt="Logo" class={styles.logo} />
        <h1 class={styles.appName}>Sentra Darurat</h1>
        <div class={styles.navItems}>
          <a href="#" class={styles.navItemActive}>Beranda</a>
          <a href="/panggilan" class={styles.navItemPanggilan}>Panggilan</a>
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

      {/* Welcome Section */}
      <div class={styles.welcomeSection} style={{ 'background-image': `url(${background})` }}>
        <div class={styles.welcomeText}>
          <h1 class={styles.selamatDatang}>Selamat datang, Irfan Satya</h1>
          <div class={styles.infoBoxWrapper}>
            <div class={styles.infoBox1}>
              <img src={iconKategori} alt="Kategori" />
              <div>
                <p class={styles.judulBoxLayanan}>KATEGORI LAYANAN DARURAT</p>
                <p class={styles.deskripsiBoxLayanan}>Terdapat 6 Total Layanan</p>
                <p class={styles.teksBoxLayanan}>Kepolisian, pemadam kebakaran, dan lainnya.</p>
              </div>
              <button class={styles.lihatSemuaLayanan}>Lihat semua</button>
            </div>
            <div class={styles.infoBox2}>
              <img src={iconRiwayat} alt="Riwayat Panggilan" />
              <div>
                <p class={styles.judulBoxRiwayat}>RIWAYAT PANGGILAN ANDA</p>
                <p class={styles.deskripsiBoxRiwayat}>Lihat Detail Riwayat Panggilan</p>
                <p class={styles.teksBoxRiwayat}>Panggilan darurat anda akan tersimpan disini.</p>
              </div>
              <button class={styles.lihatSemuaRiwayat}>Lihat semua</button>
            </div>
          </div>
        </div>
      </div>

      {/* Layanan Section */}
      <div class={styles.layananSection}>
        <h2 class={styles.teksLayananSection}>Layanan yang dapat anda hubungi</h2>
        <div class={styles.layananContainer}>
          <div class={styles.layananFrame}>
            {[layanan1, layanan2, layanan3, layanan4, layanan5, layanan6].map((layanan, index) => (
              <div class={styles.layananBox}>
                <img src={layanan} alt={`Layanan ${index + 1}`} />
                <img src={panggilLayanan} alt="Panggil Layanan" class={styles.callIcon} />
                <div class={styles.layananDetails}>
                  <img src={[
                    logoKepolisian,
                    logoKemenkes,
                    logoDamkar,
                    logoKemensos,
                    logoBasarnas,
                    logoPln
                  ][index]} alt="Logo" />
                  <img src={[
                    nomorKepolisian,
                    nomorKemenkes,
                    nomorDamkar,
                    nomorKemensos,
                    nomorBasarnas,
                    nomorPln
                  ][index]} alt="Nomor" />
                  <p>Hubungi sekarang!</p>
                </div>
              </div>
            ))}
          </div>
          <img src={panahKiri} alt="Scroll Kiri" class={styles.scrollArrow} />
          <img src={panahKanan} alt="Scroll Kanan" class={styles.scrollArrow} />
        </div>
      </div>

      {/* Footer */}
      <div class={styles.footer}>
        <p>© 2024 Sentra Darurat. All rights reserved.</p>
        <div class={styles.socialIcons}>
          <img src={linkedin} alt="LinkedIn" />
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Beranda;