import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/pages/Home";
import NavBar from "./shared/header/NavBar";
import "./App.css"
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<h1>Hello</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
