"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  status: "STABLE" | "ACTIVE" | "OPTIMIZED" | "CORE";
  metrics: string;
  color: string;
  desc: string;
}

const CATEGORIES = ["Core Systems", "Frameworks & APIs", "Data Layers", "Cloud & DevOps"] as const;

const TECH_DATA: Record<typeof CATEGORIES[number], TechItem[]> = {
  "Core Systems": [
    { name: "Java", category: "Language", status: "CORE", metrics: "JDK 21 Runtime", color: "#ED8B00", desc: "Primary language for secure, enterprise backends and data structure engines." },
    { name: "TypeScript", category: "Language", status: "OPTIMIZED", metrics: "Strict Type Safety", color: "#3178C6", desc: "Typed JavaScript for maintainable, production-ready full-stack applications." },
    { name: "JavaScript", category: "Language", status: "ACTIVE", metrics: "ESNext Standard", color: "#F7DF1E", desc: "Dynamic scripting for server-side logic and interactive web components." },
    { name: "Python", category: "Language", status: "STABLE", metrics: "Cpython 3.12", color: "#3776AB", desc: "Data processing, algorithms, scripting, and automation pipelines." },
  ],
  "Frameworks & APIs": [
    { name: "Spring Boot", category: "Backend", status: "CORE", metrics: "JPA & Spring Security", color: "#6DB33F", desc: "Microservices design patterns, entity-relational database binding, and secure backends." },
    { name: "Express.js", category: "Backend", status: "ACTIVE", metrics: "High Throughput", color: "#828282", desc: "Sleek, fast RESTful APIs built on asynchronous Node.js foundations." },
    { name: "React.js", category: "Frontend", status: "OPTIMIZED", metrics: "Virtual DOM v19", color: "#61DAFB", desc: "Responsive component architectures, state telemetry, and UI rendering." },
    { name: "Next.js", category: "Frontend", status: "ACTIVE", metrics: "App Router SSR", color: "#ffffff", desc: "Server-side rendering, bundle optimizations, and static site generations." },
  ],
  "Data Layers": [
    { name: "MongoDB", category: "Database", status: "CORE", metrics: "Aggregation Layer", color: "#47A248", desc: "NoSQL document storage, indexing optimizations, and real-time database feeds." },
    { name: "MySQL", category: "Database", status: "OPTIMIZED", metrics: "Relational Indexing", color: "#4479A1", desc: "ACID transactions, complex join queries, and relation schemas." },
    { name: "PostgreSQL", category: "Database", status: "STABLE", metrics: "JSONB Runtimes", color: "#336791", desc: "Robust open-source relational engine with JSON document capabilities." },
    { name: "Supabase", category: "Database", status: "ACTIVE", metrics: "PostgREST Gateway", color: "#3ECF8E", desc: "Serverless SQL database integration with built-in instant JWT security." },
  ],
  "Cloud & DevOps": [
    { name: "Docker", category: "DevOps", status: "OPTIMIZED", metrics: "Container Engine", color: "#2496ED", desc: "Containerizing backend layers to ensure reproducible production environments." },
    { name: "Linux", category: "DevOps", status: "STABLE", metrics: "POSIX Standard", color: "#FCC624", desc: "Terminal scripting, file system management, and production server host environments." },
    { name: "Git", category: "Tools", status: "ACTIVE", metrics: "VCS Standard", color: "#F05032", desc: "Collaborative source control, git-flow architectures, and version registries." },
    { name: "Azure", category: "Cloud", status: "ACTIVE", metrics: "App Service & VM", color: "#0078D4", desc: "Cloud resource deployment, database wiring, and backend microservice hostings." },
  ],
};

