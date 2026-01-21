"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#0070f3", color: "white" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/projects">Projects</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/services">Services</Link> |{" "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
