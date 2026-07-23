import ApplicationCard from "./ApplicationCard.jsx";
import Reveal from "../Reveal.jsx";
import "./Applications.css";
import multiFamilyImage from "../../assets/images/MULTI-FAMILY.jpg";
import commercialDrywallImage from "../../assets/images/COMMERCIAL DRYWALL.jpg";
import renovationImage from "../../assets/images/RENOVATION.jpg";
import lightGaugeImage from "../../assets/images/LIGHT-GAUGE.jpg";
import woodFramedImage from "../../assets/images/WOOD-FRAMED.jpg";

const APP_CARDS = [
  {
    accent: "green",
    number: "02",
    image: multiFamilyImage,
    imageAlt: "Multi-family framing application",
    title: <>MULTI-FAMILY<br />FRAMING</>,
    projectTypes:
      "Apartments, condos, townhomes with mixed wood and metal framing systems.",
    products: [
      "For Wood Studs: Coarse Thread Drywall Screws",
      "For Metal Studs: Self-Drilling Screws (20-gauge) or Fine Thread (25-gauge)",
      'For Structural: Structural Framing Screws with 1" Fit ratings',
    ],
    primaryCta: "PLAN MULTI-FAMILY PROJECT →",
    secondaryCta: "CONTACT FOR VOLUME PRICING →",
  },
  {
    accent: "blue",
    number: "01",
    image: commercialDrywallImage,
    imageAlt: "Commercial drywall installation application",
    title: <>COMMERCIAL DRYWALL<br />INSTALLATION</>,
    projectTypes:
      "Office build-outs, retail spaces, commercial interior partition systems.",
    products: [
      "Primary: Self-Drilling Drywall Screws (20-gauge steel studs and heavier)",
      "Alternative: Fine Thread Drywall Screws (25-gauge light-gauge steel studs)",
    ],
    primaryCta: "SHOP SELF-DRILLING SCREWS →",
    secondaryCta: "VIEW INSTALLATION GUIDE →",
  },
  {
    accent: "red",
    number: "03",
    image: renovationImage,
    imageAlt: "Renovation and remodel application",
    title: <>RENOVATION &amp;<br />REMODEL</>,
    projectTypes:
      "Existing building retrofit, tenant improvements, selective demolition and rebuild.",
    products: [
      "Fine Thread Drywall Screws (for existing metal stud systems, 25-gauge)",
      "Coarse Thread Screws (for wood framing additions and repairs)",
      "Structural Framing Screws (for blocking and reinforcement)",
    ],
    primaryCta: "SHOP VARIETY PACKS →",
    secondaryCta: "RENOVATION PROJECT GUIDE →",
  },
];

const WIDE_CARDS = [
  {
    wide: true,
    accent: "red",
    image: lightGaugeImage,
    imageAlt: "Light-gauge steel construction application",
    title: "LIGHT-GAUGE STEEL CONSTRUCTION",
    projectTypes:
      "Steel construction, medical offices, any project with engineered light-gauge steel systems.",
    products: [
      "Primary: Fine Thread Drywall Screws (for 25-gauge systems)",
      "Secondary: Self-Drilling Screws (for 20-gauge track and stud connections)",
    ],
    primaryCta: "SHOP FINE THREAD SCREWS →",
    secondaryCta: "LIGHT-GAUGE INSTALLATION TIPS →",
  },
  {
    wide: true,
    accent: "red",
    image: woodFramedImage,
    imageAlt: "Wood-framed residential application",
    title: "WOOD-FRAMED RESIDENTIAL",
    projectTypes:
      "Single-family homes, additions, wood-framed townhomes and multi-family.",
    products: [
      "For Drywall: Coarse Thread Drywall Screws (all drywall-to-stud applications)",
      "For Structural: Structural Framing Screws (blocking, rim boards, subfloor, ledgers)",
    ],
    primaryCta: "SHOP COARSE THREAD SCREWS →",
    secondaryCta: "RESIDENTIAL FRAMING GUIDE →",
  },
];

export default function Applications() {
  return (
    <section className="section section-apps" id="applications">
      {/* Single unified container — both card rows share the same width/boundaries */}
      <div className="apps-container">

        {/* Section heading */}
        <div className="app-head">
          <Reveal>
            <p className="app-eyebrow">
              <span className="app-tick"></span> APPLICATION GUIDE
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="app-title">
              CHOOSE THE RIGHT SCREW <span className="ghost-num">04</span>
              <br />
              <span className="red">FOR YOUR APPLICATION</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="app-sub">
              Professional contractors match fasteners to substrates for optimal
              performance and code compliance. Here's how to spec PROGRIP screws
              across common construction applications.
            </p>
          </Reveal>
        </div>

        {/* Row 1 — 3 equal standard cards */}
        <div className="app-grid app-grid--3">
          {APP_CARDS.map((card, i) => (
            <ApplicationCard key={card.imageAlt} {...card} delay={i * 0.15} />
          ))}
        </div>

        {/* Row 2 — 2 equal wide cards */}
        <div className="app-grid app-grid--2">
          {WIDE_CARDS.map((card, i) => (
            <ApplicationCard key={card.imageAlt} {...card} delay={i * 0.15} />
          ))}
        </div>

        {/* Footer details row */}
        <Reveal>
          <div className="card details-row">
            <h4>GRAPHICAL SYSTEM<br />DETAILS</h4>
            <p>
              And here's one more trick to see a few more application shortcuts from
              the friendly investing Guide bits into the industry: it will always
              take app-friendly to be shared. Add tags here to see "Thread among
              Service crack Targeting / center" from center to the site.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
