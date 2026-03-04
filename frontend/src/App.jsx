import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogFeed from "./pages/BlogFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F172A]">
        <Navbar />

        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/register"
              element={
                <div className="w-full max-w-md">
                  <Register />
                </div>
              }
            />

            <Route path="/blogs" element={<BlogFeed />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;