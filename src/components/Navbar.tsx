"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { productCategories, getProductHref } from "@/lib/products";

type MenuItem = {
  label: string;
  href?: string;
  submenu?: MenuItem[];
};

const productsMenu: MenuItem[] = [

  ...productCategories.map((cat) => ({
    label: cat.label,
    submenu: cat.submenu.map((sub) => ({
      label: sub.label,
      href: getProductHref(sub.slug),
    })),
  })),
];

function DropdownMenu({
  items,
  level = 0,
  isMobile = false,
  expandedMenus,
  toggleMenu,
  onKeyDown,
}: {
  items: MenuItem[];
  level?: number;
  isMobile?: boolean;
  expandedMenus?: Set<string>;
  toggleMenu?: (key: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>, key: string) => void;
}) {
  return (
    <ul
      className={
        isMobile
          ? "pl-4 border-l border-gray-300"
          : level === 0
            ? "absolute bg-white shadow-lg border border-gray-200 rounded-md min-w-[220px] z-50 top-full left-0 hidden group-hover:block"
            : "block w-full py-1"
      }
      role={level === 0 && !isMobile ? "menu" : undefined}
    >
      {items.map((item, i) => {
        const hasSubmenu = !!item.submenu?.length;
        const key = `${level}-${item.label}-${i}`;
        const isExpanded = expandedMenus?.has(key) ?? false;

        if (isMobile) {
          return (
            <li key={key} className="border-b last:border-b-0">
              {hasSubmenu ? (
                <>
                  <button
                    aria-expanded={isExpanded}
                    aria-controls={`${key}-submenu`}
                    id={`${key}-button`}
                    onClick={() => toggleMenu?.(key)}
                    onKeyDown={(e) => onKeyDown?.(e, key)}
                    className="w-full flex justify-between items-center px-4 py-3 font-semibold text-primary hover:bg-gray-100 rounded"
                    type="button"
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform ${
                        isExpanded ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`${key}-submenu`}
                        role="region"
                        aria-labelledby={`${key}-button`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <DropdownMenu
                          items={item.submenu!}
                          level={level + 1}
                          isMobile={true}
                          expandedMenus={expandedMenus}
                          toggleMenu={toggleMenu}
                          onKeyDown={onKeyDown}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block px-4 py-3 text-primary hover:bg-gray-100 rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        } else {
          // Desktop menu - hover dropdown (reuse your previous DropdownMenu style if needed)
          return (
            <li
              key={key}
              className="group/level1 relative border-b last:border-b-0"
              role="none"
            >
              {hasSubmenu ? (
                <>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center font-semibold text-gray-800 hover:text-accent"
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    role="menuitem"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover/level1:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="group-hover/level1:block hidden absolute top-0 left-[calc(100%+4px)] bg-white shadow-lg border border-gray-200 rounded-md min-w-[220px] max-h-[70vh] overflow-y-auto z-50">
                    <DropdownMenu items={item.submenu!} level={level + 1} />
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block px-4 py-2 hover:bg-gray-100 font-semibold text-gray-800 hover:text-accent"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        }
      })}
    </ul>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  // Scroll progress bar state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleMenu(key: string) {
    setExpandedMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, key: string) {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
      e.preventDefault();
      toggleMenu(key);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setExpandedMenus((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-accent z-50" style={{ width: `${scrollProgress}%` }} />

      <nav
        className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-xl px-6 py-3 bg-white ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">

          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Blue Fin Engineering Logo"
              width={60}
              height={60}
              priority
              className="logo-image"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-primary tracking-wide">
                BLUEFIN
              </span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                ENGINEERING ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 text-primary font-medium">
            <li>
              <Link href="/" className="hover:text-accent transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-accent transition">
                About
              </Link>
            </li>
            <li className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="flex items-center gap-1 hover:text-accent transition font-semibold text-primary"
                type="button"
              >
                Products
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu items={productsMenu} />
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu with accordion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-300"
            >
              <ul className="flex flex-col gap-1 p-4 text-primary font-semibold">
                <li>
                  <Link
                    href="/"
                    className="block py-3 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="block py-3 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <DropdownMenu
                    items={productsMenu}
                    level={0}
                    isMobile
                    expandedMenus={expandedMenus}
                    toggleMenu={toggleMenu}
                    onKeyDown={onKeyDown}
                  />
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-3 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}