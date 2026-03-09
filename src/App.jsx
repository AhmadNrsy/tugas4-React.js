import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <div className="card">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="profile"
        />

        <h1>Tugas Web React</h1>

        <p>Nama : Ahmad Nurdiansyah</p>
        <p>NIM : 12450111761</p>
        <p>Teknik Informatika Semester 4</p>

        <button onClick={() => setCount(count + 1)}>
          Klik Saya 👍 {count}
        </button>

      </div>

    </div>
  );
}

export default App;

