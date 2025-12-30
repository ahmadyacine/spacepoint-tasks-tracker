
// src/App.jsx
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(`Backend: ${data.status}`))
      .catch(() => setStatus("Backend: ERROR"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>SpacePoint Tasks Tracker</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;
