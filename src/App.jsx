import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "../src/components/Layout";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hero" element={<Hero />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
