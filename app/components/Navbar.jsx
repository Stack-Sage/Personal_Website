"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full fixed z-20 bg-transparent   shadow-lg  ">
      <div className="w-fit hover:scale-[1.02] transition-transform duration-300 mx-auto px-10 py-3 flex items-center justify-between">

        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <ProductItem
              title="Welcome Home"
              description="Explore the latest content."
              href="/"            
              src="/images/me_crop.png"
            />
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Work">
            <ProductItem
              title="Our Projects"
              description="See our amazing work."
              href="/samples"          // ✅ must pass href here
              src="/images/stack.png"
            />
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Services">
            <ProductItem
              title="Our Services"
              description="Explore what we offer."
              href="/services"         // ✅ must pass href here
              src="/images/services.webp"
            />
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <ProductItem
              title="Get in Touch"
              description="We'd love to hear from you."
              href="/contact"          // ✅ must pass href here
              src="/images/contact.webp"
            />
          </MenuItem>
        </Menu>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-6 p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
