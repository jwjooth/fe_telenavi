import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  function handleSignIn(event) {
    setError({});
    const newError = {};
    // cek kalo email kosong
    if (!email) {
      newError.email = "email tidak boleh kosong";
    } else if (!email.match("@gmail.com")) {
      newError.email = "format email tidak valid";
    }

    // cek kalo password kosong
    if (!password) {
      newError.password = "password tidak boleh kosong";
    } else {
      // cek kalo password panjang < 6
      if (password.length < 6) {
        newError.password = "password harus lebih dari 6 angka/huruf";
      }
    }

    setError(newError);

    // simpan email dan timestamp loginAt ketika semuanya terpenuhi
    if (email.match("@gmail.com") != false && password.length >= 6) {
      localStorage.setItem("email", email);
      localStorage.setItem("loginAt", Date.now().toString());
      alert("Login Berhasil");
      setEmail("");
      setPassword("");
    } else {
      alert("Login Gagal");
    }

    // akan menghapus pesan setelah 3 detik

    // mencegah refresh default browser
    event.preventDefault();
  }

  return (
    <>
      <div className="login-container">
        <div className="banner-section"></div>

        <div className="form-section">
          <h1>Selamat Datang Kembali!</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {error.email && <p className="error">{error.email}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error.password && <p className="error">{error.password}</p>}
          <button type="input" onClick={handleSignIn}>
            Sign In
          </button>
          <p>
            <span>Belum punya akun?</span> <a href="#">Daftar disini</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
