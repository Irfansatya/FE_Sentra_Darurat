import { Component } from 'solid-js';
import googleIcon from '../image/google.png';
import facebookIcon from '../image/facebook.png';
import appleIcon from '../image/apple.png';

const LoginForm: Component = () => {
  return (
    <div>
      <h2>Masuk</h2>
      <p>Isi data diri anda dibawah ini untuk masuk</p>
      <input type="email" placeholder="Masukkan email" />
      <input type="password" placeholder="Masukkan password" />
      <div>
        <input type="checkbox" id="rememberMe" />
        <label for="rememberMe">Remember me</label>
        <a href="#" style="float: right; color: #ff6161;">Lupa Password?</a>
      </div>
      <button>Masuk</button>
      <div style="text-align: center; margin: 10px 0;">atau masuk dengan</div>
      <div style="display: flex; justify-content: space-around;">
        <button>
          <img src={googleIcon} alt="Google" style="width: 24px; height: 24px; vertical-align: middle;" />
          Google
        </button>
        <button>
          <img src={facebookIcon} alt="Facebook" style="width: 24px; height: 24px; vertical-align: middle;" />
          Facebook
        </button>
        <button>
          <img src={appleIcon} alt="Apple" style="width: 24px; height: 24px; vertical-align: middle;" />
          Apple
        </button>
      </div>
      <div style="text-align: center; margin-top: 10px;">
        Anda belum memiliki akun? <a href="#" style="color: #ff6161;">Buat Akun</a>
      </div>
    </div>
  );
};

export default LoginForm;