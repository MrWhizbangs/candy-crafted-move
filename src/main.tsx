import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGA } from "@/lib/analytics";

// Initialize Google Analytics before rendering
initGA();

createRoot(document.getElementById("root")!).render(<App />);
