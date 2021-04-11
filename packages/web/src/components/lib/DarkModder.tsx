import { DarkMode } from "@chakra-ui/react";
import { useTheme } from "@utils";
import React from "react";

export interface DarkModderProps {}
const DarkModder: React.FC<DarkModderProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>{theme === "dark" ? <DarkMode>{children}</DarkMode> : <>{children}</>}</>
  );
};

export default DarkModder;
