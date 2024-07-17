import { Component, createSignal } from 'solid-js';
import logo from './image/logo.svg';
import language from './image/language.svg';
import arrowDown from './image/arrowDown.svg';
import arrow from './image/arrow.svg';
import gambar1 from './image/gambar1.svg';
import kepolisian from './image/kepolisian.svg';
import kemenkes from './image/kemenkes.svg';
import damkar from './image/damkar.svg';
import kemensos from './image/kemensos.svg';
import sar from './image/sar.svg';
import pln from './image/pln.svg';
import LoginPopUp from './LoginPopUp';
import RegisterPopUp from './RegisterPopUp';
import styles from './landingpage.module.css';

const logos = [
  { src: kepolisian, alt: 'Kepolisian RI' },
  { src: kemenkes, alt: 'Kemenkes RI' },
  { src: damkar, alt: 'Dinas Damkar' },
  { src: kemensos, alt: 'Kemensos RI' },
  { src: sar, alt: 'Badan SAR Nasional' },
  { src: pln, alt: 'PT. PLN (Persero)' },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]; // Gandakan array logos

const LandingPage: Component = () => {
  const [activeNav, setActiveNav] = createSignal('Fitur');
  const [showLogin, setShowLogin] = createSignal(false);
  const [showRegister, setShowRegister] = createSignal(false);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const closePopUp = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleRegister = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <div class={styles.logoContainer}>
          <img src={logo} alt="Logo" class={styles.logo} />
          <h1 class={styles.appName}>Sentra Darurat</h1>
        </div>
        <nav class={styles.nav}>
          <div class={styles.navbarSection}>
            {['Fitur', 'Layanan', 'Keunggulan', 'Panduan', 'Kontak'].map((item) => (
              <a
                href="#"
                class={activeNav() === item ? styles.active : ''}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </a>
            ))}
          </div>
          <div class={styles.languageSection}>
            <img src={language} alt="Language" />
            <span>IND</span>
            <img src={arrowDown} alt="Arrow Down Icon" class={styles.arrowDown} />
          </div>
          <button class={styles.loginButton} onClick={toggleLogin}>Masuk</button>
          <button class={styles.registerButton} onClick={toggleRegister}>Daftar</button>
        </nav>
      </header>
      <main class={styles.mainContent}>
        <div class={styles.textSection}>
          <h1>Laporkan Situasi Darurat yang Terjadi Disekitar Anda</h1>
          <p>Segera hubungi nomor layanan darurat yang anda butuhkan lalu kirimkan bukti atau detail situasi beserta foto <br />langsung dari lokasi kejadian.</p>
          <div class={styles.supportedBy}>
            <button class={styles.primaryButton} onClick={toggleLogin}>Mulai sekarang</button>
            <span class={styles.didukungOleh}>Didukung oleh</span>
            <img src={arrow} alt="Arrow" />
          </div>
          <div class={styles.logoFrame}>
            <div id="logosContainer" class={styles.logosContainer}>
              {duplicatedLogos.map(logo => (
                <div class={styles.logoItem}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class={styles.imageSection}>
          <img src={gambar1} alt="Kontak Cepat" />
        </div>
      </main>
      {showLogin() && <LoginPopUp onClose={closePopUp} onSwitch={toggleRegister} />}
      {showRegister() && <RegisterPopUp onClose={closePopUp} onSwitch={toggleLogin} onRegister={handleRegister} />}
    </div>
  );
};

export default LandingPage;
