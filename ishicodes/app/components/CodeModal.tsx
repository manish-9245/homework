"use client";
import { useEffect } from "react";

export default function CodeModal({
  open,
  onClose,
  content,
  lang,
  title,
}: {
  open: boolean;
  onClose: () => void;
  content: string;
  lang: "c" | "python";
  title?: string;
}) {
  useEffect(() => {
    const tryHighlight = () => {
      const Prism = (window as any).Prism;
      if (Prism && Prism.highlightElement) {
        const el = document.getElementById("code-block");
        if (el) Prism.highlightElement(el);
      }
    };

    // Delay a tick to allow script to load
    const t = setTimeout(tryHighlight, 50);
    return () => clearTimeout(t);
  }, [content, lang, open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,6,23,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 60,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: 980,
          maxHeight: "85vh",
          overflow: "auto",
          background: "white",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <div style={{ fontWeight: 700 }}>{title || "Solution"}</div>
          <button
            onClick={onClose}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: 6,
            }}
          >
            Close
          </button>
        </div>
        <pre
          className={`language-${lang === "python" ? "python" : "c"}`}
          style={{ margin: 0, borderRadius: 8 }}
        >
          <code
            id="code-block"
            className={`language-${lang === "python" ? "python" : "c"}`}
            style={{ display: "block", padding: 12 }}
          >
            {content}
          </code>
        </pre>
      </div>
    </div>
  );
}
