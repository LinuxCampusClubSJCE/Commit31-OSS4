import "./App.css"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100" style={{ width: "100%", margin: 0, padding: 0 }}>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Student Developer Platform 🚀
        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
