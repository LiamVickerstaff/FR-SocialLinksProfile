import { useThemeStore } from "../../store/ThemeStore";
import styles from "./LightModeToggle.module.css";

export default function LightModeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
}
