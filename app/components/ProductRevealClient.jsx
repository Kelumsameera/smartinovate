"use client";

import dynamic from "next/dynamic";

// Disable SSR safely INSIDE client component
const ProductRevealSection = dynamic(
  () => import("./ProductRevealSection"),
  { ssr: false }
);

export default function ProductRevealClient() {
  return <ProductRevealSection />;
}
