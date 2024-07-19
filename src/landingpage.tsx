import { Component, createSignal, createEffect } from 'solid-js';
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
import arrowLihat from './image/arrowLihat.svg';
import boxKepolisian from './image/boxKepolisian.svg';
import boxAmbulans from './image/boxAmbulans.svg';
import boxPemadam from './image/boxPemadam.svg';
import leftScroll from './image/leftScroll.svg';
import rightScroll from './image/rightScroll.svg';
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

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]; // Duplicate logos array

const LandingPage: Component = () => {
  const [activeNav, setActiveNav] = createSignal('Fitur');
  const [showLogin, setShowLogin] = createSignal(false);
  const [showRegister, setShowRegister] = createSignal(false);
  const [section, setSection] = createSignal(1);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const section1Top = 0;
    const section2Top = window.innerHeight;
    const section3Top = 2 * window.innerHeight;

    // Determine which section is currently in view
    if (scrollPosition < section2Top) {
      setSection(1);
    } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
      setSection(2);
    } else {
      setSection(3);
    }
  };

  // Effect to add scroll listener
  createEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  
    // Mengatur posisi scroll berdasarkan section yang aktif
    if (navItem === 'Layanan') {
      setSection(2);
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    } else if (navItem === 'Keunggulan') {
      setSection(3);
      window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' });
    } else if (navItem === 'Panduan') {
      setSection(4);
      window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' });
    } else {
      setSection(1); // Default to section 1 for other nav items
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        <div class={styles.section} style={{ transform: section() === 1 ? 'translateY(0)' : 'translateY(-100vh)' }}>
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
                {duplicatedLogos.map((logo) => (
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
          </div>
        <div class={styles.section} style={{ transform: section() === 2 ? 'translateY(0)' : 'translateY(100vh)' }}>
        <div class={styles.layanan}>
      <h1 class={styles.title}>Kategori Layanan</h1>
      <p class={styles.description}>Terdapat berbagai layanan yang siap membantu anda mengatasi situasi darurat.</p>
      <button class={styles.viewAllButton} onClick={toggleLogin}>
        Lihat semua <img src={arrowLihat} alt="Lihat semua" />
      </button>
      <div class={styles.servicesContainer}>
        <img src={leftScroll} alt="Scroll left" class={styles.scrollIcon} />
        <div class={styles.serviceBox}>
          <img src={boxKepolisian} alt="Kepolisian" />
        </div>
        <div class={`${styles.serviceBox} ${styles.blueBox}`}>
          <img src={boxAmbulans} alt="Ambulans" />
        </div>
        <div class={styles.serviceBox}>
          <img src={boxPemadam} alt="Pemadam Kebakaran" />
        </div>
        <img src={rightScroll} alt="Scroll right" class={styles.scrollIcon} />
      </div>
    </div>
        </div>
          <div class={styles.section} style={{ transform: section() === 3 ? 'translateY(0)' : 'translateY(100vh)' }}>
          </div>
        </main>
        {showLogin() && <LoginPopUp onClose={closePopUp} onSwitch={toggleRegister} />}
        {showRegister() && <RegisterPopUp onClose={closePopUp} onSwitch={toggleLogin} onRegister={handleRegister} />}
      </div>
    );
  };

  export default LandingPage;