export default function TechOrbit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]>("Core Systems");
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([
    "[OK] System diagnostic engine initialized.",
    "[OK] Target registry connected successfully.",
  ]);
  const [diagnosticState, setDiagnosticState] = useState<"idle" | "running" | "complete">("idle");
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll telemetry logs to bottom
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
    }
  }, [diagnosticLogs]);

  // diagnostic check handler
  const runDiagnostics = () => {
    if (diagnosticState === "running") return;
    setDiagnosticState("running");
    setDiagnosticLogs([
      `[${new Date().toLocaleTimeString()}] PINGING: Core runtimes registry...`,
    ]);

    const steps = [
      "RESOLVING: java.vm.runtime -> JDK 21 [OK]",
      "RESOLVING: node.process.engine -> Node v20 [OK]",
      "DB_PING: mongodb://replica_cluster -> 4ms [HEALTHY]",
      "DB_PING: mysql://relational_db -> 8ms [HEALTHY]",
      "DOCKER: Checking active container contexts... 4 running [OK]",
      "METRIC: System resource utilization: CPU 2.4%, RAM 18%",
      "DIAGNOSTIC: All technical layers verified. STATUS=GREEN",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setDiagnosticLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${steps[i]}`]);
        i++;
      } else {
        clearInterval(interval);
        setDiagnosticState("complete");
      }
    }, 800);
  };

  return (
    <section id="techstack" ref={ref} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              07 — Tech Stack Registry
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
        >
          Tools of the <span style={{ color: "#fca5a5" }}>Trade.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.88rem", maxWidth: "480px", marginBottom: "48px" }}
        >
          The production-tested technologies, frameworks, and servers I use daily to build robust backends.
        </motion.p>

        {/* Two Column Layout Grid */}
        <div className="grid-12">
          
          {/* Left Column: Interactive Categories and Tech Cards Grid */}
          <div className="col-span-7" style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            
            {/* Category tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "1px" }}>
              {CATEGORIES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  data-cursor
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px 8px 0 0",
                    fontSize: "0.72rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    position: "relative",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                    color: activeTab === tab ? "#ffffff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-tech-orbit-tab"
                      style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#fca5a5" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 10 }}>{tab}</span>
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
              className="grid-2"
            >
              {TECH_DATA[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.015)",
                    border: `1px solid rgba(255, 255, 255, 0.05)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    minHeight: "150px",
                  }}
                  className="skill-card-hover"
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#ffffff" }}>{tech.name}</span>
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontFamily: "IBM Plex Mono, monospace",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          background: `${tech.color}12`,
                          border: `1px solid ${tech.color}30`,
                          color: tech.color,
                          fontWeight: 600,
                        }}
                      >
                        {tech.status}
                      </span>
                    </div>

                    {/* Sub details */}
                    <div style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>
                      {tech.metrics}
                    </div>

                    {/* Desc */}
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                      {tech.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Telemetry System Check */}
          <div className="col-span-5" style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.01)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: "260px",
                justifyContent: "space-between",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ebd4cb" }} className="animate-pulse" />
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>System Telemetry</span>
                </div>
                
                <button
                  onClick={runDiagnostics}
                  disabled={diagnosticState === "running"}
                  data-cursor
                  style={{
                    padding: "4px 8px",
                    fontSize: "0.62rem",
                    fontFamily: "IBM Plex Mono, monospace",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  className="ping-btn-hover"
                >
                  {diagnosticState === "running" ? "RUNNING..." : "RUN DIAGNOSTICS"}
                </button>
              </div>

              {/* Logs area */}
              <div
                ref={logsEndRef}
                style={{
                  padding: "16px",
                  flex: 1,
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  overflowY: "auto",
                  maxHeight: "200px",
                }}
                className="scrollbar-none"
              >
                {diagnosticLogs.map((log, index) => {
                  let color = "rgba(255,255,255,0.45)";
                  if (log.includes("[HEALTHY]") || log.includes("[OK]") || log.includes("STATUS=GREEN")) {
                    color = "#10b981";
                  } else if (log.includes("PINGING:") || log.includes("RESOLVING:")) {
                    color = "#fca5a5";
                  }

                  return (
                    <div key={index} style={{ color, marginBottom: "4px", whiteSpace: "pre-wrap" }}>
                      {log}
                    </div>
                  );
                })}
              </div>

              {/* Status bar */}
              <div
                style={{
                  padding: "10px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.62rem",
                  fontFamily: "IBM Plex Mono, monospace",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                <span>ENGINE DIAGNOSTIC STATUS:</span>
                {diagnosticState === "running" ? (
                  <span style={{ color: "#f59e0b" }} className="animate-pulse">TESTING...</span>
                ) : diagnosticState === "complete" ? (
                  <span style={{ color: "#10b981", fontWeight: "bold" }}>SYSTEM OK //</span>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>STANDBY</span>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
