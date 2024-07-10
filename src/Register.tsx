import { Component, onCleanup, onMount } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import CryptoJS from 'crypto-js';
import styles from './Register.module.css';
import logo from './image/logo.svg';
import hideIcon from './image/hidepassword.svg';
import showIcon from './image/showpassword.svg';

const slides = [
  {
    title: 'Layanan Darurat',
    text: 'Anda dapat langsung menghubungi kepolisian, pemadam kebakaran, dan ambulans dalam satu sentuhan untuk mendapatkan bantuan dengan cepat dan tepat.',
  },
  {
    title: 'Pelaporan Situasi',
    text: 'Laporkan situasi darurat dengan mudah melalui fitur pelaporan kami. Kirimkan detail situasi dan foto langsung dari lokasi kejadian untuk membantu petugas merespons.',
  },
  {
    title: 'Lokasi GPS',
    text: 'Dilengkapi dengan fitur pelacakan lokasi GPS yang akurat. Pastikan petugas darurat dapat menemukan lokasi Anda dengan tepat, sehingga bantuan bisa segera tiba.',
  },
];

const Register: Component = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [errorMessage, setErrorMessage] = createSignal('');
  const [showPopup, setShowPopup] = createSignal(false);

  const navigate = useNavigate();

  const handleRegister = (e: Event) => {
    e.preventDefault();
    if (!name() || !email() || !password() || !phone()) {
      setErrorMessage('Silahkan Isi Data Dibawah Ini Terlebih Dahulu !!!');
      setShowPopup(true);
      return;
    }
    const hashedPassword = CryptoJS.SHA256(password()).toString();
    const newUser = {
      name: name(),
      email: email(),
      password: hashedPassword,
      phone: phone(),
    };

    // Ambil data pengguna yang telah terdaftar sebelumnya
    let existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(newUser);

    // Simpan kembali ke localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setShowPopup(true);
    setErrorMessage('Pendaftaran Akun Berhasil Silahkan Masuk Terlebih Dahulu !!!');
    setTimeout(() => {
      setShowPopup(false);
      navigate('/login');
    }, 3000);
  };

  // Hide popup after 5 seconds
  createEffect(() => {
    if (showPopup()) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  });

  onMount(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class={styles.container}>
      <div class={styles.logoContainer}>
        <img src={logo} alt="Sentra Darurat Logo" class={styles.logo} />
        <h1 class={styles.appName}>Sentra Darurat</h1>
      </div>
      <div class={styles.left}>
        <label class={styles.buat}>Buat Akun Anda.</label>
        <form onSubmit={handleRegister}>
          <label class={styles.labelnama}>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap.."
            class={styles.input}
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <label class={styles.labelemail}>Email</label>
          <input
            type="email"
            placeholder="Masukkan email.."
            class={styles.input}
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <label class={styles.labelpassword}>Password</label>
          <div class={styles.passwordContainer}>
            <input
              type={showPassword() ? 'text' : 'password'}
              placeholder="Masukkan password.."
              class={styles.input}
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
            <span
              class={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword())}
            >
              <img src={showPassword() ? showIcon : hideIcon} alt="Toggle Password Visibility" />
            </span>
          </div>
          <label class={styles.labeltelpon}>No. Telp Aktif</label>
          <input
            type="tel"
            placeholder="Masukkan no. telp aktif.."
            class={styles.input}
            value={phone()}
            onInput={(e) => setPhone(e.currentTarget.value)}
          />
          <button type="submit" class={styles.registerButton}>Buat Akun</button>
        </form>
        <div class={styles.akun}>
          <p>Anda sudah memiliki akun? <A href="/login" class={styles.loginLink}>Masuk</A></p>
        </div>
      </div>
      <div class={styles.right}>
        <h2>{slides[currentSlide()].title}</h2>
        <p>{slides[currentSlide()].text}</p>
        <div class={styles.indicators}>
          {slides.map((_, index) => (
            <span
              class={currentSlide() === index ? styles.activeIndicator : styles.indicator}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      {showPopup() && (
        <div class={styles.popup}>
          <p class={styles.popupText}>{errorMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default Register;