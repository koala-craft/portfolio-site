"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiSun, PiMoon } from "react-icons/pi";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleMode = () => {
    const root = window.document.documentElement;
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="relative w-[52px] h-6.5 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors p-1 flex items-center cursor-pointer"
    >
      <motion.div
        layout
        animate={{ x: theme === "light" ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 bg-white dark:bg-black rounded-full flex items-center justify-center shadow"
      >
        {theme === "light" ? (
          <PiSun size={16} className="text-yellow-500" />
        ) : (
          <PiMoon size={16} className="text-blue-300" />
        )}
      </motion.div>
    </button>
  );
}