"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "SKM.OS v2.0.26 SIPP active.",
    "User authenticated: Shubhaan Kumar Mishra",
  ]);

  useEffect(() => {
    const events = [
      "SYSTEM: Java Virtual Machine initialized.",
      "SYSTEM: Spring Boot core loaded successfully.",
      "DATABASE: Connected to MongoDB cluster.",
      "ROUTING: short_path = Dijkstra(V, E)",
      "CONTRIB: Syncing 200+ LeetCode solutions...",
      "STATUS: All backend microservices healthy.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines((prev) => {
        const next = [...prev, events[i]];
        if (next.length > 6) next.shift();
        return next;
      });
      i = (i + 1) % events.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "hidden",
        padding: "96px 24px 64px 24px",
        background: "#000000",
      }}
    >
      {/* Subtle monochrome ambient light overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            width: "80vw",
            height: "80vw",
            borderRadius: "50%",
            opacity: 0.1,
            top: "-15%",
            right: "5%",
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div
        className="grid-12"
        style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px" }}
      >
        {/* Left Column Content */}
        <div className="col-span-7" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Serif style Header with clean text glow */}
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                lineHeight: 1.08,
                marginBottom: "24px",
              }}
            >
              A Scalable Systems Developer &amp; Backend Engineer, Plugged into the Future
            </h1>

            {/* Profile Intro / Description */}
            <p style={{ color: "#86868b", fontSize: "clamp(1rem, 2vw, 1.125rem)", maxWidth: "560px", marginBottom: "32px", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
              I am Shubhaan Kumar Mishra, a Backend Engineer specializing in Java, Spring Boot,
              Node.js, and database architectures. I build secure, high-performance web systems and robust distributed backends.
            </p>

            {/* Premium Call to Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontFamily: "IBM Plex Mono, monospace",
                  fontWeight: 500,
                  background: "#ffffff",
                  color: "#000000",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
                  textDecoration: "none",
                }}
                className="submit-btn-hover"
              >
                Inspect Work &gt;//
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontFamily: "IBM Plex Mono, monospace",
                  fontWeight: 500,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "transparent",
                  color: "#ffffff",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                className="view-all-btn-hover"
              >
                Get In Touch
              </a>
            </div>

            {/* Scroll Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255,255,255,0.4)", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", border: "1px solid rgba(255,255,255,0.25)", width: "20px", height: "32px", borderRadius: "9999px", padding: "6px 0", flexShrink: 0 }}>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.7)" }}
                />
              </div>
              <span>Scroll to inspect my selected work</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-fidelity SuperPET Computer Mockup */}
        <div className="col-span-5" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "100%",
              maxWidth: "430px",
              padding: "24px",
              borderRadius: "24px",
              background: "#1c1c1e",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              position: "relative",
            }}
          >
            {/* Inner Monitor Bezel */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "12px",
                padding: "16px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#000000",
                border: "2px solid #2c2c2e",
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.95)",
              }}
            >
              {/* Retro Screen Green phosphors glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  opacity: 0.8,
                  background: "radial-gradient(circle at center, #131b26 0%, #000000 100%)",
                }}
              />

              {/* CRT Scanline Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                  pointerEvents: "none",
                  opacity: 0.08,
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 50%, transparent 50%)",
                  backgroundSize: "100% 4px",
                }}
              />

              {/* Console logs outputting code execution */}
              <div style={{ position: "relative", zIndex: 20, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.68rem", color: "rgba(238,242,255,0.9)", lineHeight: 1.5 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.62rem", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>SuperPET SP9000</span>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.45)" }} className="animate-ping"></span>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "6px", overflow: "hidden" }}>
                  {terminalLines.map((line, idx) => (
                    <div
                      key={idx}
                      style={{ textShadow: "0 0 4px rgba(255,255,255,0.5)", color: line.startsWith("SYSTEM") ? "rgba(255,255,255,0.6)" : "#ffffff" }}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)" }}>
                  <span>RAM: 96KB</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: "bold" }}>100% ONLINE</span>
                </div>
              </div>
            </div>

            {/* Bezel details below monitor */}
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px" }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: "bold", fontSize: "0.75rem", letterSpacing: "0.05em", color: "#ffffff" }}>SKM.DEV</span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ width: "10px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px" }}></span>
                <span style={{ width: "10px", height: "4px", background: "rgba(255,255,255,0.25)", borderRadius: "2px" }}></span>
                <span style={{ width: "10px", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "2px" }}></span>
              </div>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>SuperPET</span>
            </div>

            {/* Keyboard Deck representation */}
            <div
              style={{
                width: "100%",
                height: "44px",
                marginTop: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 16px",
                gap: "6px",
                background: "#121214",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Keys track */}
              <div style={{ width: "100%", height: "8px", background: "rgba(0,0,0,0.6)", borderRadius: "4px", display: "flex", gap: "4px", justifyContent: "space-between", padding: "0 4px" }}>
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} style={{ flex: 1, height: "100%", background: "#1c1c1e", borderRadius: "1px" }}></span>
                ))}
              </div>
              <div style={{ width: "100%", height: "8px", background: "rgba(0,0,0,0.6)", borderRadius: "4px", display: "flex", gap: "4px", justifyContent: "space-between", padding: "0 8px" }}>
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i} style={{ flex: 1, height: "100%", background: "#1c1c1e", borderRadius: "1px" }}></span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
