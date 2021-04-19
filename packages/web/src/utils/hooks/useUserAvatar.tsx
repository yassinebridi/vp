import { getRandomAvatar } from "@utils";
import React from "react";

export const useUserAvatar = (name = "userAvatar") => {
  const [userAvatar, setUserAvatar] = React.useState(
    localStorage.getItem(name)
  );

  React.useEffect(() => {
    if (!userAvatar && localStorage.getItem(name)) {
      setUserAvatar(localStorage.getItem(name));
    }
    if (!localStorage.getItem(name)) {
      const value = getRandomAvatar();
      localStorage.setItem(name, value);
      setUserAvatar(value);
    }
  }, []);

  return {
    userAvatar,
    setUserAvatar,
  };
};
