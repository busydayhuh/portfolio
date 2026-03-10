import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainPage from "./main-page/MainPage";
import ProjectPage from "./project-page/ProjectPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="projects/:projectId" element={<ProjectPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
