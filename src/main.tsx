import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./MainPage";
import ProjectPage from "./ProjectPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
