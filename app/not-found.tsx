import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"><div className="wrap narrow">
      <h1>Stránka nenalezena</h1>
      <p><Link href="/" className="btn">Zpět na úvod</Link></p>
    </div></section>
  );
}
