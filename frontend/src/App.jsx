import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F172A]">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold text-[#E2E8F0]">
                  Student Developer Platform 🚀
                </h1>
              }
            />
            <Route
              path="/register"
              element={
                <div className="w-full max-w-md">
                  <Register />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;