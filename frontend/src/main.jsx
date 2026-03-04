import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BlogFeed from "./pages/BlogFeed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <App />
    <BlogFeed />
  </StrictMode>,
);
