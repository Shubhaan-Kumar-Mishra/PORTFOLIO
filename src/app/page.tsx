"use client";
import { useState, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AchievementsTimeline from "@/components/AchievementsTimeline";
import TechOrbit from "@/components/TechOrbit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* ─── Experience section ─── */
function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cards = [
    {
      type: "Training",
      typeColor: "#ebd4cb",
      typeBg: "rgba(235,212,203,0.04)",
      typeBorder: "rgba(235,212,203,0.12)",
      period: "2026",
      title: "BridgeLabz SIPP Program",
      sub: "Backend Engineering Bootcamp",
      desc: "Selected for intensive Java backend training covering OOP patterns, Spring Boot, Data Structures & Algorithms, MySQL, and production-grade software engineering practices with real-world project delivery.",
      tech: ["Java", "Spring Boot", "OOP", "DSA", "MySQL", "Design Patterns"],
    },
  ];

  return (
    <section id="experience" style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "#fca5a5" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "#fca5a5", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              04 — Training
            </span>
          </div>
        </motion.div>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
        >
          Training &amp; <span style={{ color: "#fca5a5" }}>Bootcamp.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "48px" }}
        >
          Structured backend engineering programs and specialized bootcamps.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "0.68rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      border: `1px solid ${c.typeBorder}`,
                      background: c.typeBg,
                      color: c.typeColor,
                    }}
                  >
                    {c.type}
                  </span>
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.2)" }}>{c.period}</span>
                </div>

                <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "4px" }}>{c.title}</h3>
                <p style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>{c.sub}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", lineHeight: 1.5, marginBottom: "20px" }}>{c.desc}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {c.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GitHub section ─── */
function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { label: "Public Repos", value: "11", color: "#fca5a5" },
    { label: "Primary Language", value: "Java", color: "#ebd4cb" },
    { label: "LeetCode Solved", value: "200+", color: "#ffffff" },
    { label: "Latest Repo", value: "SIPP-2026", color: "#d1d5db" },
  ];

  const recentRepos = [
    { name: "RTPM-Dashboard-Frontend", lang: "JavaScript", stars: 0 },
    { name: "PRO-FOLIO-BACKEND", lang: "JavaScript", stars: 0 },
    { name: "BridgeLabz-SIPP-Training-2026", lang: "Java", stars: 0 },
    { name: "Backend-Dev", lang: "Java", stars: 0 },
  ];

  return (
    <section id="github" ref={ref} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              GitHub Registry
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
        >
          Open Source &amp; <span style={{ color: "#fca5a5" }}>Contributions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "48px" }}
        >
          All projects are open-source. Real code, real commits, real systems.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "24px" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "center",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <div
                style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "IBM Plex Mono, monospace", letterSpacing: "-0.02em", marginBottom: "4px", color: s.color }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Recent repos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "32px" }}
        >
          {recentRepos.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/Shubhaan-Kumar-Mishra/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                background: "rgba(255,255,255,0.01)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              className="network-link-hover"
            >
              <div style={{ overflow: "hidden", paddingRight: "8px" }}>
                <div style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "4px" }}>
                  {repo.name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    style={{ width: "6px", height: "6px", borderRadius: "50%", background: repo.lang === "Java" ? "#ebd4cb" : "#fca5a5" }}
                  />
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)" }}>{repo.lang}</span>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href="https://github.com/Shubhaan-Kumar-Mishra"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontFamily: "IBM Plex Mono, monospace",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            className="view-all-btn-hover"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View all 11 repositories →
          </a>
        </motion.div>
      </div>
      <style>{`
        .view-all-btn-hover:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.3) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}

/* ─── Main page ─── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Cursor />
      <Loader onComplete={handleLoadComplete} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
          background: "#020204",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
          width: "100%",
        }}
      >
        {/* Global ambient background */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(ellipse 80% 60% at 20% 10%, rgba(252,165,165,0.03) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 80% 90%, rgba(235,212,203,0.03) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 70%)
            `,
          }}
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="grid-lines"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.2,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />

          <main>
            <Hero />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <About />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <Skills />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <Projects />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <Experience />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <AchievementsTimeline />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <GitHub />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <TechOrbit />
            <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", width: "100%" }} />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
