import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
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
        <SunIcon
          width="22px"
          height="22px"
          className="stroke-current"
          aria-hidden="true"
        />
      ) : (
        <MoonIcon
          width="22px"
          height="22px"
          className="fill-current"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeChanger;
