"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SubTab from "@/components/ui/SubTab";

type ActiveTab = "service" | "works" | null;

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service", tab: "service" as const },
  { label: "Works", href: "/works", tab: "works" as const },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const serviceTabItems = [
  { label: "コンサル", href: "/service#consulting" },
  { label: "B-Hall", href: "/service#bhall" },
  { label: "B-Core", href: "/service#bcore" },
];

const worksTabItems = [
  { label: "導入事例", href: "/works" },
  { label: "業界別事例", href: "/works#industry" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const [mobileAccordion, setMobileAccordion] = useState<ActiveTab>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavEnter = useCallback((tab: ActiveTab) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveTab(tab);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveTab(null);
    }, 150);
  }, []);

  const handleSubTabEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleSubTabLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveTab(null);
    }, 150);
  }, []);

  const handleSubTabClick = useCallback(() => {
    setActiveTab(null);
  }, []);

  const toggleMobileAccordion = (tab: ActiveTab) => {
    setMobileAccordion((prev) => (prev === tab ? null : tab));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeTab
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      {/* Upper bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-backlly.png"
            alt="Backlly"
            width={240}
            height={64}
            className="h-8 md:h-9 w-auto"
            style={{ objectFit: "contain", objectPosition: "left center" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("#");
            const El = isHash ? "a" : Link;
            return (
              <El
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-text-muted hover:text-navy transition-colors tracking-wide"
                onMouseEnter={() => handleNavEnter(link.tab ?? null)}
                onMouseLeave={handleNavLeave}
                onFocus={() => handleNavEnter(link.tab ?? null)}
              >
                {link.label}
              </El>
            );
          })}
          <Button variant="primary" size="sm" href="/contact">
            無料相談
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileAccordion(null);
          }}
          aria-label="メニュー"
        >
          <span
            className={`block w-5 h-[1.5px] bg-navy transition-transform ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-navy transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-navy transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Desktop SubTab */}
      <AnimatePresence>
        {activeTab && (
          <div
            onMouseEnter={handleSubTabEnter}
            onMouseLeave={handleSubTabLeave}
          >
            <SubTab
              key={activeTab}
              items={activeTab === "service" ? serviceTabItems : worksTabItems}
              onItemClick={handleSubTabClick}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => {
                const hasSubmenu = link.tab === "service" || link.tab === "works";
                const isOpen = mobileAccordion === link.tab;
                const subItems =
                  link.tab === "service"
                    ? serviceTabItems
                    : link.tab === "works"
                    ? worksTabItems
                    : [];

                return (
                  <div key={link.href + link.label}>
                    {hasSubmenu ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between text-text-muted hover:text-navy transition-colors py-3 text-left"
                          onClick={() => toggleMobileAccordion(link.tab!)}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`text-xs transition-transform duration-200 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-cyan/20 ml-1">
                                {subItems.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="text-sm text-text-muted hover:text-navy transition-colors py-2"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-text-muted hover:text-navy transition-colors py-3"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="pt-2">
                <Button variant="primary" size="sm" href="/contact">
                  無料相談
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
