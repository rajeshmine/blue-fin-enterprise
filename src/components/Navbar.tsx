"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { productCategories, getProductHref } from "@/lib/products";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV, CONTACT, SITE } from "@/lib/content";

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
  onMobileLinkClick,
  onDesktopLinkClick,
  asPanel = false,
}: {
  items: MenuItem[];
  level?: number;
  isMobile?: boolean;
  expandedMenus?: Set<string>;
  toggleMenu?: (key: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>, key: string) => void;
  onMobileLinkClick?: () => void;
  onDesktopLinkClick?: () => void;
  asPanel?: boolean;
}) {
  return (
    <ul
      className={
        isMobile
          ? "w-full pl-3 sm:pl-4 ml-0 sm:ml-2 border-l-2 border-gray-200 dark:border-gray-600"
          : level === 0 && !asPanel
            ? "absolute bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md min-w-[220px] z-50 top-full left-0 hidden group-hover:block"
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
            <li key={key} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              {hasSubmenu ? (
                <>
                  <button
                    aria-expanded={isExpanded}
                    aria-controls={`${key}-submenu`}
                    id={`${key}-button`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleMenu?.(key);
                    }}
                    onKeyDown={(e) => onKeyDown?.(e, key)}
                    className="w-full flex justify-between items-center px-3 sm:px-4 py-3.5 font-semibold text-primary dark:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg touch-manipulation min-h-[44px] text-left text-sm sm:text-base"
                    type="button"
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 ml-2 shrink-0 transition-transform ${
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
                          onMobileLinkClick={onMobileLinkClick}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block px-3 sm:px-4 py-3.5 text-primary dark:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg touch-manipulation min-h-[44px] text-sm sm:text-base break-words"
                  onClick={onMobileLinkClick}
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
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center font-semibold text-gray-800 dark:text-gray-200 hover:text-accent"
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
                  <div className="group-hover/level1:block hidden absolute top-0 left-full ml-1 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md min-w-[200px] max-w-[280px] sm:max-w-[320px] max-h-[70vh] overflow-y-auto z-[60]">
                    <DropdownMenu items={item.submenu!} level={level + 1} onDesktopLinkClick={onDesktopLinkClick} />
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-800 dark:text-gray-200 hover:text-accent"
                  role="menuitem"
                  onClick={onDesktopLinkClick}
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
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const desktopProductsRef = useRef<HTMLDivElement>(null);

  // Close desktop products dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopProductsRef.current && !desktopProductsRef.current.contains(e.target as Node)) {
        setDesktopProductsOpen(false);
      }
    };
    if (desktopProductsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopProductsOpen]);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
        className={`sticky top-0 w-full z-50 transition-all duration-500 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-900/95 dark:border-b dark:border-gray-800 ${
          scrolled ? "shadow-lg dark:shadow-gray-950/50" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative gap-2">

          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 min-w-0 flex-shrink">
            <Image
              src={CONTACT.logoPath}
              alt={`${SITE.name} Logo`}
              width={60}
              height={60}
              priority
              className="logo-image"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-lg sm:text-2xl font-extrabold text-primary tracking-wide truncate">
                {NAV.logo.line1}
              </span>
              <span className="text-[10px] sm:text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider truncate max-w-[120px] sm:max-w-none">
                {NAV.logo.line2}
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 text-primary font-medium">
            {NAV.items.map((item) =>
              item.href === "/products" ? (
            <li key={item.href} className="relative">
            <div ref={desktopProductsRef} className="relative">
              <button
                aria-haspopup="true"
                aria-expanded={desktopProductsOpen}
                onClick={() => setDesktopProductsOpen((v) => !v)}
                className="flex items-center gap-1 hover:text-accent transition font-semibold text-primary"
                type="button"
              >
                {NAV.productsLabel}
                <svg
                  className={`w-4 h-4 transition-transform ${desktopProductsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopProductsOpen && (
                <div className="absolute left-0 top-full pt-1 z-50">
                  <div className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md min-w-[220px] overflow-visible">
                    <DropdownMenu items={productsMenu} asPanel onDesktopLinkClick={() => setDesktopProductsOpen(false)} />
                  </div>
                </div>
              )}
            </div>
            </li>
              ) : (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-accent transition">
                {item.label}
              </Link>
            </li>
              )
            )}
          </ul>

          {/* Theme toggle + Mobile hamburger - flex for proper spacing */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2.5 -mr-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:bg-gray-100 dark:active:bg-gray-800 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
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
        </div>

        {/* Mobile menu with accordion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700"
            >
              <nav
                className="max-h-[70vh] overflow-y-auto overscroll-contain"
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col gap-0 p-4 pb-6 text-primary font-semibold">
                  {NAV.items.map((item) =>
                    item.href === "/products" ? (
                  <li key={item.href}>
                    <div className="pt-1 pb-2">
                      <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {NAV.productsLabel}
                      </p>
                      <DropdownMenu
                        items={productsMenu}
                        level={0}
                        isMobile
                        expandedMenus={expandedMenus}
                        toggleMenu={toggleMenu}
                        onKeyDown={onKeyDown}
                        onMobileLinkClick={() => setMobileMenuOpen(false)}
                      />
                    </div>
                  </li>
                    ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3.5 px-3 -mx-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-accent active:bg-gray-200 dark:active:bg-gray-700 transition-colors touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                    )
                  )}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}