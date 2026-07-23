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
      'For Structural: Structural Framing Screws (#9 × 3" typical)',
    ],
    whyMatters:
      'Mixed-material projects require reliable fasteners across all substrates without switching suppliers or dealing with inconsistent quality. Stocking PROGRIP across product types means consistent performance, simplified ordering, and one supplier relationship for the entire project. Eliminates the "good for wood, bad for metal" problem with generic fasteners.',
    proTip:
      "Order by building section to avoid mixing screws on the jobsite. Label material staging areas with application-specific fastener types. Color-coded labels (green for wood, blue for metal) reduce installation errors on mixed-framing projects.",
    typicalQuantities:
      "40-60 units: 100,000–150,000 drywall screws plus 10,000–20,000 structural screws",
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
    whyMatters:
      "Eliminates callbacks from stripped fasteners on high-square-footage projects. Self-drilling point saves 30–40% installation time vs pre-drilling. Consistent performance means predictable labor costs and on-schedule completion. Wrong thread type causes stripped screws in metal studs, resulting in rework and schedule delays.",
    proTip:
      'Use 1-1/4" length for standard 1/2" drywall to 20-gauge studs. Bump to 1-5/8" for 5/8" fire-rated board. Always verify stud gauge before ordering; mixing fine thread and self-drilling products on the same project causes inventory confusion.',
    typicalQuantities:
      "10,000–15,000 screws per 1,000 sq ft depending on stud spacing and code requirements",
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
      "Fine Thread Drywall Screws (for existing metal stud systems, often 25-gauge in older buildings)",
      "Coarse Thread Screws (for wood framing additions and repairs)",
      "Structural Framing Screws (for blocking and reinforcement)",
    ],
    whyMatters:
      "Renovation work means unknown or mixed framing conditions behind existing finishes. You can't reliably predict what substrate you'll encounter until demo is complete. PROGRIP's consistent performance eliminates surprises across all materials. When you're not sure what's behind the wall, you need fasteners you can trust in any substrate without callbacks.",
    proTip:
      "Keep a variety pack in the truck: 2,000 fine thread, 2,000 coarse thread, 500 structural. Better to have three types on hand than make a supply run mid-day when you discover mixed framing. Most renovation delays come from material trips, not installation time.",
    typicalQuantities:
      "Varies widely by project; 5,000–10,000 screws typical for commercial tenant improvement",
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
      "Retail storefronts, medical offices, any project with engineered light-gauge steel systems.",
    products: [
      "Primary: Fine Thread Drywall Screws (for 25-gauge systems)",
      "Secondary: Self-Drilling Screws (for 20-gauge track and stud connections)",
    ],
    whyMatters:
      "Light-gauge steel systems are extremely unforgiving. Over-torque by even small amounts and you strip out the thin metal. Under-torque and you get movement, cracks, and fastener pop. PROGRIP's precision thread design and consistent hardness (HRC 52–56) provide the narrow torque window these engineered systems require. Generic screws with batch variation cause constant stripping.",
    proTip:
      "Set drill clutch between 15–18 for optimal depth control on 25-gauge systems. Replace Phillips bits every 1,000 screws to maintain consistent drive performance. Worn bits increase cam-out frequency and damage screw heads. Test clutch settings on scrap material before production driving.",
    typicalQuantities:
      "12–15 screws per sheet, 8,000–12,000 per 1,000 sq ft depending on system",
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

        {/* Brand guide note (Figma: 1440×158) */}
        <Reveal>
          <div className="details-row">
            <h4>GRAPHICAL SYSTEM<br />DETAILS</h4>
            <p>
              And lastly we would like to see a few more graphical elements from the
              ProGrip branding Guide into this website design. Specifically we would
              like to see Thread texture, Reticle mark Targeting / action icon,
              Split panel.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
