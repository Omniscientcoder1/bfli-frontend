"use client";
// Indicates that this component is intended for client-side rendering in a Next.js application.

import Image from "next/image";
// Imports the Next.js Image component for optimized image loading.

import Link from "next/link";
// Imports the Next.js Link component for client-side navigation.

import { usePathname } from "next/navigation";
// Imports the usePathname hook to access the current path URL.

import { useEffect, useState } from "react";
// Imports React's useEffect and useState hooks for managing side effects and component state.

import ThemeToggler from "./ThemeToggler";
// Imports a custom ThemeToggler component, likely for switching between light and dark themes.

import menuData from "./menuData";
// Imports menuData, which contains an array of navigation items.

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  // State variable to track whether the navigation menu is open.

  const [dropdownToggler, setDropdownToggler] = useState(false);
  // State variable to track the state of dropdown menus.

  const [stickyMenu, setStickyMenu] = useState(false);
  // State variable to determine if the menu should be sticky (fixed at the top).

  const pathUrl = usePathname();
  // Retrieves the current URL path.

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };
  // Function to toggle the sticky menu state based on scroll position.

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);
  // Adds and removes a scroll event listener to handle sticky menu logic.

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 flex items-center justify-between px-4 md:px-8 xl:px-0">
        {/* Logo on the left */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo/bangladesh-finance-islamic-logo.png"
            alt="logo"
            width={119.03}
            height={30}
            className="dark:hidden"
          />
          {/* Logo for light mode */}
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={119.03}
            height={30}
            className="hidden dark:block"
          />
          {/* Logo for dark mode */}
        </a>

        {/* Navigation Menu on the right */}
        <div className="flex items-center">
          <nav
            className={`flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10 ${
              navigationOpen ? "block" : "hidden xl:block"
            }`}
          >
            <ul className="flex flex-col xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className="group relative">
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 fill-current group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      {/* Dropdown button for submenus */}
                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Additional Elements like ThemeToggler */}
          <div className="ml-6 flex items-center gap-6">
            <ThemeToggler />
            {/* Place for additional elements like buttons or links */}
          </div>
        </div>

        {/* Hamburger Toggle Button for mobile view */}
        <button
          aria-label="hamburger Toggler"
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="absolute right-0 block h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "!w-full delay-300" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "delay-400 !w-full" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "!w-full delay-500" : "w-0"
                }`}
              ></span>
            </span>
            <span className="du-block absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                }`}
              ></span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
