import { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import styles from './Register.module.css';
import logo from './image/logo.svg';

const Register: Component = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const navigate = useNavigate();

  const handleRegister = (e: Event) => {
    e.preventDefault();
    const userData = {
      name: name(),
      email: email(),
      password: password(),
      phone: phone(),
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/login');
  };

  return (
    <div class={styles.container}>
      <div class={styles.left}>
        <div class={styles.logoContainer}>
          <img src={logo} alt="Sentra Darurat Logo" class={styles.logo} />
          <h1>Sentra Darurat</h1>
        </div>
        <h2>Buat Akun</h2>
        <p>Lengkapi data diri anda untuk membuat akun</p>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Masukkan nama lengkap.." 
            class={styles.input} 
            value={name()} 
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <input 
            type="email" 
            placeholder="Masukkan email.." 
            class={styles.input} 
            value={email()} 
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <input 
            type="password" 
            placeholder="Masukkan password.." 
            class={styles.input} 
            value={password()} 
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
          <input 
            type="tel" 
            placeholder="Masukkan no. telp aktif.." 
            class={styles.input} 
            value={phone()} 
            onInput={(e) => setPhone(e.currentTarget.value)}
          />
          <button type="submit" class={styles.registerButton}>Daftar</button>
        </form>
        <p>Anda sudah memiliki akun? <A href="/login" class={styles.loginLink}>Masuk</A></p>
      </div>
      <div class={styles.right}>
        <h2>Layanan Darurat</h2>
        <p>
          Anda dapat langsung menghubungi kepolisian, pemadam kebakaran, dan ambulans dalam
          satu sentuhan untuk mendapatkan bantuan dengan cepat dan tepat.
        </p>
      </div>
    </div>
  );
};

export default Register;
