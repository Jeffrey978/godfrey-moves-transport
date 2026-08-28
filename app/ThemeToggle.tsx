"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const storageKey = "gmt-theme";

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  useEffect(() => {
    const nextTheme = readStoredTheme() ?? getSystemTheme();
    applyTheme(nextTheme);

    const query = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = () => {
      if (readStoredTheme() == null) {
        applyTheme(getSystemTheme());
      }
    };

    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      aria-label="Toggle light and dark mode"
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-glyph" />
      </span>
      <span className="theme-toggle-label" aria-hidden="true" />
    </button>
  );
}
