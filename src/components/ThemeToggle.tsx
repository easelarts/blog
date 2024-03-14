import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle(): FunctionalComponent {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const logos: NodeListOf<HTMLImageElement> | null = document.querySelectorAll(".logo");

    if (logos) {
      logos.forEach((logo) => {
        logo.src = logo.src.replace(theme === "light" ? "dark" : "light", theme === "light" ? "light" : "dark");
      });
    }

    const headerLogo: HTMLImageElement = document.querySelector(".logo-header");

    headerLogo.src = headerLogo.src.replace(theme === "light" ? "dark" : "light", theme === "light" ? "light" : "dark");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button class="text-2xl px-2" onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}