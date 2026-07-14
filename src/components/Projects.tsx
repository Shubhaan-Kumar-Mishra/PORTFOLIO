"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import anime from "animejs";

export default function Projects() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = projects.length;
  const activeProj = projects[currentIdx];

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIdx((prev) => (prev - 1 + total) % total);
  };

  const renderMockup = (projId: number) => {
    return <MockupViewer projId={projId} />;
  };

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "96px 24px",
        overflow: "hidden",
        background: "#020204",
      }}
    >
      {/* Background visual grid (Ultra premium look) */}
      <div className="grid-lines" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.03 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            opacity: 0.1,
            top: "20%",
            left: "15%",
            background: "radial-gradient(circle, #fca5a5 0%, transparent 60%)",
            filter: "blur(130px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "1100px" }}>
        
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.3em", color: "#fca5a5", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
            03 — Selected Work
          </span>
          <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            Production-Grade <span style={{ color: "#fca5a5" }}>Architectures.</span>
          </h2>
        </div>

        {/* IDE-style Project Navigation Tabs */}
        <div 
          style={{
            width: "100%",
            maxWidth: "850px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4px",
            overflowX: "auto",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: "1px",
            marginBottom: "32px",
          }}
          className="scrollbar-none"
        >
          <div style={{ display: "flex", gap: "6px" }}>
            {projects.map((proj, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setCurrentIdx(idx)}
                  data-cursor
                  style={{
                    padding: "10px 16px",
                    fontSize: "0.72rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
                    position: "relative",
                  }}
                >
                  <span style={{ color: "#fca5a5" }}>0{idx + 1}.</span>
                  <span>{proj.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-project-tab-line"
                      style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#fca5a5" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Quick status indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", marginRight: "8px" }} className="hidden md:flex">
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} className="animate-pulse"></span>
            <span>SYSTEM HEALTH: ACTIVE</span>
          </div>
        </div>

        {/* Large Premium OS-Window Mockup Showcase */}
        <div 
          style={{
            width: "100%",
            maxWidth: "850px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#070709",
            position: "relative",
            boxShadow: "0 30px 80px rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            marginBottom: "32px",
          }}
        >
          
          {/* OS Window Titlebar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0b0b0e" }}>
            {/* Left window control dots */}
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(239, 68, 68, 0.3)", border: "1px solid rgba(239, 68, 68, 0.2)" }}></span>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.3)", border: "1px solid rgba(245, 158, 11, 0.2)" }}></span>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.3)", border: "1px solid rgba(16, 185, 129, 0.2)" }}></span>
            </div>
            {/* Center active project title */}
            <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#fca5a5" }}>skm_os:</span> {activeProj.tagline}
            </span>
            {/* Right details */}
            <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)" }}>{activeProj.year}</span>
          </div>

          {/* Screenshot visual display mockup area with clean slide animations */}
          <div style={{ aspectRatio: "16/9", width: "100%", position: "relative", background: "#020204", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProj.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%", height: "100%" }}
              >
                {renderMockup(activeProj.id)}
              </motion.div>
            </AnimatePresence>
            
            {/* CRT Screen Scanlines overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.02,
                pointerEvents: "none",
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 50%, transparent 50%)",
                backgroundSize: "100% 4px",
              }}
            />
          </div>
        </div>

        {/* Minimalist Centered Slider controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px", justifyContent: "center" }}>
          <button
            onClick={prev}
            style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", transition: "all 0.2s ease", background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}
            className="slider-btn-hover"
            aria-label="Previous project"
          >
            ←
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  padding: 0,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: idx === currentIdx ? "#fca5a5" : "rgba(255,255,255,0.15)",
                  transform: idx === currentIdx ? "scale(1.2)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", transition: "all 0.2s ease", background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}
            className="slider-btn-hover"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Premium 2-Column Details Layout */}
        <div style={{ width: "100%", maxWidth: "850px", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", padding: "32px", background: "rgba(7,7,10,0.8)", backdropFilter: "blur(12px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid-12"
            >
              
              {/* Left Column: Title + Description */}
              <div className="col-span-7" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", padding: "2px 8px", borderRadius: "4px", background: "rgba(252,165,165,0.1)", color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {activeProj.type}
                  </span>
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)" }}>{activeProj.status}</span>
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.025em", marginBottom: "8px" }}>
                  {activeProj.name}
                </h3>
                <span style={{ fontSize: "0.72rem", fontFamily: "IBM Plex Mono, monospace", color: "#ebd4cb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px", display: "block" }}>
                  {activeProj.tagline}
                </span>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  {activeProj.longDescription}
                </p>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <a
                    href={activeProj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.75rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      fontWeight: 500,
                      color: "#ffffff",
                      transition: "color 0.2s ease",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      paddingBottom: "2px",
                      textDecoration: "none",
                    }}
                    className="repo-link-hover"
                    data-cursor
                  >
                    View Code Repository <span>→</span>
                  </a>
                  {(activeProj as any).githubBackend && (
                    <>
                      <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                      <a
                        href={(activeProj as any).githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.75rem",
                          fontFamily: "IBM Plex Mono, monospace",
                          fontWeight: 500,
                          color: "#ffffff",
                          transition: "color 0.2s ease",
                          borderBottom: "1px solid rgba(255,255,255,0.2)",
                          paddingBottom: "2px",
                          textDecoration: "none",
                        }}
                        className="repo-link-hover"
                        data-cursor
                      >
                        Backend Repo <span>→</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Tech & Highlights Grid */}
              <div className="col-span-5" style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                {/* Tech Pills */}
                <div>
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>Technologies</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {activeProj.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.68rem",
                          fontFamily: "IBM Plex Mono, monospace",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.5)",
                          transition: "all 0.2s ease",
                        }}
                        className="tech-pill-proj-hover"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>Key Deliverables</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {activeProj.highlights.slice(0, 4).map((h, i) => (
                      <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ flexShrink: 0, width: "16px", height: "16px", borderRadius: "4px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.62rem", color: "#fca5a5", marginTop: "2px" }}>
                          {i + 1}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .slider-btn-hover:hover {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .repo-link-hover:hover {
          color: #fca5a5 !important;
          border-color: rgba(252, 165, 165, 0.4) !important;
        }
        .tech-pill-proj-hover:hover {
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}

// Inner client side interactive elements
function MockupViewer({ projId }: { projId: number }) {
  // PRO SPACE live connection log simulator
  const [logs, setLogs] = useState<string[]>([
    "[17:29:01] WS: Establishing gateway connection...",
    "[17:29:03] WS: Socket.io handshake complete. ID=WS_PRO_40",
  ]);

  // PRO FOLIO Stock ticker price simulator
  const [tickerPrices, setTickerPrices] = useState({
    AAPL: 184.20,
    MSFT: 421.50,
    TSLA: 178.90,
  });

  // Dijkstra graph animation step state
  const [dijkstraStep, setDijkstraStep] = useState(0);

  // Spring boot log state line index
  const [springLines, setSpringLines] = useState<string[]>([]);
  const springLogsRef = useRef<HTMLDivElement>(null);

  // Graph paths container ref for anime.js animation
  const routePathRef = useRef<SVGPathElement>(null);
  const folioPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (projId === 1) {
      // WS log simulator interval
      const updates = [
        "BROADCAST: Task 402 updated by shubhaan",
        "SYNC: MongoDB replica cluster healthy",
        "METRIC: Group velocity calculated: 94%",
        "WS: Received user_joined broadcast (client_id=74)",
        "DB: Aggregation query completed in 4ms",
        "API: GET /api/v1/analytics - 200 OK",
      ];
      let idx = 0;
      const interval = setInterval(() => {
        setLogs((prev) => {
          const next = [...prev, `[${new Date().toLocaleTimeString()}] ${updates[idx]}`];
          if (next.length > 5) next.shift();
          return next;
        });
        idx = (idx + 1) % updates.length;
      }, 3000);
      return () => clearInterval(interval);
    } else if (projId === 2) {
      // Stock ticker simulation
      const interval = setInterval(() => {
        setTickerPrices((prev) => ({
          AAPL: prev.AAPL + (Math.random() - 0.49) * 0.4,
          MSFT: prev.MSFT + (Math.random() - 0.49) * 0.6,
          TSLA: prev.TSLA + (Math.random() - 0.51) * 0.9,
        }));
      }, 1000);

      // SVG path drawing animation with anime.js
      if (folioPathRef.current) {
        folioPathRef.current.style.strokeDashoffset = "500";
        folioPathRef.current.style.strokeDasharray = "500";
        anime({
          targets: folioPathRef.current,
          strokeDashoffset: [500, 0],
          easing: "easeInOutQuad",
          duration: 2500,
          loop: false,
        });
      }
      return () => clearInterval(interval);
    } else if (projId === 3) {
      // Dijkstra steps interval
      const interval = setInterval(() => {
        setDijkstraStep((prev) => (prev + 1) % 6);
      }, 1800);

      // Path drawing using anime.js
      if (routePathRef.current) {
        routePathRef.current.style.strokeDashoffset = "400";
        routePathRef.current.style.strokeDasharray = "400";
        anime({
          targets: routePathRef.current,
          strokeDashoffset: [400, 0],
          easing: "easeOutQuad",
          duration: 3000,
          loop: true,
        });
      }
      return () => clearInterval(interval);
    } else if (projId === 4) {
      // Spring boot typewriter simulator
      const bootSequence = [
        "  .   ____          _            __ _ _",
        " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
        "( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\",
        " \\\\/  ___)| |_)| |  | | | || (_| |  ) ) ) )",
        "  '  |____| .__|_|  |_|_| |_|\\__, | / / / /",
        " =========|_|==============|___/=/_/_/_/",
        " :: Spring Boot ::                (v3.2.0)",
        "",
        "INFO: Starting SIPPApp on localhost with JVM...",
        "INFO: Profile set: dev, database-mongo-wired",
        "INFO: JPA Hibernate layer initialization: complete",
        "INFO: Mapping Route: GET /api/v1/shortest-path",
        "INFO: Autowiring RouteControllers...",
        "SUCCESS: Spring Boot server initialized on port 8080",
        "API: GET /api/v1/dijkstra/traverse - 200 OK - 8ms",
        "API: GET /api/v1/dijkstra/benchmark - 200 OK - 14ms",
      ];
      setSpringLines(bootSequence.slice(0, 7));
      let idx = 7;
      const interval = setInterval(() => {
        if (idx < bootSequence.length) {
          setSpringLines((prev) => [...prev, bootSequence[idx]]);
          idx++;
        } else {
          // loop logs
          setSpringLines(bootSequence.slice(0, 8));
          idx = 8;
        }
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [projId]);

  // Scroll spring logs element to bottom automatically
  useEffect(() => {
    if (springLogsRef.current) {
      springLogsRef.current.scrollTop = springLogsRef.current.scrollHeight;
    }
  }, [springLines]);

  switch (projId) {
    case 1: // PRO SPACE
      return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px", color: "rgba(255,255,255,0.8)", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
          {/* Dashboard HUD */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>WORKSPACE: PRO_SPACE</span>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.2)", border: "1px solid rgba(16, 185, 129, 0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#10b981" }} className="animate-ping"></span>
              </span>
            </div>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace" }}>REDUX_STORE_SYNCED</span>
          </div>
          
          {/* Kanban / Task grid board */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", margin: "auto 0" }}>
            <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>Backlog</span>
                <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", padding: "1px 4px", borderRadius: "3px", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>2</span>
              </div>
              <div style={{ padding: "8px", borderRadius: "4px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.03)", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>
                Setup auth route handler
              </div>
              <div style={{ padding: "8px", borderRadius: "4px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.03)", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>
                Rate limiting middleware
              </div>
            </div>
            
            <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#fca5a5", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>In Progress</span>
                <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", padding: "1px 4px", borderRadius: "3px", background: "rgba(252, 165, 165, 0.1)", color: "#fca5a5" }}>1</span>
              </div>
              <div style={{ padding: "8px", borderRadius: "4px", background: "rgba(252,165,165,0.05)", border: "1px solid rgba(252,165,165,0.15)", fontSize: "0.7rem", color: "#ffffff" }}>
                WS connection broadcast
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "#ffffff", fontWeight: "bold" }}>S</div>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(252,165,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "#fca5a5", fontWeight: "bold" }}>A</div>
                </div>
              </div>
            </div>

            <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>Completed</span>
                <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", padding: "1px 4px", borderRadius: "3px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}>4</span>
              </div>
              <div style={{ padding: "8px", borderRadius: "4px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.03)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>
                Wire up database aggregations
              </div>
              <div style={{ padding: "8px", borderRadius: "4px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.03)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>
                JWT sign &amp; validation
              </div>
            </div>
          </div>

          {/* Scrolling client status update telemetry feed */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px", display: "flex", flexDirection: "column", gap: "4px", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.35)" }}>
            {logs.map((log, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{log}</span>
                {i === logs.length - 1 && <span style={{ padding: "1px 4px", borderRadius: "3px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontWeight: "bold" }}>LIVE UPDATE</span>}
              </div>
            ))}
          </div>
        </div>
      );
    case 2: // PRO FOLIO
      return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px", color: "rgba(255,255,255,0.8)", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
          {/* Header info */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px" }}>
            <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>MARKET MONITOR: PRO_FOLIO</span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(235, 212, 203, 0.1)", color: "#ebd4cb", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace" }}>OTP_SECURED</span>
          </div>

          {/* Prices grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "auto 0" }}>
            {/* Positions list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", fontSize: "0.68rem" }}>AAPL / NASDAQ</span>
                <span style={{ fontWeight: 600, color: "#10b981", fontFamily: "IBM Plex Mono, monospace" }}>${tickerPrices.AAPL.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", fontSize: "0.68rem" }}>MSFT / NASDAQ</span>
                <span style={{ fontWeight: 600, color: "#10b981", fontFamily: "IBM Plex Mono, monospace" }}>${tickerPrices.MSFT.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem" }}>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", fontSize: "0.68rem" }}>TSLA / NASDAQ</span>
                <span style={{ fontWeight: 600, color: "#ef4444", fontFamily: "IBM Plex Mono, monospace" }}>${tickerPrices.TSLA.toFixed(2)}</span>
              </div>
            </div>

            {/* Graphic line chart representation */}
            <div style={{ height: "112px", borderRadius: "8px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>Live Portfolio Valuation</span>
              <svg style={{ width: "100%", height: "48px", overflow: "visible", marginTop: "4px" }} viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="100%" stopColor="#ebd4cb" />
                  </linearGradient>
                </defs>
                <path
                  ref={folioPathRef}
                  d="M0 35 Q 20 18, 40 28 T 80 8 T 100 3"
                  fill="none"
                  stroke="url(#lineGlow)"
                  strokeWidth="2"
                />
                <path d="M0 35 Q 20 18, 40 28 T 80 8 T 100 3 L 100 40 L 0 40 Z" fill="rgba(252,165,165,0.01)" />
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", marginTop: "4px", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ color: "#ffffff", fontWeight: "bold" }}>$12,480.25</span>
                <span style={{ color: "#10b981", fontWeight: "bold" }}>+3.82%</span>
              </div>
            </div>
          </div>

          {/* Telemetry info */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "IBM Plex Mono, monospace" }}>
            <span>NODEMAILER SMTP GATEWAY SECURED</span>
            <span>INPUT_VALIDATE: PASS (LIMIT 35)</span>
          </div>
        </div>
      );
    case 3: // Route Optimizer
      return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px", color: "rgba(255,255,255,0.8)", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px" }}>
            <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>ENGINE: DIJKSTRA PATHFINDER</span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(6, 182, 212, 0.1)", color: "#06b6d4", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace" }}>SOLVED: O((V+E)LOGV)</span>
          </div>

          {/* Dynamic node network visual representation */}
          <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", margin: "8px 0" }}>
            <svg style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.4, overflow: "visible" }} viewBox="0 0 100 60">
              {/* Paths */}
              <line x1="20" y1="30" x2="45" y2="15" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="20" y1="30" x2="45" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="45" y1="15" x2="75" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="45" y1="45" x2="75" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="45" y1="15" x2="45" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Path highlight animation using anime.js */}
              <path
                ref={routePathRef}
                d="M 20 30 L 45 15 L 75 30"
                fill="none"
                stroke="#fca5a5"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ opacity: 0.8 }}
              />

              {/* Node highlights based on step */}
              <circle cx="20" cy="30" r="4.5" fill="#020204" stroke={dijkstraStep >= 1 ? "#fca5a5" : "rgba(255,255,255,0.15)"} strokeWidth="2" style={{ transition: "all 0.2s ease" }} />
              <circle cx="45" cy="15" r="4.5" fill="#020204" stroke={dijkstraStep >= 2 ? "#fca5a5" : "rgba(255,255,255,0.15)"} strokeWidth="2" style={{ transition: "all 0.2s ease" }} />
              <circle cx="45" cy="45" r="4.5" fill="#020204" stroke={dijkstraStep >= 4 ? "#ebd4cb" : "rgba(255,255,255,0.15)"} strokeWidth="2" style={{ transition: "all 0.2s ease" }} />
              <circle cx="75" cy="30" r="4.5" fill="#020204" stroke={dijkstraStep >= 3 ? "#fca5a5" : "rgba(255,255,255,0.15)"} strokeWidth="2" style={{ transition: "all 0.2s ease" }} />
              
              {/* Node labels */}
              <text x="19" y="23" fill="white" fontSize="6" fontFamily="monospace" textAnchor="middle">A</text>
              <text x="45" y="8" fill="white" fontSize="6" fontFamily="monospace" textAnchor="middle">B</text>
              <text x="45" y="55" fill="white" fontSize="6" fontFamily="monospace" textAnchor="middle">C</text>
              <text x="75" y="23" fill="white" fontSize="6" fontFamily="monospace" textAnchor="middle">D</text>

              {/* Path Weights */}
              <rect x="29" y="18" width="8" height="6" rx="2" fill="#020204" />
              <text x="33" y="23" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace" textAnchor="middle">w:2</text>
              <rect x="59" y="18" width="8" height="6" rx="2" fill="#020204" />
              <text x="63" y="23" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace" textAnchor="middle">w:1</text>
            </svg>
            <div style={{ position: "absolute", top: "8px", right: "8px", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(252,165,165,0.8)", background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "4px", border: "1px solid rgba(252,165,165,0.1)", zIndex: 10 }}>
              SHORTEST_PATH: A → B → D [w = 3]
            </div>
          </div>

          {/* Footer data */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "IBM Plex Mono, monospace" }}>
            <span>RESOLVING PATH: w_directed_graph</span>
            <span>VERIFIED ZERO CYCLIC LOOP</span>
          </div>
        </div>
      );
    default: // BridgeLabz SIPP
      return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "20px", color: "rgba(255,255,255,0.8)", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
            <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>JAVA CONSOLE: BOOTING_SIPP</span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(99, 102, 241, 0.1)", color: "#6366f1", fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace" }}>JDK21_RUNTIME</span>
          </div>

          {/* Typewriter logs block */}
          <div 
            ref={springLogsRef}
            style={{
              flex: 1,
              overflowY: "auto",
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              margin: "8px 0",
              maxHeight: "144px",
              paddingRight: "4px",
            }}
            className="scrollbar-none"
          >
            {springLines.map((line, i) => {
              if (!line || typeof line !== "string") return null;
              const isInfo = line.includes("INFO:");
              const isSuccess = line.includes("SUCCESS:");
              const isApi = line.includes("API:");
              let color = "rgba(255,255,255,0.5)";
              if (isInfo) color = "rgba(255,255,255,0.4)";
              if (isSuccess) color = "#10b981";
              if (isApi) color = "#818cf8";
              if (line.startsWith(" ")) color = "rgba(252,165,165,0.7)"; // Banner

              return (
                <div key={i} style={{ whiteSpace: "pre", color }}>
                  {line}
                </div>
              );
            })}
          </div>

          {/* Footer telemetry */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "IBM Plex Mono, monospace" }}>
            <span>SPRING DATA JPA WIRED: MYSQL</span>
            <span>COMPILER GARBAGE COLLECTOR: GC_OK</span>
          </div>
        </div>
      );
  }
}
