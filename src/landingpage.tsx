import { Component, createSignal, createEffect } from 'solid-js';
import logo from './image/logo.svg';
import language from './image/language.svg';
import arrowLanguage from './image/arrowLanguage.svg';
import arrow from './image/arrow.svg';
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
import boxKemensos from './image/boxKemensos.svg';
import boxBasarnas from './image/boxBasarnas.svg';
import boxListrik from './image/boxListrik.svg';
import leftScroll from './image/leftScroll.svg';
import rightScroll from './image/rightScroll.svg';
import boxKepolisianHover from './image/boxKepolisianHover.svg';
import boxAmbulansHover from './image/boxAmbulansHover.svg';
import boxPemadamHover from './image/boxPemadamHover.svg';
import boxKemensosHover from './image/boxKemensosHover.svg';
import boxBasarnasHover from './image/boxBasarnasHover.svg';
import boxListrikHover from './image/boxListrikHover.svg';
import LoginPopUp from './LoginPopUp';
import RegisterPopUp from './RegisterPopUp';
import styles from './landingpage.module.css';
import video1 from './animation/video1.mp4';
import video2 from './animation/video2.mp4';
import video3 from './animation/video3.mp4';
import keunggulan1 from './image/keunggulan1.svg';
import keunggulan2 from './image/keunggulan2.svg';
import keunggulan3 from './image/keunggulan3.svg';
import keunggulan4 from './image/keunggulan4.svg';
import keunggulan5 from './image/keunggulan5.svg';
import keunggulan6 from './image/keunggulan6.svg';
import keunggulan7 from './image/keunggulan7.svg';
import keunggulan8 from './image/keunggulan8.svg';
import keunggulan9 from './image/keunggulan9.svg';
import keunggulan10 from './image/keunggulan10.svg';
import keunggulan11 from './image/keunggulan11.svg';
import keunggulan12 from './image/keunggulan12.svg';
import keunggulan13 from './image/keunggulan13.svg';
import keunggulan14 from './image/keunggulan14.svg';
import keunggulan15 from './image/keunggulan15.svg';
import backgroundPanduan from './image/backgroundPanduan.png';
import gambarPanduan1 from './image/gambarPanduan1.svg';
import arrowUp from './image/arrowUp.svg';
import arrowDown from './image/arrowDown.svg';
import cursorClick from './animation/cursorClick.gif';
import infoTelepon from './image/infoTelepon.svg';
import infoEmail from './image/infoEmail.svg';
import infoAlamat from './image/infoAlamat.svg';
import copy from './image/copy.svg';
import linkedin from './image/linkedin.svg';
import facebook from './image/facebook.svg';
import instagram from './image/instagram.svg';
import twitter from './image/twitter.svg';

