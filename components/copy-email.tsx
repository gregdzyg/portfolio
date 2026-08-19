"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const EMAIL = "gregdzyg@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <button
      className="copy-email"
      type="button"
      onClick={copyEmail}
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      <span>{copied ? "Copied" : EMAIL}</span>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
    </button>
  );
}
