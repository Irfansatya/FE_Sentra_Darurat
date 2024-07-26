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
import iconEksplor from './image/iconEksplor.svg';
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
        <nav class={styles.navbar}>
          <img src={logo} alt="Logo" class={styles.logo} />
          <div class={styles.navLinks}>
            <a href="#beranda" class={styles.active}>Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#riwayat">Riwayat</a>
          </div>
          <div class={styles.navRight}>
            <div class={styles.searchBox}>
              <img src={search} alt="Search" class={styles.searchIcon} />
              <input type="text" placeholder="Cari layanan.." />
            </div>
            <img src={notifikasi} alt="Notifikasi" class={styles.icon} />
            <img src={riwayat} alt="Riwayat" class={styles.icon} />
            <div class={styles.profileCircle}>I</div>
          </div>
        </nav>
  
        <div class={styles.hero}>
          <img src={background} alt="Background" class={styles.background} />
          <div class={styles.heroContent}>
            <h1>Selamat datang, Irfan Satya</h1>
            <div class={styles.heroBoxes}>
              <div class={styles.heroBox}>
                <img src={iconKategori} alt="Kategori" />
                <div>
                  <p>KATEGORI LAYANAN DARURAT</p>
                  <p>Terdapat 6 Total Layanan</p>
                  <button>Lihat semua</button>
                </div>
              </div>
              <div class={styles.heroBox}>
                <img src={iconRiwayat} alt="Riwayat" />
                <div>
                  <p>RIWAYAT PANGGILAN ANDA</p>
                  <p>Lihat Detail Riwayat Panggilan</p>
                  <button>Lihat semua</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class={styles.servicesSection}>
          <h2>Layanan yang dapat anda hubungi</h2>
          <div class={styles.servicesContainer}>
            <img src={panahKiri} alt="Panah Kiri" class={styles.arrow} />
            <div class={styles.servicesFrame}>
              {[layanan1, layanan2, layanan3, layanan4, layanan5, layanan6].map((layanan, index) => (
                <div class={styles.serviceBox}>
                  <img src={layanan} alt={`Layanan ${index + 1}`} class={styles.serviceImage} />
                  <div class={styles.serviceContent}>
                    <img src={[logoKepolisian, logoKemenkes, logoDamkar, logoKemensos, logoBasarnas, logoPln][index]} alt={`Logo ${index + 1}`} class={styles.serviceLogo} />
                    <img src={[nomorKepolisian, nomorKemenkes, nomorDamkar, nomorKemensos, nomorBasarnas, nomorPln][index]} alt={`Nomor ${index + 1}`} class={styles.serviceNumber} />
                    <p>Melayani penegakan hukum, pencegahan dan penanggulangan kejahatan, serta...</p>
                    <a href="#">Hubungi sekarang!</a>
                  </div>
                  <img src={panggilLayanan} alt="Telepon" class={styles.callIcon} />
                </div>
              ))}
            </div>
            <img src={panahKanan} alt="Panah Kanan" class={styles.arrow} />
          </div>
        </div>
  
        <footer class={styles.footer}>
          <p>© 2024 Sentra Darurat. All rights reserved.</p>
          <div class={styles.footerLinks}>
            <img src={linkedin} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </footer>
      </div>
    );
  };
  
  export default Beranda;