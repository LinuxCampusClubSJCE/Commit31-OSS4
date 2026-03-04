import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogFeed from "./pages/BlogFeed";
import Register from "./pages/register";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0F172A]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogFeed />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;