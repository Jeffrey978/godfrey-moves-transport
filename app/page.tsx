import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const routeStops = [
  "Igrita",
  "Rupokwu",
  "New Road",
  "Rumuokoro",
  "Rumigbo",
  "Rumukorta",
  "Wimpy",
  "OCC / St John's",
  "Agip",
  "RSU Gate",
];

const valuePillars = [
  {
    eyebrow: "01",
    title: "Fixed fares",
    copy:
      "Stop-to-stop pricing is displayed clearly, so riders know the fare before the bus moves.",
  },
  {
    eyebrow: "02",
    title: "Professional crews",
    copy:
      "Uniformed drivers and conductors, trip logs, ID cards, and daily accountability.",
  },
  {
    eyebrow: "03",
    title: "Real schedule",
    copy:
      "Daily service across the corridor from morning commute to night close, seven days a week.",
  },
];

const farePreview = [
  ["Rupokwu", "N500"],
  ["New Road", "N550"],
  ["Rumuokoro", "N600"],
  ["Rumigbo", "N700"],
  ["RSU Gate", "N1,100"],
];

const operatingSignals = [
  ["Seats", "33", "One clean, high-capacity passenger bus"],
  ["Window", "5 AM - 10 PM", "Daily operating rhythm"],
  ["Trips", "10", "Target round trips per day"],
  ["Base load", "70%", "23 seats filled per trip"],
];

const roadmap = [
  ["Phase 1", "Launch corridor", "Igrita to RSU Gate proof of concept."],
  ["Phase 2", "Intra-city growth", "Add Route 2 and Route 3 across Port Harcourt."],
  ["Phase 3", "Interstate launch", "Neighbouring states from the South-South hub."],
  ["Phase 4", "National network", "A trusted GMT route in major Nigerian cities."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="top" aria-label="Godfrey Moves Transport">
        <Image
          className="hero-media"
          src="/og.png"
          alt="Monochrome Godfrey Moves Transport bus and route map"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />

        <header className="nav">
          <a className="brand" href="#top" aria-label="Godfrey Moves Transport home">
            <span className="brand-mark">GM</span>
            <span>
              Godfrey Moves
              <small>Transport Ltd</small>
            </span>
          </a>

          <div className="nav-actions">
            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#route">Route</a>
              <a href="#standard">Standard</a>
              <a href="#growth">Growth</a>
              <a href="#partner">Partner</a>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <div className="hero-content">
          <p className="kicker">Port Harcourt passenger mobility</p>
          <h1>Godfrey Moves Transport</h1>
          <p className="hero-copy">
            A premium commuter bus company replacing the informal ride with fixed fares,
            trained crews, visible stops, and a service standard riders can trust.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#route">
              View pilot route
            </a>
            <a className="button ghost" href="mailto:godfreyunite@gmail.com">
              Partner with GMT
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-label="Operating highlights">
          <span>Launch route: Igrita to RSU Gate</span>
          <span>33 seats</span>
          <span>Fixed stop-to-stop fares</span>
          <span>Professional driver + conductor</span>
        </div>
      </section>

      <section className="route-section" id="route">
        <div className="section-heading">
          <p className="kicker dark">Pilot corridor</p>
          <h2>One route, built like a transport product.</h2>
          <p>
            GMT starts with a high-demand Port Harcourt corridor and treats it as an
            operating system: known stops, predictable pricing, disciplined crew behavior,
            and repeatable daily records.
          </p>
        </div>

        <div className="route-grid">
          <div className="route-map" aria-label="Igrita to RSU Gate route stops">
            <div className="map-topline">
              <span>Route 01</span>
              <strong>Igrita - RSU Gate</strong>
            </div>
            <ol className="stops">
              {routeStops.map((stop, index) => (
                <li key={stop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stop}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="fare-board">
            <div>
              <p className="kicker dark">Fare visibility</p>
              <h3>Price clarity before boarding.</h3>
              <p>
                The route uses a fixed fare table benchmarked against what commuters
                already pay, making the better experience easy to choose.
              </p>
            </div>
            <dl>
              {farePreview.map(([destination, fare]) => (
                <div key={destination}>
                  <dt>Igrita to {destination}</dt>
                  <dd>{fare}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="standard-section" id="standard">
        <div className="split-copy">
          <p className="kicker">The GMT standard</p>
          <h2>The commute gets dignity, not decoration.</h2>
          <p>
            The brand is black and white for a reason: no noise, no haggling, no hidden
            rules. Just a cleaner passenger experience with operational discipline behind it.
          </p>
        </div>

        <div className="pillar-grid">
          {valuePillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <span>{pillar.eyebrow}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operations-section">
        <div className="dashboard">
          <div className="dashboard-header">
            <p className="kicker dark">Operating model</p>
            <h2>Numbers that make the promise visible.</h2>
          </div>
          <div className="signal-grid">
            {operatingSignals.map(([label, value, note]) => (
              <article className="signal" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="manifesto">
          <p>
            Godfrey Moves enters a replacement market. Passengers already spend money
            moving through Port Harcourt every day. GMT wins by raising the standard:
            safer vehicles, visible pricing, cleaner conduct, and consistent frequency.
          </p>
        </div>
      </section>

      <section className="growth-section" id="growth">
        <div className="section-heading on-dark">
          <p className="kicker">Growth plan</p>
          <h2>From one corridor to a national network.</h2>
          <p>
            The pilot is not the destination. It is the proof of a disciplined model that
            can expand across Port Harcourt, then into interstate routes.
          </p>
        </div>

        <div className="roadmap">
          {roadmap.map(([phase, title, copy]) => (
            <article key={phase}>
              <span>{phase}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section" id="partner">
        <div>
          <p className="kicker dark">For investors and partners</p>
          <h2>Build the standard before the market demands it.</h2>
        </div>
        <div className="partner-copy">
          <p>
            GMT is raising support to expand beyond the pilot corridor, grow the fleet,
            and formalize a higher-quality commuter network for Rivers State.
          </p>
          <div className="contact-row">
            <a className="button primary dark-button" href="mailto:godfreyunite@gmail.com">
              godfreyunite@gmail.com
            </a>
            <a className="button line-button" href="tel:081380148084">
              0813 8014 8084
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">GM</span>
          <span>
            Godfrey Moves
            <small>Port Harcourt, Nigeria</small>
          </span>
        </a>
        <p>Moving the World on Wheels.</p>
      </footer>
    </main>
  );
}
