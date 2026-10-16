"use client";
import { useState } from "react";

type Props = { variant?: "valuation" | "contact"; source?: string };

export function LeadForm({ variant = "valuation", source = "web" }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    body.source = source;
    body.page = window.location.pathname;
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setState(r.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="form-ok" role="status">
        <strong>Děkuji, poptávku jsem přijal.</strong>
        <p>Ozvu se vám co nejdřív, obvykle ještě týž pracovní den.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="row">
        <label>Jméno
          <input name="name" required autoComplete="name" />
        </label>
        <label>Telefon
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <label>E-mail (nepovinný)
        <input name="email" type="email" autoComplete="email" />
      </label>
      {variant === "valuation" && (
        <>
          <div className="row">
            <label>Typ nemovitosti
              <select name="type" defaultValue="byt">
                <option value="byt">Byt</option>
                <option value="dum">Rodinný dům</option>
                <option value="pozemek">Pozemek</option>
                <option value="jine">Jiné</option>
              </select>
            </label>
            <label>Obec / ulice
              <input name="address" required placeholder="např. Prostějov, Vrahovice" />
            </label>
          </div>
          <label>Stručně o nemovitosti (nepovinné)
            <textarea name="message" rows={3} placeholder="Dispozice, velikost, stav, rekonstrukce…" />
          </label>
        </>
      )}
      {variant === "contact" && (
        <label>Zpráva
          <textarea name="message" rows={4} required />
        </label>
      )}
      {/* honeypot proti botům */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>Souhlasím se zpracováním osobních údajů za účelem vyřízení mé poptávky.</span>
      </label>
      <button className="btn" disabled={state === "sending"}>
        {state === "sending" ? "Odesílám…" : variant === "valuation" ? "Chci nezávazný odhad" : "Odeslat zprávu"}
      </button>
      {state === "error" && (
        <p className="err" role="alert">Odeslání se nepovedlo. Zkuste to prosím znovu.</p>
      )}
    </form>
  );
}
