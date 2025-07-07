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
      <Link href="/">Spotlight</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
}
