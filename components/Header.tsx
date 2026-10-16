import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" className="logo" aria-label={`${site.name} – úvod`}>
          <span className="logo-name">{site.name}</span>
          <span className="logo-sub">{site.role} · {site.agency}</span>
        </Link>
        <nav aria-label="Hlavní navigace" className="nav">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/odhad-nemovitosti" className="btn btn-sm">Odhad zdarma</Link>
      </div>
    </header>
  );
}
