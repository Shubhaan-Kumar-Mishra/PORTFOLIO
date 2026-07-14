"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home",     href: "#hero" },
  { label: "Work",     href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["hero", "projects", "about", "contact"];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div 
      style={{
        position: "fixed",
        top: "24px",
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      {/* Floating Glassmorphism Pill Navbar with explicit flex settings to prevent squishing */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "12px 20px",
          borderRadius: "9999px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.6)",
          width: "auto",
          minWidth: "320px",
          justifyContent: "space-between",
        }}
      >
        {/* Monogram Initials Icon */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "background-color 0.2s ease",
            textDecoration: "none",
            flexShrink: 0,
          }}
          className="monogram-hover"
          data-cursor
        >
          S
        </a>

        {/* Vertical divider line with explicit side margins */}
        <div style={{ width: "1px", height: "16px", background: "rgba(255, 255, 255, 0.15)", flexShrink: 0, margin: "0 4px" }} />

        {/* Sleek nav links with ample spacing */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                data-cursor
                style={{
                  position: "relative",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  flexShrink: 0,
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill-active"
                    style={{ position: "absolute", inset: 0, borderRadius: "9999px", background: "rgba(255, 255, 255, 0.1)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 10 }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>
      <style>{`
        .monogram-hover:hover {
          background: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </div>
  );
}
