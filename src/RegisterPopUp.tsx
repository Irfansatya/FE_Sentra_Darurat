import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import styles from './RegisterPopUp.module.css';
import logoPopup from './image/logoPopup.svg';
import showIcon from './image/showpassword.svg';
import hideIcon from './image/hidepassword.svg';
import close from './image/close.svg';
import { sha256 } from 'js-sha256';

const RegisterPopUp: Component<{ onClose: () => void; onSwitch: () => void; onRegister?: () => void; }> = (props) => {
  const [showPassword, setShowPassword] = createSignal(false);
  const [fullName, setFullName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [phone, setPhone] = createSignal('');

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

  const registerUser = () => {
    const hashedPassword = sha256(password());
    const newUser = {
      name: fullName(),
      email: email(),
      password: password(),
      phone: phone()
    };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    if (props.onRegister) {
      props.onRegister();
    }
  };

  return (
    <div class={styles.popupOverlay}>
      <div class={styles.popupContent}>
        <img src={close} alt="Close" class={styles.closeButton} onClick={props.onClose} />
        <img src={logoPopup} alt="Logo Popup" class={styles.logo} />
        <h2>Daftarkan Akun Anda</h2>
        <form>
          <label for="fullName">Nama Lengkap</label>
          <input type="text" id="fullName" placeholder="Masukkan nama lengkap.." class={styles.inputField} value={fullName()} onInput={(e) => setFullName(e.target.value)} />
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Masukkan email.." class={styles.inputField} value={email()} onInput={(e) => setEmail(e.target.value)} />
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
          <label for="phone">No. Telepon</label>
          <input type="tel" id="phone" placeholder="Masukkan no. telepon.." class={styles.inputField} value={phone()} onInput={(e) => setPhone(e.target.value)} />
          <button type="button" class={styles.primaryButton} onClick={registerUser}>Daftar</button>
        </form>
        <p class={styles.sudahpunyaAkun}>Sudah memiliki akun? <label class={styles.masukKlik}><a onClick={props.onSwitch}>Masuk</a></label></p>
      </div>
    </div>
  );
};

export default RegisterPopUp;
