"use client";

import { track } from "@vercel/analytics";

// Link comum que também registra um evento de clique no Vercel Analytics.
export default function TrackedLink({ event, onClick, children, ...props }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        try {
          if (event) track(event);
        } catch {}
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
