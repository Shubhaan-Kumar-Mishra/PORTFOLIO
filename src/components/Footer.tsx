"use client";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const TECH_STACK = [
  { name: "Next.js",       url: "https://nextjs.org" },
  { name: "Tailwind CSS",  url: "https://tailwindcss.com" },
  { name: "Framer Motion", url: "https://framer.com/motion" },
  { name: "TypeScript",    url: "https://typescriptlang.org" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 0, background: "#020204" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 64px 24px" }}>
        
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
          
          {/* Logo + tagline */}
          <div style={{ width: "100%", maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: "bold", color: "#ffffff" }}>
                S
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Shubhaan Kumar Mishra</div>
                <div style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)" }}>Backend Engineer · 2023–2027</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", lineHeight: 1.6, marginBottom: "16px" }}>
              Building scalable backend systems and full-stack applications. Open to internships and full-time roles.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} className="animate-ping" />
              </span>
              <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.35)" }}>Available for Hire</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Navigate
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  data-cursor
                  style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s ease" }}
                  className="footer-link-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Built with */}
          <div>
            <div style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Built With
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TECH_STACK.map((t) => (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s ease", display: "flex", alignItems: "center", gap: "8px" }}
                  className="footer-link-hover"
                >
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                  {t.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontSize: "0.68rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "GitHub",   url: "https://github.com/Shubhaan-Kumar-Mishra" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/shubhaan-kumar-mishra-243350293/" },
                { label: "Email",    url: "mailto:MishrashubhaanKumar@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor
                  style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s ease", display: "flex", alignItems: "center", gap: "8px" }}
                  className="footer-link-hover"
                >
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)", marginBottom: "24px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.62rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.2)" }}>
            © {year} Shubhaan Kumar Mishra · All rights reserved
          </span>
          <span style={{ fontSize: "0.55rem", fontFamily: "IBM Plex Mono, monospace", color: "rgba(255,255,255,0.15)" }}>
            Designed &amp; Built with ♥ using Next.js · Tailwind CSS · Framer Motion
          </span>
        </div>
      </div>
      <style>{`
        .footer-link-hover:hover {
          color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
}
