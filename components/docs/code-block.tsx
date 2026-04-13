"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

/* ── Tokenizer ─────────────────────────────────────────────────── */

type TT = "comment" | "string" | "tag" | "keyword" | "number" | "prop" | "plain";
interface Token { type: TT; value: string }

const KW = new Set([
  "import","export","default","from","const","let","var","type","interface",
  "function","return","as","of","in","if","else","true","false","null",
  "undefined","new","class","extends","async","await","for","while","switch",
  "case","break","typeof","void","throw","try","catch","finally","this",
  "static","readonly","React",
]);

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = code.length;

  while (i < n) {
    // single-line comment
    if (code[i] === "/" && code[i + 1] === "/") {
      let j = i;
      while (j < n && code[j] !== "\n") j++;
      tokens.push({ type: "comment", value: code.slice(i, j) });
      i = j; continue;
    }
    // strings: " ' `
    if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
      const q = code[i]; let j = i + 1;
      while (j < n && code[j] !== q) { if (code[j] === "\\") j++; j++; }
      tokens.push({ type: "string", value: code.slice(i, j + 1) });
      i = j + 1; continue;
    }
    // JSX closing tag </Foo or <Foo (capital)
    if (code[i] === "<" && i + 1 < n) {
      const c1 = code[i + 1];
      if (c1 === "/" || /[A-Z]/.test(c1)) {
        const start = i;
        let j = c1 === "/" ? i + 2 : i + 1;
        while (j < n && /[a-zA-Z0-9_.]/.test(code[j])) j++;
        tokens.push({ type: "tag", value: code.slice(start, j) });
        i = j; continue;
      }
    }
    // identifiers / keywords
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i;
      while (j < n && /[a-zA-Z0-9_$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let k = j; while (k < n && code[k] === " ") k++;
      const isProp = code[k] === "=" || code[k] === "?";
      tokens.push({ type: KW.has(word) ? "keyword" : isProp ? "prop" : "plain", value: word });
      i = j; continue;
    }
    // numbers
    if (/[0-9]/.test(code[i])) {
      let j = i;
      while (j < n && /[0-9.]/.test(code[j])) j++;
      tokens.push({ type: "number", value: code.slice(i, j) });
      i = j; continue;
    }
    tokens.push({ type: "plain", value: code[i] });
    i++;
  }
  return tokens;
}

const TC: Record<TT, string> = {
  comment: "text-white/25 italic",
  string:  "text-arcade-positive",
  tag:     "text-arcade-brand",
  keyword: "text-[#c084fc]",
  number:  "text-[#fb923c]",
  prop:    "text-[#7dd3fc]",
  plain:   "text-white/70",
};

function Highlighted({ code }: { code: string }) {
  return <>{tokenize(code.trim()).map((t, i) => <span key={i} className={TC[t.type]}>{t.value}</span>)}</>;
}

/* ── Component ─────────────────────────────────────────────────── */

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "#020217" }}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-[#ff5f57]" />
          <div className="size-2.5 rounded-full bg-[#febc2e]" />
          <div className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">{language}</span>
        </div>
        <button onClick={copy} className="flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/80 transition-colors">
          {copied ? (
            <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#14ae5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-arcade-positive">Copied!</span></>
          ) : (
            <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/><rect x="1" y="3" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/></svg>Copy</>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-[12.5px] leading-6 font-mono">
        <code><Highlighted code={code} /></code>
      </pre>
    </div>
  );
}
