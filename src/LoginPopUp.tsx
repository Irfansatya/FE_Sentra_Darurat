import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router'; // Mengimpor Navigate dan useNavigate
import styles from './LoginPopUp.module.css';
import logoPopup from './image/logoPopup.svg';
import googleIcon from './image/google.svg';
import showIcon from './image/showpassword.svg';
import hideIcon from './image/hidepassword.svg';
import close from './image/close.svg';

const LoginPopUp: Component<{ onClose: () => void; onSwitch: () => void; }> = (props) => {
  const [showPassword, setShowPassword] = createSignal(false);
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [errorMessage, setErrorMessage] = createSignal('');
  const navigate = useNavigate(); // Hook useNavigate untuk navigasi

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword());
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(`.${styles.popupContent}`)) {
      props.onClose();
    }
  };

  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Ambil pengguna dari localStorage atau array kosong jika tidak ada
    const user = users.find(user => user.email === email() && user.password === password());
  
    if (email() === 'admin@gmail.com' && password() === 'admin123') {
      navigate('/admin');
    } else if (user) {
      navigate('/beranda');
    } else {
      setErrorMessage('Email/Password yang anda masukkan salah');
    }
  };
  

  return (
    <div class={styles.popupOverlay}>
      <div class={styles.popupContent}>
        <img src={close} alt="Close" class={styles.closeButton} onClick={props.onClose} />
        <img src={logoPopup} alt="Logo Popup" class={styles.logo} />
        <h2>Masukkan Akun Anda</h2>
        {errorMessage() && <div class={styles.errorMessage}>{errorMessage()}</div>}
        <form>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan email.."
            class={styles.inputField}
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
          />
          <label for="password">Password</label>
          <div class={styles.passwordContainer}>
            <input
              type={showPassword() ? 'text' : 'password'}
              id="password"
              placeholder="Masukkan password.."
              class={styles.inputField}
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword() ? showIcon : hideIcon}
              alt="Toggle Password"
              class={styles.passwordToggle}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div class={styles.rememberMe}>
            <label class={styles.ingatkanSaya}>
              <input type="checkbox" /> Remember me
            </label>
            <label class={styles.lupaPassword}>
              <a href="#">Lupa Password?</a>
            </label>
          </div>
          <button type="button" class={styles.primaryButton} onClick={handleLogin}>
            Masuk
          </button>
          <button type="button" class={styles.googleButton}>
            <img src={googleIcon} alt="Google Icon" /> Lanjutkan dengan Google
          </button>
        </form>
        <p class={styles.privacyText}>
          Dengan melanjutkan, anda menyetujui <a href="#">Kebijakan Privasi</a> dan <br /><a href="#">Syarat & Ketentuan</a> yang berlaku di layanan ini.
        </p>
        <p class={styles.belumpunyaAkun}>
          Belum memiliki akun?{' '}
          <label class={styles.daftarKlik}>
            <a onClick={props.onSwitch}>Daftar</a>
          </label>
        </p>
      </div>
    </div>
  );
};

export default LoginPopUp;
