import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <>
      <div className="flex px-2 py-2">
        <span onClick={handleMode} className="ml-auto cursor-pointer">
          {darkTheme ? (
            <FaSun size="24" className="top-navigation-icon" />
          ) : (
            <FaMoon size="24" className="top-navigation-icon" />
          )}
        </span>
      </div>
    </>
  );
};

export default Header;
