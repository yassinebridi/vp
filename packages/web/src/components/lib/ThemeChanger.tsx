import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "@utils";
import React from "react";

export interface ThemeChangerProps {}
const ThemeChanger: React.FC<ThemeChangerProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-1 leading-none rounded-full ringify"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle color mode"
      title="Toggle color mode"
    >
      {theme === "dark" ? (
        <SunIcon className="stroke-current h-6 h-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="stroke-current h-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeChanger;
