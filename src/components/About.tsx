"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, education, stats, codingPlatforms } from "@/data/portfolio";

function SectionLabel({ num, label, color = "#fca5a5" }: { num: string; label: string; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
      <div style={{ height: "1px", width: "32px", background: color }} />
      <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color, letterSpacing: "0.15em", textTransform: "uppercase" }}>
        {num} — {label}
      </span>
    </div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 15, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.015)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transition: "all 0.25s ease",
      }}
      className="skill-card-hover"
    >
      <span style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "4px", color: "#ffffff", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.025em" }}>
        {value}
      </span>
      <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label + Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <SectionLabel num="01" label="About" color="#fca5a5" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "48px", lineHeight: 1.1 }}
        >
          The Engineer <span style={{ color: "#fca5a5" }}>Behind the Code.</span>
        </motion.h2>

        <div className="grid-12">
          
          {/* Left Column (Span 6) */}
          <div className="col-span-6" style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "rgba(252, 165, 165, 0.1)", border: "1px solid rgba(252, 165, 165, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.125rem", fontWeight: "bold", color: "#fca5a5", flexShrink: 0 }}>
                  S
                </div>
                <div>
                  <h3 style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.025em" }}>{personalInfo.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", marginTop: "2px" }}>{personalInfo.title}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} className="animate-pulse" />
                    <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)" }}>{personalInfo.availability}</span>
                  </div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.6 }}>{personalInfo.bio}</p>
            </motion.div>

            {/* Profile Metrics Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <h4 style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                Metadata Registry
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "12px" }}>
                {[
                  { label: "Location", value: personalInfo.location, icon: "📍" },
                  { label: "Degree", value: "B.Tech — CS", icon: "🎓" },
                  { label: "CPI Score", value: education.cgpa, icon: "📊" },
                  { label: "Timeline", value: education.year, icon: "📅" },
                  { label: "Email", value: "On request", icon: "📧" },
                  { label: "Status", value: "Available", icon: "✅" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
                    <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "IBM Plex Mono, monospace", marginBottom: "4px" }}>{item.icon} {item.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Online Handles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <h4 style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                Network Gateways
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {codingPlatforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.03)",
                      background: "transparent",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                    }}
                    className="network-link-hover"
                  >
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{p.name}</div>
                      <div style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{p.handle}</div>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Span 6) */}
          <div className="col-span-6" style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            
            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {stats.map((s, i) => (
                <StatCard key={s.label} value={s.value} label={s.label} delay={0.2 + i * 0.05} />
              ))}
            </div>

            {/* Education Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <h4 style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                Academic Log
              </h4>
              <div style={{ padding: "20px", borderRadius: "8px", background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
                <h5 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}>{education.degree}</h5>
                <p style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.4)", marginTop: "4px", marginBottom: "16px" }}>
                  {education.year} · CPI {education.cgpa}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {education.coursework.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: "0.68rem",
                        fontFamily: "IBM Plex Mono, monospace",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech Languages / Core Runtimes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.25s ease",
              }}
              className="skill-card-hover"
            >
              <h4 style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                Core Compilers &amp; Languages
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Java", "JavaScript", "TypeScript", "Python", "SQL", "Bash", "HTML", "CSS"].map((lang) => (
                  <span
                    key={lang}
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.01)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.6)",
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    className="lang-badge-hover"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pipeline Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgba(252, 165, 165, 0.1)",
                background: "rgba(255, 255, 255, 0.01)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fca5a5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fca5a5" }} className="animate-ping" />
                </span>
                <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>Active Pipeline</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
                Advancing Java backend architecture with Spring Boot, microservices patterns, and Azure cloud deployment through BridgeLabz SIPP — while actively seeking internship and full-time backend/full-stack roles.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
      <style>{`
        .network-link-hover:hover {
          background: rgba(255, 255, 255, 0.02) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .lang-badge-hover:hover {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
