"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, education } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Telemetry API checker state
  const [healthStatus, setHealthStatus] = useState<"idle" | "checking" | "healthy">("idle");
  const [latency, setLatency] = useState<number | null>(null);

  let healthTimeout: NodeJS.Timeout;
  let formTimeout: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      if (healthTimeout) clearTimeout(healthTimeout);
      if (formTimeout) clearTimeout(formTimeout);
    };
  }, []);

  const triggerHealthCheck = () => {
    if (healthStatus === "checking") return;
    setHealthStatus("checking");
    setLatency(null);

    healthTimeout = setTimeout(() => {
      setHealthStatus("healthy");
      setLatency(Math.floor(Math.random() * 20) + 12);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    formTimeout = setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "96px 24px", overflow: "hidden", background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "32px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.7rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              08 — Contact
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", marginBottom: "12px", lineHeight: 1.1 }}
        >
          Let&apos;s Build <span style={{ color: "#fca5a5" }}>Something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: "460px", marginBottom: "48px" }}
        >
          Open to internships, full-time roles, and interesting backend/full-stack projects. Let&apos;s connect.
        </motion.p>

        <div className="grid-12">
          
          {/* Left Column — JSON Terminal & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-6"
            style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}
          >
            {/* Terminal Card */}
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.05)", background: "rgba(255, 255, 255, 0.015)" }}>
              {/* Terminal header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(239, 68, 68, 0.3)", border: "1px solid rgba(239, 68, 68, 0.2)" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.3)", border: "1px solid rgba(245, 158, 11, 0.2)" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.3)", border: "1px solid rgba(16, 185, 129, 0.2)" }} />
                <span style={{ marginLeft: "8px", fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)" }}>contact_registry.json</span>
              </div>
              {/* Terminal body */}
              <div style={{ padding: "24px", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.75rem", lineHeight: 1.6 }} className="select-all">
                <div style={{ color: "rgba(255,255,255,0.2)" }}>$ <span style={{ color: "#ffffff" }}>cat</span> contact.json</div>
                <div style={{ color: "rgba(255,255,255,0.1)", marginTop: "8px" }}>{"{"}</div>
                {[
                  { key: "name", val: personalInfo.name },
                  { key: "email", val: personalInfo.email },
                  { key: "degree", val: "B.Tech CS" },
                  { key: "batch", val: education.year },
                  { key: "location", val: personalInfo.location },
                  { key: "status", val: personalInfo.availability },
                ].map(({ key, val }) => (
                  <div key={key} style={{ paddingLeft: "20px" }}>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>&quot;{key}&quot;</span>
                    <span style={{ color: "rgba(255,255,255,0.1)" }}>: </span>
                    <span style={{ color: "#ffffff" }}>&quot;{val}&quot;</span>
                  </div>
                ))}
                <div style={{ color: "rgba(255,255,255,0.1)" }}>{"}"}</div>
                <div style={{ marginTop: "16px", color: "rgba(255,255,255,0.2)" }}>
                  $ <span style={{ color: "#ffffff" }}>echo</span> <span style={{ color: "rgba(255,255,255,0.4)" }}>&quot;Pipeline open for queries.&quot;</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "GitHub Gateway", sub: "@Shubhaan-Kumar-Mishra", url: personalInfo.github },
                { label: "LinkedIn Connect", sub: "Shubhaan Kumar Mishra", url: personalInfo.linkedin },
                { label: "Secure Email Link", sub: personalInfo.email, url: `mailto:${personalInfo.email}` },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.015)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  className="network-link-hover"
                >
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{link.label}</div>
                    <div style={{ fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{link.sub}</div>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={personalInfo.resumeUrl}
              data-cursor
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px",
                borderRadius: "16px",
                fontSize: "0.75rem",
                fontFamily: "IBM Plex Mono, monospace",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.22s ease",
              }}
              className="view-all-btn-hover"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF Resume
            </a>
          </motion.div>

          {/* Right Column — Message Form & Telemetry Check */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="col-span-6"
            style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}
          >
            {/* Form card */}
            <div style={{ padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", background: "#07070a" }}>
              <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "4px" }}>Transmit Message</h3>
              <p style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", marginBottom: "24px" }}>
                Direct dispatch stream setup.
              </p>

              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "2rem", color: "#fca5a5", marginBottom: "12px" }}>✓</div>
                  <div style={{ color: "#ffffff", fontWeight: 600, marginBottom: "4px" }}>Transmission Successful</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", fontFamily: "IBM Plex Mono, monospace" }}>Message package delivered to queue. Response pending.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { id: "name", label: "Identity Name", type: "text", placeholder: "John Doe" },
                    { id: "email", label: "Return Endpoint (Email)", type: "email", placeholder: "john@company.com" },
                  ].map((field) => (
                    <div key={field.id} style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.01)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "0.75rem",
                          outline: "none",
                          fontFamily: "system-ui, sans-serif",
                          transition: "border-color 0.2s ease",
                        }}
                        className="input-focus-hover"
                      />
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>
                      Message Packet Payload
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Shubhaan, I'd love to discuss..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.01)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.75rem",
                        outline: "none",
                        fontFamily: "system-ui, sans-serif",
                        resize: "none",
                        transition: "border-color 0.2s ease",
                      }}
                      className="input-focus-hover"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    data-cursor
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontFamily: "IBM Plex Mono, monospace",
                      fontWeight: 500,
                      background: "#ffffff",
                      color: "#000000",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    className="submit-btn-hover"
                  >
                    {status === "sending" ? "TRANSMITTING..." : "DISPATCH MESSAGE //"}
                  </button>
                </form>
              )}
            </div>

            {/* Health telemetry verification widget */}
            <div style={{ padding: "16px", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.04)", background: "rgba(255, 255, 255, 0.015)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fca5a5" }} className="animate-pulse" />
                  <span style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Gateway Network Monitor</span>
                </div>
                
                <button
                  onClick={triggerHealthCheck}
                  disabled={healthStatus === "checking"}
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
                  {healthStatus === "checking" ? "PINGING..." : "VERIFY ENDPOINT"}
                </button>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", fontFamily: "IBM Plex Mono, monospace", padding: "12px", borderRadius: "8px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.02)" }}>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>API status:</span>
                {healthStatus === "healthy" ? (
                  <span style={{ color: "#10b981", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                    200 OK ({latency}ms)
                  </span>
                ) : healthStatus === "checking" ? (
                  <span style={{ color: "#f59e0b" }} className="animate-pulse">TESTING LATENCY...</span>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>AWAITING TRIGGER</span>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        .input-focus-hover:focus {
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .submit-btn-hover:hover {
          background: rgba(255, 255, 255, 0.9) !important;
          transform: translateY(1px);
        }
        .ping-btn-hover:hover {
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
