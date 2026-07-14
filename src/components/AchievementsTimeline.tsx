"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements, timeline } from "@/data/portfolio";

/* ─── Achievements Card ─────────────────────────────────────────── */
function AchievementCard({ a, delay }: { a: typeof achievements[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const icons: Record<string, React.ReactElement> = {
    award: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    terminal: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    code: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    trophy: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0012 0V2z" />
      </svg>
    ),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", color: "#fca5a5", display: "flex", flexShrink: 0 }}>
            {icons[a.icon] ?? icons.award}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(252,165,165,0.1)", border: "1px solid rgba(252,165,165,0.15)", color: "#fca5a5", fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {a.metric}
            </span>
            <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.2)" }}>{a.year}</span>
          </div>
        </div>

        <h3 style={{ color: "#ffffff", fontSize: "0.88rem", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "4px" }}>{a.title}</h3>
        <p style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>{a.issuer}</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", lineHeight: 1.5 }}>{a.description}</p>
      </div>
    </motion.div>
  );
}

/* ─── Timeline ─────────────────────────────────────────────────── */
const TYPE_COLORS: Record<string, string> = {
  education:   "#fca5a5", // Rose Gold
  achievement: "#ebd4cb", // Cream
  milestone:   "#ffffff", // White
  project:     "#d1d5db", // Light Grey
  future:      "#9ca3af", // Muted Grey
};

const TYPE_ICONS: Record<string, string> = {
  education:   "🎓",
  achievement: "🏆",
  milestone:   "⭐",
  project:     "🚀",
  future:      "🎯",
};

function TimelineItem({ item, idx }: { item: typeof timeline[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const color = TYPE_COLORS[item.type] ?? "#ebd4cb";
  const isLeft = idx % 2 === 0;

  return (
    <div ref={ref} className="timeline-row-responsive" style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", position: "relative" }}>
      {/* Left side */}
      <div className="timeline-left-responsive" style={{ flex: 1, paddingRight: "24px", display: "flex", justifyContent: "flex-end" }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            style={{ width: "100%", maxWidth: "340px" }}
          >
            <TimelineCard item={item} color={color} />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="timeline-node-responsive" style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "48px", zIndex: 10 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: idx * 0.08 + 0.1 }}
          style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#020204", border: `1px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.88rem", boxShadow: "0 0 10px rgba(255,255,255,0.05)" }}
        >
          {TYPE_ICONS[item.type] ?? "📌"}
        </motion.div>
      </div>

      {/* Right side */}
      <div className="timeline-right-responsive" style={{ flex: 1, paddingLeft: "24px" }}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            style={{ width: "100%", maxWidth: "340px" }}
          >
            <TimelineCard item={item} color={color} />
          </motion.div>
        )}
        {/* On mobile, if isLeft is true, render the card here on the right instead of leaving it blank */}
        {isLeft && (
          <div className="timeline-mobile-only-card" style={{ width: "100%" }}>
            <TimelineCard item={item} color={color} />
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineCard({ item, color }: { item: typeof timeline[0]; color: string }) {
  return (
    <div 
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.015)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transition: "all 0.25s ease",
      }}
      className="skill-card-hover"
    >
      <div style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", fontWeight: 600, color, marginBottom: "6px" }}>{item.year}</div>
      <h4 style={{ color: "#ffffff", fontSize: "0.88rem", fontWeight: 600, marginBottom: "6px" }}>{item.title}</h4>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", lineHeight: 1.5 }}>{item.description}</p>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────── */
export default function AchievementsTimeline() {
  const achRef = useRef(null);
  const achView = useInView(achRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Achievements */}
      <section id="achievements" ref={achRef} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          
          {/* Label */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={achView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "32px", background: "#fca5a5" }} />
              <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "#fca5a5", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                05 — Achievements
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }} animate={achView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
          >
            Earned &amp; <span style={{ color: "#fca5a5" }}>Recognized.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }} animate={achView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "48px" }}
          >
            Certifications, milestones, and measurable accomplishments.
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {achievements.map((a, i) => (
              <AchievementCard key={a.title} a={a} delay={0.1 + i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              06 — Journey
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}>
            The <span style={{ color: "#fca5a5" }}>Journey.</span>
          </h2>
          
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "64px" }}>
            From first line of code to production systems — a timeline of growth.
          </p>

          {/* Vertical timeline */}
          <div style={{ position: "relative", width: "100%" }}>
            
            {/* Center line */}
            <div 
              className="timeline-line-responsive"
              style={{
                position: "absolute",
                left: "50%",
                top: "16px",
                bottom: "16px",
                width: "1px",
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.06), transparent)",
                transform: "translateX(-50%)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              {timeline.map((item, idx) => (
                <TimelineItem key={item.year} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
