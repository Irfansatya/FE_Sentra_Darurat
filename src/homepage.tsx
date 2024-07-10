import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import styles from './homepage.module.css';
import logo from './image/logo.svg'; 
import arrow from './image/arrow.svg'; 
import img1 from './image/onboarding1.svg'; 
import img2 from './image/onboarding2.svg'; 
import img3 from './image/onboarding3.svg'; 
import paint1 from './image/paint1.svg';
import paint2 from './image/paint2.svg';

const Homepage: Component = () => {
  const [activePage, setActivePage] = createSignal('Fitur');
  const [activeIndex, setActiveIndex] = createSignal(0);
  let interval: number;

  const images = [img1, img2, img3];

  const startCarousel = () => {
    interval = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds for smoother transition
  };

  onMount(() => {
    startCarousel();
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <div class={styles.logoContainer}>
          <img src={logo} alt="Logo" class={styles.logo} />
          <h1 class={styles.appName}>Sentra Darurat</h1>
        </div>
        <nav class={styles.nav}>
          <a href="#" class={activePage() === 'Fitur' ? styles.active : ''} onClick={() => setActivePage('Fitur')}>Fitur</a>
          <a href="#" class={activePage() === 'Layanan' ? styles.active : ''} onClick={() => setActivePage('Layanan')}>Layanan</a>
          <a href="#" class={activePage() === 'Keunggulan' ? styles.active : ''} onClick={() => setActivePage('Keunggulan')}>Keunggulan</a>
          <a href="#" class={activePage() === 'Panduan' ? styles.active : ''} onClick={() => setActivePage('Panduan')}>Panduan</a>
          <a href="#" class={activePage() === 'Kontak' ? styles.active : ''} onClick={() => setActivePage('Kontak')}>Kontak</a>
        </nav>
        <div class={styles.authButtons}>
          <a href="#" class={styles.masukButton}>Masuk</a>
          <a href="#" class={styles.daftarButton}>Daftar</a>
        </div>
      </header>
      <main class={styles.main}>
        <h1 class={styles.title}>Laporkan Situasi Darurat</h1>
        <p class={styles.subtitle1}>
          Laporkan situasi darurat dengan menghubungi pihak layanan. Kirimkan
        </p>
        <p class={styles.subtitle2}>
          bukti atau detail situasi dan foto langsung dari lokasi kejadian.
        </p>
        <div class={styles.buttonContainer}>
          <button class={styles.button}>
            Mulai sekarang
            <img src={arrow} alt="Arrow" class={styles.buttonIcon} />
          </button>
        </div>
        <div class={styles.carouselWrapper}>
          <img src={paint1} alt="Paint 1" class={styles.paintLeft} />
          <div class={styles.carousel}>
            {images.map((img, index) => (
              <div
              classList={{
                [styles.carouselImageWrapper]: true,
                [styles.active]: index === activeIndex()
              }}
              >
              <div class={styles.carouselImageContainer}>
                <img
                  src={img}
                  alt={`Carousel image ${index + 1}`}
                  class={styles.carouselImage}
                />
              </div>
            </div>
            ))}
          </div>
          <img src={paint2} alt="Paint 2" class={styles.paintRight} />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
