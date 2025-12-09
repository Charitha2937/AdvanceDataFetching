import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#eee", marginBottom: "20px" }}>
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link href="/dashboard" style={{ marginRight: "15px" }}>Dashboard</Link>
      <Link href="/news" style={{ marginRight: "15px" }}>News</Link>
    </nav>
  );
}
