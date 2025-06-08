import { useEffect } from "react";
import "./App.css";
import SocialLinksProfile from "./components/SocialLinksProfile/SocialLinksProfile";
import { useThemeStore } from "./store/ThemeStore";
import LightModeToggle from "./components/LightModeToggle/LightModeToggle";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main>
      <h1>Frontend Mentor - Social Links Profile Solution</h1>
      <LightModeToggle />
      <SocialLinksProfile />
    </main>
  );
}

export default App;
