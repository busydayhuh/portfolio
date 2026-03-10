import { AuraCursor } from "aura-cursor";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export default function App() {
  const cursor = new AuraCursor({
    size: 24,
    color: "white",
    outlineMode: true,
    outlineWidth: 1,
    speed: 0.5,
    hoverEffect: {
      scale: 1.5,
    },
  });

  cursor.init();

  return (
    <div className="page-container">
      <Header />
      <Outlet />
      <footer className="px-basic pt-12 md:pt-16 lg:pt-20 text-foreground/50 text-xs md:text-center">
        © {new Date().getFullYear()} Валерия Мартыненко
      </footer>
    </div>
  );
}
