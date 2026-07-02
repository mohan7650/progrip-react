import ApplicationCard from "./ApplicationCard.jsx";
import "./Applications.css";

const APP_CARDS = [
  {
    photoClass: "photo-a",
    title: <>MULTI-FAMILY<br />FRAMING</>,
    projectTypes:
      "Apartments, condos, townhomes with mixed wood and metal framing systems.",
    products: [
      <>
        For Wood Studs: Coarse Thread Drywall Screws<br />
        For Metal Studs: Self-Drilling Screws (20-gauge) or Fine Thread (25-gauge)
      </>,
      <>For Structural: Structural Framing Screws with 1" Fit ratings</>,
    ],
    whyItMatters:
      'Mixed material projects require reliable fasteners across all substrates without switching brands, suppliers or dealing with inconsistent quality. Stocking PROGRIP across product types means consistent performance, simplified ordering, and one supplier relationship for the entire project. Eliminates the "good for wood, bad for metal" problem with generic fasteners.',
    proTip:
      "Order by building section to avoid mixing screws on the jobsite. Label material staging areas with application-specific fastener types. Color-coded labels (green for wood, blue for metal) reduce installation errors on mixed-material framing projects.",
    quantities:
      "60–80 units: 100,000–150,000 drywall screws plus 30,000–50,000 structural screws",
    primaryCta: "PLAN MULTI-FAMILY PROJECT →",
    secondaryCta: "CONTACT FOR VOLUME PRICING →",
  },
  {
    photoClass: "photo-b",
    title: <>COMMERCIAL DRYWALL<br />INSTALLATION</>,
    projectTypes:
      "Office build-outs, retail spaces, commercial interior partition systems.",
    products: [
      "Primary: Self-Drilling Drywall Screws (20-gauge steel studs and heavier)",
      "Alternative: Fine Thread Drywall Screws (25-gauge light-gauge steel studs)",
    ],
    whyItMatters:
      "Eliminates cam-outs from stripped fasteners on high-square-footage projects. Self-drilling point saves 25–30% installation time vs pre-drilling. Consistent performance means predictable labor costs and on-schedule completion. Strong thread type ensures stripped screws in metal studs, resulting in rework and schedule delays.",
    proTip:
      'Use 1-1/4" length for standard 1/2" drywall to 20-gauge studs. Bump to 1-5/8" for 5/8" fire-rated board. Always verify stud gauge before ordering, mixing fine thread and self-drilling products on the same project causes inventory confusion.',
    quantities:
      "10,000 sq ft office build-out: 25,000–30,000 screws per 1,000 sq ft depending on stud spacing and code requirements",
    primaryCta: "SHOP SELF-DRILLING SCREWS →",
    secondaryCta: "VIEW INSTALLATION GUIDE →",
  },
  {
    photoClass: "photo-c",
    title: <>RENOVATION &amp;<br />REMODEL</>,
    projectTypes:
      "Existing building retrofit, tenant improvements, selective demolition and rebuild.",
    products: [
      <>
        • Fine Thread Drywall Screws (for existing metal stud systems, often 25-gauge in older buildings)<br />
        • Coarse Thread Screws (for wood framing additions and repairs)<br />
        • Structural Framing Screws (for blocking and reinforcement)
      </>,
    ],
    whyItMatters:
      "Renovations meet unknown or mixed framing conditions behind existing finishes. You can't verify photographic what substrate you'll encounter until demo is complete. PROGRIP's consistent performance eliminates surprises across all fasteners. When you're not sure what's behind the wall, you need fasteners you can trust in any substrate without callbacks.",
    proTip:
      "Keep a variety pack in the truck: 2,000 fine thread, 2,000 coarse thread, 500 structural. Better to have three types on hand than make a supply run mid-day when you discover mixed framing. Most renovation delays come from material trips, not installation time.",
    quantities:
      "Varies widely by project: 5,000–15,000 screws typical for commercial tenant improvements",
    primaryCta: "SHOP VARIETY PACKS →",
    secondaryCta: "RENOVATION PROJECT GUIDE →",
  },
];

