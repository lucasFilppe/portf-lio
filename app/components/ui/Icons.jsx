export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.737 5.58 2.137 8.02L0 32l8.196-2.088A15.92 15.92 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.09c-2.513 0-4.967-.67-7.1-1.94l-.51-.3-4.86 1.237 1.298-4.737-.332-.488A13.02 13.02 0 0 1 2.91 16C2.91 8.76 8.76 2.91 16 2.91S29.09 8.76 29.09 16 23.24 29.09 16 29.09zm7.68-9.55c-.42-.21-2.49-1.23-2.88-1.37-.39-.15-.68-.21-.97.21-.29.42-1.12 1.37-1.38 1.65-.25.27-.5.31-.92.1-.42-.21-1.77-.65-3.37-2.07-1.25-1.12-2.09-2.5-2.34-2.92-.25-.42-.03-.65.18-.86.19-.19.42-.5.63-.75.21-.25.28-.42.42-.71.14-.29.07-.55-.04-.76-.1-.21-.97-2.34-1.33-3.2-.35-.84-.7-.72-.97-.73-.25-.01-.55-.01-.84-.01-.29 0-.76.11-1.16.55-.39.42-1.53 1.5-1.53 3.66s1.57 4.24 1.79 4.53c.21.29 3.09 4.72 7.49 6.62 1.05.45 1.87.72 2.51.92 1.06.34 2.03.29 2.79.18.85-.13 2.49-1.02 2.84-2.01.35-.99.35-1.84.25-2.01-.11-.18-.39-.29-.81-.5z" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ExternalIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/* Marca: o arco de portas e janelas coloniais */
export function ArchMark({ className = "h-8 w-7" }) {
  return (
    <svg viewBox="0 0 28 32" aria-hidden="true" className={className}>
      <path d="M2 30V14a12 12 0 0 1 24 0v16z" fill="#F4B400" />
      <path d="M8 30V15a6 6 0 0 1 12 0v15z" fill="#0F1B33" />
    </svg>
  );
}
