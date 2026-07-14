"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

const CATEGORIES = Object.keys(skills) as Array<keyof typeof skills>;

const LEVEL_CONFIG: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Expert:       { color: "#ffffff", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.12)", dot: "#ffffff" },
  Advanced:     { color: "#fca5a5", bg: "rgba(252,165,165,0.04)", border: "rgba(252,165,165,0.15)", dot: "#fca5a5" },
  Intermediate: { color: "#ebd4cb", bg: "rgba(235,212,203,0.04)", border: "rgba(235,212,203,0.15)", dot: "#ebd4cb" },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<keyof typeof skills>("Languages");

  return (
    <section id="skills" ref={ref} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "#fca5a5" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "#fca5a5", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              02 — Skills
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
        >
          Technology <span style={{ color: "#fca5a5" }}>Matrix.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "32px" }}
        >
          A production-grade stack built through real projects, not tutorials.
        </motion.p>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px", flexWrap: "wrap" }}
        >
          {Object.entries(LEVEL_CONFIG).map(([level, cfg]) => (
            <div key={level} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: cfg.dot }} />
              <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "6px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "1px", marginBottom: "32px" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor
              style={{
                padding: "10px 16px",
                borderRadius: "8px 8px 0 0",
                fontSize: "0.78rem",
                fontFamily: "IBM Plex Mono, monospace",
                position: "relative",
                transition: "all 0.2s ease",
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: active === cat ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
            >
              {active === cat && (
                <motion.div
                  layoutId="active-skill-category-tab"
                  style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#fca5a5" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 10 }}>{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}
        >
          {skills[active].map((skill, i) => {
            const cfg = LEVEL_CONFIG[skill.level] ?? LEVEL_CONFIG.Intermediate;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                }}
                className="skill-card-hover"
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{skill.name}</span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                    color: cfg.color,
                  }}
                >
                  {skill.level}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full stack pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)", marginTop: "32px" }}
        >
          <h4 style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            Full Stack Matrix Cloud
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Node.js","Express","React","Next.js","MongoDB","MySQL","TypeScript","Java","Spring Boot","Python","Docker","Git","Linux","Azure","JWT","WebSockets","REST APIs","Tailwind"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "IBM Plex Mono, monospace",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.5)",
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
                className="tech-pill-hover"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .tech-pill-hover:hover {
          border-color: rgba(252, 165, 165, 0.2) !important;
          color: #ffffff !important;
          background: rgba(252, 165, 165, 0.05) !important;
        }
      `}</style>
    </section>
  );
}
