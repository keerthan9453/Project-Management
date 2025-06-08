// App.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainApp from "./MainApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/app" element={<MainApp />} />
    </Routes>
  );
}

export default App;