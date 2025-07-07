import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "2rem",
        padding: "1rem",
        backgroundColor: "#eee",
      }}
    >
      <Link href="/">SPOTLIGHT</Link>
      <Link href="/gallery">GALLERY</Link>
      <Link href="/favorites">FAVORITES</Link>
    </nav>
  );
}
