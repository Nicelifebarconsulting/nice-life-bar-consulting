import React, { useState } from "react";

const FRAUNCES = "'Fraunces', Georgia, serif";
const INTER = "'Inter', -apple-system, sans-serif";
const MONO = "'IBM Plex Mono', 'Courier New', monospace";

const COLORS = {
  bg: "#FAFAF8",
  ink: "#161513",
  inkSoft: "#4A4742",
  brass: "#8A6F4E",
  sage: "#5B6B5E",
  stone: "#E8E3D9",
  stoneDark: "#D8D2C3",
  white: "#FFFFFF",
};

function Logo({ size = 1 }) {
  return (
    <img
      src="/logo.jpeg"
      alt="Nice Life Bar Consulting"
      style={{
        width: 320 * size,
        maxWidth: "100%",
        height: "auto",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}

const SECTIONS_NAV = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "brief", label: "Start a Brief" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${COLORS.stoneDark}`,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: 170 }}>
          <Logo size={1} />
        </div>
        <nav style={{ display: "none" }} className="nl-nav-desktop">
          {SECTIONS_NAV.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                background: "none",
                border: "none",
                fontFamily: INTER,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.inkSoft,
                cursor: "pointer",
                padding: "8px 14px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.inkSoft)}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("brief")}
            style={{
              fontFamily: INTER,
              fontSize: 13.5,
              fontWeight: 600,
              color: COLORS.white,
              background: COLORS.ink,
              border: "none",
              borderRadius: 3,
              padding: "10px 18px",
              cursor: "pointer",
              marginLeft: 8,
            }}
          >
            Request a consult
          </button>
        </nav>
        <button
          className="nl-nav-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: `1px solid ${COLORS.stoneDark}`,
            borderRadius: 4,
            width: 38,
            height: 38,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 16 }}>
            <div style={{ height: 1.5, background: COLORS.ink, marginBottom: 4 }} />
            <div style={{ height: 1.5, background: COLORS.ink, marginBottom: 4 }} />
            <div style={{ height: 1.5, background: COLORS.ink }} />
          </div>
        </button>
      </div>
      {open && (
        <div
          style={{
            borderTop: `1px solid ${COLORS.stoneDark}`,
            padding: "12px 24px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {SECTIONS_NAV.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                fontFamily: INTER,
                fontSize: 15,
                color: COLORS.ink,
                padding: "10px 4px",
                cursor: "pointer",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
      <style>{`
        @media (min-width: 860px) {
          .nl-nav-desktop { display: flex !important; align-items: center; gap: 4px; }
          .nl-nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function Hero({ onStart }) {
  return (
    <section
      style={{
        maxWidth: 1140,
        margin: "0 auto",
        padding: "84px 24px 64px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 40,
      }}
    >
      <div>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12.5,
            letterSpacing: "0.14em",
            color: COLORS.sage,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Bar program &amp; cocktail menu consulting
        </p>
        <h1
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 500,
            fontSize: "clamp(34px, 5.4vw, 60px)",
            lineHeight: 1.06,
            color: COLORS.ink,
            letterSpacing: "-0.01em",
            maxWidth: 800,
            margin: 0,
          }}
        >
          A sharper bar program, built on what your venue actually needs.
        </h1>
        <p
          style={{
            fontFamily: INTER,
            fontSize: 17.5,
            lineHeight: 1.6,
            color: COLORS.inkSoft,
            maxWidth: 560,
            marginTop: 22,
          }}
        >
          We audit bar operations and design cocktail menus for restaurants,
          hotels, and venues that want a program backed by margin, not just
          taste. One short brief tells us what your bar needs — we take it
          from there.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
          <button
            onClick={onStart}
            style={{
              fontFamily: INTER,
              fontWeight: 600,
              fontSize: 15,
              color: COLORS.white,
              background: COLORS.ink,
              border: "none",
              borderRadius: 3,
              padding: "14px 26px",
              cursor: "pointer",
            }}
          >
            Start your brief →
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: INTER,
              fontWeight: 600,
              fontSize: 15,
              color: COLORS.ink,
              border: `1px solid ${COLORS.stoneDark}`,
              borderRadius: 3,
              padding: "14px 26px",
              textDecoration: "none",
            }}
          >
            See what we do
          </a>
        </div>
      </div>

      <div
        style={{
          background: COLORS.white,
          border: `1px solid ${COLORS.stoneDark}`,
          borderRadius: 6,
          padding: "56px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Logo size={1.05} />
      </div>
    </section>
  );
}

const SERVICES = [
  {
    label: "Audit",
    title: "Bar Program Audit",
    body:
      "A full read on your current bar: pour costs, inventory turnover, speed of service, and where the program is leaking margin or guest experience.",
  },
  {
    label: "Menu",
    title: "Cocktail Menu Development",
    body:
      "Menus built around your guest profile, kitchen capacity, and target cost percentage — not a generic seasonal list. Recipes, build sheets, and pricing included.",
  },
  {
    label: "Ongoing",
    title: "Standing Consulting",
    body:
      "Monthly check-ins, staff training support, and menu refreshes as your venue's volume and seasons change. For teams that want a long-term sounding board.",
  },
];

function Services() {
  return (
    <section id="services" style={{ background: COLORS.stone, padding: "72px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12.5,
            letterSpacing: "0.14em",
            color: COLORS.sage,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          What we do
        </p>
        <h2
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 500,
            fontSize: "clamp(26px, 3.4vw, 36px)",
            color: COLORS.ink,
            margin: "0 0 44px",
            maxWidth: 620,
          }}
        >
          Three ways to work with us
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: COLORS.stoneDark,
            border: `1px solid ${COLORS.stoneDark}`,
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: COLORS.bg, padding: "32px 28px" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  color: COLORS.brass,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
              <h3
                style={{
                  fontFamily: FRAUNCES,
                  fontWeight: 500,
                  fontSize: 22,
                  color: COLORS.ink,
                  margin: "12px 0 10px",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: INTER, fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "You submit a brief", body: "Answer a short, structured questionnaire about your venue and goals." },
  { n: "02", title: "We scope the work", body: "We review your answers and reply with a fit assessment and proposed scope." },
  { n: "03", title: "We build the program", body: "Audit, menu, or both — delivered with the documentation your team can run with." },
];

function Process() {
  return (
    <section id="process" style={{ padding: "72px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12.5,
            letterSpacing: "0.14em",
            color: COLORS.sage,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 500,
            fontSize: "clamp(26px, 3.4vw, 36px)",
            color: COLORS.ink,
            margin: "0 0 44px",
          }}
        >
          From brief to bar, in three steps
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
          {STEPS.map((s) => (
            <div key={s.n}>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 13,
                  color: COLORS.brass,
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontFamily: FRAUNCES, fontWeight: 500, fontSize: 19, color: COLORS.ink, margin: "0 0 8px" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: INTER, fontSize: 14.5, lineHeight: 1.6, color: COLORS.inkSoft, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Brief / Questionnaire ---------- */

const FIELD_BASE = {
  fontFamily: INTER,
  fontSize: 15,
  color: COLORS.ink,
  background: COLORS.white,
  border: `1px solid ${COLORS.stoneDark}`,
  borderRadius: 3,
  padding: "11px 13px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
};

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          display: "block",
          fontFamily: MONO,
          fontSize: 11.5,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: COLORS.sage,
          marginBottom: 7,
        }}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p style={{ fontFamily: INTER, fontSize: 12.5, color: "#8C8779", margin: "6px 0 0" }}>{hint}</p>
      )}
    </div>
  );
}

function TextInput(props) {
  return <input {...props} style={{ ...FIELD_BASE, ...(props.style || {}) }} />;
}
function TextArea(props) {
  return <textarea {...props} rows={props.rows || 4} style={{ ...FIELD_BASE, resize: "vertical", ...(props.style || {}) }} />;
}
function Select({ value, onChange, options, placeholder }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{ ...FIELD_BASE, appearance: "none", cursor: "pointer" }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function CheckboxGroup({ options, selected, onToggle }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <button
            type="button"
            key={o}
            onClick={() => onToggle(o)}
            style={{
              fontFamily: INTER,
              fontSize: 13.5,
              padding: "9px 14px",
              borderRadius: 20,
              border: `1px solid ${active ? COLORS.ink : COLORS.stoneDark}`,
              background: active ? COLORS.ink : COLORS.white,
              color: active ? COLORS.white : COLORS.inkSoft,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function SectionLabel({ n, title }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
      <span style={{ fontFamily: MONO, fontSize: 13, color: COLORS.brass, letterSpacing: "0.06em" }}>{n}</span>
      <h3 style={{ fontFamily: FRAUNCES, fontWeight: 500, fontSize: 21, color: COLORS.ink, margin: 0 }}>{title}</h3>
      <div style={{ flex: 1, height: 1, background: COLORS.stoneDark }} />
    </div>
  );
}

const VENUE_TYPES = ["Restaurant", "Hotel bar", "Standalone bar", "Nightclub / lounge", "Event venue", "Other"];
const SERVICE_NEEDS = ["Bar program audit", "Cocktail menu design", "Staff training", "Cost & pricing review", "Full bar buildout"];
const VOLUME = ["Under 50 covers/night", "50–150 covers/night", "150–400 covers/night", "400+ covers/night"];
const BUDGET = ["Under $2,000", "$2,000–$5,000", "$5,000–$15,000", "$15,000+", "Not sure yet"];
const TIMELINE = ["ASAP / urgent", "Within 1 month", "1–3 months", "Just exploring"];

function Brief() {
  const EMAIL = "nicelifeconsulting@gmail.com";
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    venueType: "",
    location: "",
    needs: [],
    volume: "",
    currentBar: "",
    goals: "",
    budget: "",
    timeline: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleNeed = (val) =>
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(val) ? f.needs.filter((n) => n !== val) : [...f.needs, val],
    }));

  const buildBody = () => {
    return [
      `New consulting brief from ${form.businessName || "—"}`,
      "",
      "VENUE",
      `Business name: ${form.businessName || "—"}`,
      `Contact name: ${form.contactName || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Venue type: ${form.venueType || "—"}`,
      `Location: ${form.location || "—"}`,
      "",
      "SCOPE",
      `Services needed: ${form.needs.length ? form.needs.join(", ") : "—"}`,
      `Guest volume: ${form.volume || "—"}`,
      "",
      "CURRENT SETUP & GOALS",
      `Current bar setup: ${form.currentBar || "—"}`,
      `Goals for this project: ${form.goals || "—"}`,
      "",
      "BUDGET & TIMELINE",
      `Budget range: ${form.budget || "—"}`,
      `Timeline: ${form.timeline || "—"}`,
    ].join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.businessName || !form.contactName || !form.email) {
      setError("Please fill in business name, contact name, and email before sending.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Consulting brief — ${form.businessName}`);
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="brief" style={{ background: COLORS.stone, padding: "80px 24px 96px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12.5,
            letterSpacing: "0.14em",
            color: COLORS.sage,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Request a consult
        </p>
        <h2
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 500,
            fontSize: "clamp(26px, 3.4vw, 34px)",
            color: COLORS.ink,
            margin: "0 0 14px",
          }}
        >
          Tell us about your bar
        </h2>
        <p style={{ fontFamily: INTER, fontSize: 15.5, lineHeight: 1.6, color: COLORS.inkSoft, margin: "0 0 40px", maxWidth: 560 }}>
          This brief gives us what we need to scope your project accurately. It opens
          your email client with everything pre-filled, addressed to our team —
          just hit send.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: COLORS.bg,
            border: `1px solid ${COLORS.stoneDark}`,
            borderRadius: 6,
            padding: "40px 28px",
          }}
        >
          <SectionLabel n="01" title="Venue" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="nl-grid-2">
            <Field label="Business name">
              <TextInput value={form.businessName} onChange={set("businessName")} placeholder="The Velvet Room" />
            </Field>
            <Field label="Your name">
              <TextInput value={form.contactName} onChange={set("contactName")} placeholder="Jane Doe" />
            </Field>
            <Field label="Email">
              <TextInput type="email" value={form.email} onChange={set("email")} placeholder="you@venue.com" />
            </Field>
            <Field label="Phone (optional)">
              <TextInput value={form.phone} onChange={set("phone")} placeholder="(514) 000-0000" />
            </Field>
            <Field label="Venue type">
              <Select value={form.venueType} onChange={set("venueType")} options={VENUE_TYPES} placeholder="Select venue type" />
            </Field>
            <Field label="City / location">
              <TextInput value={form.location} onChange={set("location")} placeholder="Montreal, QC" />
            </Field>
          </div>

          <div style={{ height: 12 }} />
          <SectionLabel n="02" title="Scope" />
          <Field label="What do you need help with?" hint="Select all that apply.">
            <CheckboxGroup options={SERVICE_NEEDS} selected={form.needs} onToggle={toggleNeed} />
          </Field>
          <Field label="Typical guest volume">
            <Select value={form.volume} onChange={set("volume")} options={VOLUME} placeholder="Select volume" />
          </Field>

          <div style={{ height: 12 }} />
          <SectionLabel n="03" title="Current setup & goals" />
          <Field label="Describe your current bar setup" hint="Existing menu, equipment, team size — whatever's relevant.">
            <TextArea value={form.currentBar} onChange={set("currentBar")} placeholder="E.g. 4-person bar team, 18-item cocktail menu last updated 2 years ago, POS is Toast..." />
          </Field>
          <Field label="What does success look like for this project?">
            <TextArea value={form.goals} onChange={set("goals")} placeholder="E.g. cut pour cost by 15%, launch a new seasonal menu by fall, train staff on consistent builds..." />
          </Field>

          <div style={{ height: 12 }} />
          <SectionLabel n="04" title="Budget & timeline" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="nl-grid-2">
            <Field label="Budget range">
              <Select value={form.budget} onChange={set("budget")} options={BUDGET} placeholder="Select budget" />
            </Field>
            <Field label="Timeline">
              <Select value={form.timeline} onChange={set("timeline")} options={TIMELINE} placeholder="Select timeline" />
            </Field>
          </div>

          {error && (
            <p style={{ fontFamily: INTER, fontSize: 13.5, color: "#A4453A", margin: "4px 0 16px" }}>{error}</p>
          )}

          <button
            type="submit"
            style={{
              fontFamily: INTER,
              fontWeight: 600,
              fontSize: 15,
              color: COLORS.white,
              background: COLORS.ink,
              border: "none",
              borderRadius: 3,
              padding: "14px 28px",
              cursor: "pointer",
              width: "100%",
              marginTop: 8,
            }}
          >
            Send brief to Nice Life →
          </button>
          {sent && (
            <p style={{ fontFamily: INTER, fontSize: 13.5, color: COLORS.sage, marginTop: 14, textAlign: "center" }}>
              Your email client should now be open with your brief ready to send to {EMAIL}.
            </p>
          )}
          <p style={{ fontFamily: INTER, fontSize: 12.5, color: "#8C8779", marginTop: 16, textAlign: "center" }}>
            Sends to {EMAIL}
          </p>
        </form>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .nl-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 24px", borderTop: `1px solid ${COLORS.stoneDark}` }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: 150 }}>
          <Logo size={1} />
        </div>
        <p style={{ fontFamily: INTER, fontSize: 13, color: "#8C8779", margin: 0 }}>
          nicelifeconsulting@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const scrollToBrief = () => document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input:focus, textarea:focus, select:focus {
          border-color: #161513 !important;
          box-shadow: 0 0 0 1px #161513;
        }
      `}</style>
      <Nav />
      <Hero onStart={scrollToBrief} />
      <Services />
      <Process />
      <Brief />
      <Footer />
    </div>
  );
}