const logos = [
  { src: kepolisian, alt: 'Kepolisian RI' },
  { src: kemenkes, alt: 'Kemenkes RI' },
  { src: damkar, alt: 'Dinas Damkar' },
  { src: kemensos, alt: 'Kemensos RI' },
  { src: sar, alt: 'Badan SAR Nasional' },
  { src: pln, alt: 'PT. PLN (Persero)' },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

const boxImages = [
  { src: boxKepolisian, hoverSrc: boxKepolisianHover },
  { src: boxAmbulans, hoverSrc: boxAmbulansHover },
  { src: boxPemadam, hoverSrc: boxPemadamHover },
  { src: boxKemensos, hoverSrc: boxKemensosHover },
  { src: boxBasarnas, hoverSrc: boxBasarnasHover },
  { src: boxListrik, hoverSrc: boxListrikHover },
];

const imagesTop = [
  { src: keunggulan8, alt: 'Keunggulan 8' },
  { src: keunggulan9, alt: 'Keunggulan 9' } ,
  { src: keunggulan10, alt: 'Keunggulan 10' },
  { src: keunggulan11, alt: 'Keunggulan 11' },
  { src: keunggulan12, alt: 'Keunggulan 12' },
  { src: keunggulan13, alt: 'Keunggulan 13' },
  { src: keunggulan14, alt: 'Keunggulan 14' },
  { src: keunggulan15, alt: 'Keunggulan 15' },
];

const imagesBottom = [
  {src: keunggulan7, alt: 'Keunggulan 7'},
  {src: keunggulan6, alt: 'Keunggulan 6'},
  {src: keunggulan5, alt: 'Keunggulan 5'},
  {src: keunggulan4, alt: 'Keunggulan 4'},
  {src: keunggulan3, alt: 'Keunggulan 3'},
  {src: keunggulan2, alt: 'Keunggulan 2'},
  {src: keunggulan1, alt: 'Keunggulan 1'},
];

const duplicatedImagesTop = [...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop, ...imagesTop];
const duplicatedImagesBottom = [...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom, ...imagesBottom];

const LandingPage: Component = () => {
  const [activeNav, setActiveNav] = createSignal('Fitur');
  const [showLogin, setShowLogin] = createSignal(false);
  const [showRegister, setShowRegister] = createSignal(false);
  const [section, setSection] = createSignal(1);
  const [currentVideo, setCurrentVideo] = createSignal(video1);
  const [fadeOut, setFadeOut] = createSignal(false);
  const [boxPosition, setBoxPosition] = createSignal(0);
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [activeDescription, setActiveDescription] = createSignal<number | null>(null);
  const boxCount = 6;
  const boxesPerView = 3;
  const boxWidth = 100 / boxesPerView;
  const sectionCount = 5;
  let isScrolling = false;
  const videos = [video1, video2, video3];
  let videoIndex = 0;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard: ' + text);
  };

  const toggleDescription = (descriptionNumber: number) => {
    if (activeDescription() === descriptionNumber) {
      setActiveDescription(null);
    } else {
      setActiveDescription(descriptionNumber);
    }
  };

  const changeVideo = () => {
    setFadeOut(true);

    setTimeout(() => {
      videoIndex = (videoIndex + 1) % videos.length;
      setCurrentVideo(videos[videoIndex]);
      setFadeOut(false);
    }, 300); // Durasi animasi fade-out
  };

  createEffect(() => {
    const interval = setInterval(() => {
      changeVideo();
    }, 5000); // Video duration + fade transition

    return () => clearInterval(interval);
  });

  const debounceScroll = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, wait);
    };
  };

  const handleWheelScroll = (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0) {
      if (section() < sectionCount) {
        setSection((prev) => prev + 0.5);
      }
    } else {
      if (section() > 1) {
        setSection((prev) => prev - 0.5);
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, 200);
  };

  let touchStartY = 0;
  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };
  const handleTouchMove = (event) => {
    if (isScrolling) return;
    isScrolling = true;

    const touchEndY = event.touches[0].clientY;
    if (touchStartY - touchEndY > 50) {
      if (section() < sectionCount) {
        setSection((prev) => prev + 1);
      }
    } else if (touchEndY - touchStartY > 50) {
      if (section() > 1) {
        setSection((prev) => prev - 1);
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, 200);
  };

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < window.innerHeight) {
      setActiveNav('Fitur');
    } else if (scrollPosition < 2 * window.innerHeight) {
      setActiveNav('Layanan');
    } else if (scrollPosition < 3 * window.innerHeight) {
      setActiveNav('Keunggulan');
    } else if (scrollPosition < 4 * window.innerHeight) {
      setActiveNav('Panduan');
    } else {
      setActiveNav('Kontak');
    }
  };

  createEffect(() => {
    window.addEventListener('wheel', debounceScroll(handleWheelScroll, 200), { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', debounceScroll(handleTouchMove, 200), { passive: false });
    window.addEventListener('scroll', updateActiveNav);


    return () => {
      window.removeEventListener('wheel', debounceScroll(handleWheelScroll, 100));
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', debounceScroll(handleTouchMove, 100));
      window.removeEventListener('scroll', updateActiveNav);
    };
  });

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);

    if (navItem === 'Layanan') {
      setSection(2);
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    } else if (navItem === 'Keunggulan') {
      setSection(3);
      window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' });
    } else if (navItem === 'Panduan') {
      setSection(4);
      window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' });
    } else if (navItem === 'Kontak') {
      setSection(5);
      window.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' });
    } else {
      setSection(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    setBoxPosition((prev) => Math.max(prev - 0.5, 0));
  };
  
  const handleScrollRight = () => {
    setBoxPosition((prev) => Math.min(prev + 0.5, 1.5));
  };

  createEffect(() => {
    // Jumlah box yang terlihat di frame
    const visibleBoxCount = boxesPerView;
    // Indeks box yang berada di tengah frame
    const centerIndex = Math.floor(visibleBoxCount / 3);
    
    // Hitung posisi box yang sedang aktif berdasarkan boxPosition
    // boxPosition dikalikan dengan (boxCount - boxesPerView) karena posisi ini adalah dalam skala 0 hingga boxCount - boxesPerView
    const activeBoxIndex = Math.round(boxPosition() * (3 - 1) + centerIndex);
  
    // Set activeIndex dengan batasan yang valid
    setActiveIndex(Math.max(0, Math.min(activeBoxIndex, boxCount - 1)));
  });

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
    <div class={styles.container} onwheel={handleWheelScroll} ontouchstart={handleTouchStart} ontouchmove={handleTouchMove}>
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
            <img src={arrowLanguage} alt="Arrow Down Icon" class={styles.arrowLanguage} />
          </div>
          <button class={styles.loginButton} onClick={toggleLogin}>Masuk</button>
          <button class={styles.registerButton} onClick={toggleRegister}>Daftar</button>
        </nav>
      </header>
      <main class={styles.mainContent}>
      <div class={styles.section} style={{ transform: `translateY(${(section() - 1) * -100}vh)` }}>

          {/* Content Section 1 */}
          <div class={styles.textSection}>
            <h1>Laporkan Situasi <br />Darurat yang Terjadi <br />Disekitar Anda</h1>
            <p>Segera hubungi nomor layanan darurat yang anda butuhkan <br />lalu kirimkan bukti atau detail situasi beserta foto <br />langsung dari lokasi kejadian.</p>
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
          <div class={styles.videoSection}>
          <video src={currentVideo()} class={`${styles.video} ${fadeOut() ? styles.fadeOut : styles.fadeIn}`} autoplay loop muted />
          </div>
        </div>
        <div class={styles.section} style={{ transform: `translateY(${(section() - 2) * -100}vh)` }}>

          {/* Content Section 2 */}
          <div class={styles.layanan}>
            <h1 class={styles.title}>Kategori Layanan</h1>
            <p class={styles.deskripsiLayanan}>Terdapat berbagai layanan yang siap membantu anda mengatasi situasi darurat.</p>
            <button class={styles.viewAllButton} onClick={toggleLogin}>
              Lihat semua <img src={arrowLihat} alt="Lihat semua" />
            </button>
            <div class={styles.servicesContainer}>
              <img src={leftScroll} alt="Scroll left" class={styles.scrollIcon} onClick={handleScrollLeft} />
              <div class={styles.boxFrame}>
        <div class={styles.boxContainer} onClick={toggleLogin} style={{ transform: `translateX(-${boxPosition() * boxWidth}%)` }}>
        {boxImages.map((box, index) => (
            <div
              class={`${styles.serviceBox} ${index === activeIndex() ? styles.active : ''}`}
            >
              <img src={index === activeIndex() ? box.hoverSrc : box.src} alt={`Service Box ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <img src={rightScroll} alt="Scroll right" class={`${styles.scrollIcon} ${boxPosition() >= boxCount - boxesPerView ? styles.disabled : ''}`}
      onClick={boxPosition() < boxCount - boxesPerView ? handleScrollRight : undefined} />
            </div>
          </div>
        </div>
        <div class={styles.section} style={{ transform: `translateY(${(section() - 4) * -100}vh)` }}>

          {/* Content Section 3 */}
          <div class={styles.keunggulan}>
            <p class={styles.berbagai}>Berbagai</p>
            <h1 class={styles.judul}>Keunggulan Layanan</h1>
            <div class={styles.frame}>
            <div id="imageContainer" class={`${styles.imageContainer} ${styles.top}`}>
              {duplicatedImagesTop.map((imagesTop) => (
                <div class={styles.imageItem}>
                  <img src={imagesTop.src} alt={imagesTop.alt} />
                </div>
              ))}
            </div>
            <div id="imageContainer" class={`${styles.imageContainer} ${styles.bottom}`}>
              {duplicatedImagesBottom.map((imagesBottom) => (
                <div class={styles.imageItem}>
                  <img src={imagesBottom.src} alt={imagesBottom.alt} />
                </div>
              ))}
            </div>
          </div>
          <div class={styles.section} style={{ transform: `translateY(${(section() - 4) * -100}vh)` }}>

            {/* Content Section 4 */}
            <div class={styles.panduan}>
        <div class={styles.content}>
          <div class={styles.background}>
            <img src={backgroundPanduan} alt="Background Panduan" class={styles.backgroundImage} />
            <div class={styles.guideImageWrapper}>
              <img src={gambarPanduan1} alt="Panduan 1" class={styles.guideImage} />
              <img src={cursorClick} alt="Cursor Click Animation" class={styles.cursorAnimation} />
            </div>
          </div>
          <div class={styles.guides}>
            <div class={styles.judulPanduan}>
              <h1>Panduan Penggunaan</h1>
            </div>
            <div class={styles.guide}>
              <div class={styles.guideHeader} onClick={() => toggleDescription(1)}>
                <span>1. Hubungi layanan darurat dengan memencet tombol telepon</span>
                <img src={activeDescription() === 1 ? arrowUp : arrowDown} alt="Toggle Description" class={styles.arrowIcon} />
              </div>
              {activeDescription() === 1 && (
                <div class={styles.description}>
                  Saat terjadi keadaan darurat, langkah pertama yang harus dilakukan <br />adalah menghubungi layanan darurat. Caranya sangat mudah, cukup <br />tekan tombol telepon yang tersedia di halaman layanan.
                </div>
              )}
            </div>
            <div class={styles.guide}>
              <div class={styles.guideHeader} onClick={() => toggleDescription(2)}>
                <span>2. Tuliskan nama, no. telepon, lokasi, serta detail situasi kejadian</span>
                <img src={activeDescription() === 2 ? arrowUp : arrowDown} alt="Toggle Description" class={styles.arrowIcon} />
              </div>
              {activeDescription() === 2 && (
                <div class={styles.description}>
                  Selanjutnya tuliskan nama lengkap anda beserta nomor telepon, lokasi <br />terjadinya situasi darurat, serta detail situasi kejadian. jika sudah klik <br />tombol ‘Kirim’ dan tunggu pihak layanan mengkonfirmasi.
                </div>
              )}
            </div>
            <div class={styles.guide}>
              <div class={styles.guideHeader} onClick={() => toggleDescription(3)}>
                <span>3. Tunggu hingga layanan darurat mengkonfirmasi laporan anda</span>
                <img src={activeDescription() === 3 ? arrowUp : arrowDown} alt="Toggle Description" class={styles.arrowIcon} />
              </div>
              {activeDescription() === 3 && (
                <div class={styles.description}>
                  Setelah mengirimkan detail situasi darurat, laporan tersebut akan <br />diteruskan ke pihak layanan darurat dan anda hanya perlu menunggu <br />sekitar ± 5 menit untuk mendapat konfirmasi jawaban. 
                </div>
              )}
            </div>
            <div class={styles.guide}>
              <div class={styles.guideHeader} onClick={() => toggleDescription(4)}>
                <span>4. Pihak layanan darurat akan segera menuju ke lokasi anda</span>
                <img src={activeDescription() === 4 ? arrowUp : arrowDown} alt="Toggle Description" class={styles.arrowIcon} />
              </div>
              {activeDescription() === 4 && (
                <div class={styles.description}>
                  Petugas layanan darurat akan menuju ke lokasi kejadian sesuai lokasi <br />yang telah anda kirimkan sebelumnya. Pastikan setelah layanan <br />dikonfirmasi, anda memencet tombol ‘Tandai telah selesai’. 
                </div>
              )}
            </div>
          </div>
        </div>
            </div>
          </div>
          <div class={styles.section} style={{ transform: `translateY(${(section() - 5) * -100}vh)` }}>

            {/* Content Section 5 */}
            <div class={styles.kontak}>
            <div class={styles.section5Content}>
          <div class={styles.contactInfo}>
            <h2>Informasi Kontak</h2>
            <p>
              Kami selalu siap mendengar dan membantu anda. Jika anda memiliki <br />pertanyaan atau ingin memberikan masukan, jangan ragu untuk <br />menghubungi kami melalui kontak berikut :
            </p>
            <div class={styles.contactBox1}>
              <div class={styles.contactItem}>
                <img src={infoTelepon} alt="Telepon" class={styles.telepon} />
                <div>
                  <h3>Telepon</h3>
                  <p>0821-5647-8900</p>
                </div>
                <img src={copy} alt="Copy" class={styles.copyIcon} onClick={() => copyToClipboard('0821-5647-8900')} />
              </div>
            </div>
            <div class={styles.contactBox2}>
              <div class={styles.contactItem}>
                <img src={infoEmail} alt="Email" class={styles.email} />
                <div>
                  <h3>Email</h3>
                  <p>sentradarurat@gmail.com</p>
                </div>
                <img src={copy} alt="Copy" class={styles.copyIcon} onClick={() => copyToClipboard('sentradarurat@gmail.com')} />
              </div>
            </div>
            <div class={styles.contactBox3}>
            <div class={styles.contactItem}>
              <img src={infoAlamat} alt="Alamat" class={styles.alamat} />
                <div>
                  <h3>Alamat</h3>
                  <p>Jl. Taman Sunda Kelapa No.16, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310</p>
                </div>
                <img src={copy} alt="Copy" class={styles.copyIcon} onClick={() => copyToClipboard('Jl. Taman Sunda Kelapa No.16, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310')} />
              </div>
            </div>
          </div>
          <div class={styles.contactForm}>
            <h2>Hubungi Kami</h2>
            <p>Tulis pesan bantuan ataupun kritik & saran kepada kami disini!</p>
            <form>
              <input type="text" placeholder="Masukkan nama.." class={styles.input} />
              <input type="email" placeholder="Masukkan email.." class={styles.input} />
              <textarea placeholder="Tulis pesan anda disini.." maxLength={1000} class={styles.textarea}></textarea>
              <button type="button" class={styles.button} onClick={() => alert('Pesan telah dikirim!')}>Kirim Pesan</button>
            </form>
          </div>
        </div>
        <div class={styles.footer}>
          <div class={styles.footerText}>
            © 2024 Sentra Darurat. All rights reserved.
          </div>
          <div class={styles.socialIcons}>
            <img src={linkedin} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
              </div>
          </div>
          </div>
        </div>
      </main>
      {showLogin() && <LoginPopUp onClose={closePopUp} onSwitch={toggleRegister} />}
      {showRegister() && <RegisterPopUp onClose={closePopUp} onSwitch={toggleLogin} onRegister={handleRegister} />}
    </div>
  );
};

export default LandingPage;
