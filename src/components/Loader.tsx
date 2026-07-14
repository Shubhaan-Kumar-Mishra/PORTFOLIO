"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_SEQUENCE = [
  "Initializing kernel modules...",
  "Loading developer profile...",
  "Mounting project repositories...",
  "Authenticating engineer credentials...",
  "Connecting neural interface...",
  "Launching portfolio OS v2.0.26...",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId1: NodeJS.Timeout;
    let timeoutId2: NodeJS.Timeout;

    const stepInterval = setInterval(() => {
      setStep(s => {
        if (s < BOOT_SEQUENCE.length - 1) return s + 1;
        clearInterval(stepInterval);
        return s;
      });
    }, 380);

    const progInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progInterval);
          timeoutId1 = setTimeout(() => {
            setVisible(false);
            timeoutId2 = setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + 2.2;
      });
    }, 50);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progInterval);
      if (timeoutId1) clearTimeout(timeoutId1);
      if (timeoutId2) clearTimeout(timeoutId2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
          style={{ background: "#050505" }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-lines opacity-40" />

          {/* Glowing orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10 w-full max-w-lg px-8 flex flex-col items-center gap-10">
            {/* Logo / name */}
            <div className="text-center">
              <p className="text-xs font-mono text-blue-400/60 tracking-[0.3em] uppercase mb-3">
                Portfolio OS v2.0.26
              </p>
              <h1
                className="text-3xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.4))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SKM.dev
              </h1>
            </div>

            {/* Terminal log */}
            <div
              className="w-full rounded-xl p-5 font-mono text-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/20">terminal — bash</span>
              </div>

              <div className="space-y-1.5">
                {BOOT_SEQUENCE.slice(0, step + 1).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-400">›</span>
                    <span className={i === step ? "text-white" : "text-white/40"}>
                      {line}
                    </span>
                    {i === step && <span className="typewriter-cursor" />}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-3">
              <div
                className="w-full h-px rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full loader-bar"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-white/30">Loading system...</span>
                <span className="text-xs font-mono text-blue-400">
                  {Math.min(100, Math.round(progress))}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