const WIDE_CARDS = [
  {
    wide: true,
    photoClass: "photo-d",
    title: "LIGHT-GAUGE STEEL CONSTRUCTION",
    projectTypes:
      "Steel construction, medical offices, any project with engineered light-gauge steel systems.",
    products: [
      <>
        Primary: Fine Thread Drywall Screws (for 25-gauge systems)<br />
        Secondary: Self-Drilling Screws (for 20-gauge track and stud connections)
      </>,
    ],
    whyItMatters:
      "Light-gauge steel systems are extremely unforgiving. Over torque by even small amounts and you strip out the thin metal. Under torque and you get movement, cracks, and fastener pop. PROGRIP's precision thread design and consistent hardness (HRC 52-58) provide the narrow torque window these engineered systems require. Generic screws with wide tolerance ranges cause constant stripping.",
    proTip:
      "Set drill clutch between 15–18 for optimal depth control on 25-gauge systems. Reduce Phillips bits every 3,000 screws to maintain consistent drive performance. Pitch bits increase cam-out frequency and damage screw heads. Test clutch settings on scrap material before production driving.",
    quantities:
      "25–75 screws per sheet; 8,000–12,000 per 1,000 sq ft depending on system",
    primaryCta: "SHOP FINE THREAD SCREWS →",
    secondaryCta: "LIGHT-GAUGE INSTALLATION TIPS →",
  },
  {
    wide: true,
    photoClass: "photo-e",
    title: "WOOD-FRAMED RESIDENTIAL",
    projectTypes:
      "Single-family homes, additions, wood-framed townhomes and multi-family.",
    products: [
      <>
        For Drywall: Coarse Thread Drywall Screws (all drywall-to-stud applications)<br />
        For Structural: Structural Framing Screws (blocking, rim boards, subfloor, ledgers)
      </>,
    ],
    whyItMatters:
      "Wood construction requires aggressive thread engagement and clean cutting action without splitting dimensional lumber. PROGRIP's coarse thread design 17 TPI prevents jacking and provides superior holding power in SPF, DF, engineered lumber, and wood composites. The thread choices designed for wood will spin in wood and fail to hold properly.",
    proTip:
      'For standard 2×4 framing with 1/2" drywall, 1-1/4" screws reach code minimum. Use 1-5/8" for ceiling applications to ensure adequate penetration accounting for potential insulation compression. On engineered lumber 6 joists, LVL), verify fastener acceptance in manufacturer\'s specs before structural applications.',
    quantities:
      "2,500 sq ft house: 8,000–10,000 drywall screws plus 1,000–2,000 structural screws",
    primaryCta: "SHOP COARSE THREAD SCREWS →",
    secondaryCta: "RESIDENTIAL FRAMING GUIDE →",
  },
];

export default function Applications() {
  return (
    <section className="section section-apps" id="applications">
      <div className="container">
        {/* Red angled banner heading */}
        <div className="app-head">
          <p className="eyebrow light">
            <span className="tick white"></span> APPLICATION GUIDE
          </p>
          <h2 className="section-title on-red">
            CHOOSE THE RIGHT SCREW<br />FOR YOUR APPLICATION
            <span className="ghost-num light">04</span>
          </h2>
          <p className="section-sub">
            Professional contractors match fasteners to substrates for optimal
            performance and code compliance. Here's how to spec PROGRIP screws
            across common construction applications.
          </p>
        </div>

        {/* Row of 3 application cards */}
        <div className="grid grid-3 app-grid">
          {APP_CARDS.map((card) => (
            <ApplicationCard key={card.photoClass} {...card} />
          ))}
        </div>

        {/* Row of 2 wide application cards */}
        <div className="grid grid-2 app-grid-wide">
          {WIDE_CARDS.map((card) => (
            <ApplicationCard key={card.photoClass} {...card} />
          ))}
        </div>

        {/* Details footnote row */}
        <div className="card details-row">
          <h4>GRAPHICAL SYSTEM<br />DETAILS</h4>
          <p>
            And here's one more trick to see a few more application shortcuts from
            the friendly investing Guide bits into the industry: it will always
            take app-friendly to be shared. Add tags here to see "Thread among
            Service crack Targeting / center" from center to the site.
          </p>
        </div>
      </div>
    </section>
  );
}
