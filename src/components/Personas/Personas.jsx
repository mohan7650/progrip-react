import PersonaCard from "./PersonaCard.jsx";
import "./Personas.css";
import installerImg from "../../assets/images/installer.jpg";
import distributorImg from "../../assets/images/distributor.jpg";
import contractorImg from "../../assets/images/contractor.jpg";

const PERSONAS = [
  {
    accent: "green",
    image: installerImg,
    imageAlt: "Installer using drill",
    eyebrow: "FOREMAN ON JOBSITE WITH DRILL/MATERIAL",
    index: "01",
    title: "THE INSTALLER",
    quote:
      "\u201cSwitched to PROGRIP after the third callback on a 40-unit multi-family project. Stripped screws were killing our schedule and burning labor hours on rework. Six months in, we\u2019ve had zero fastener failures across three buildings. Crews are faster, callbacks are down, and we\u2019re back on budget.\u201d",
    project: "200,000 sq ft multi-family complex, mixed wood and metal framing",
    name: "MIKE TORRES",
    role: "Framing Foreman",
    company: "Mountain States Construction, Denver, CO",
    mattersTitle: "GETTING CREWS HOME ON TIME WITH ZERO COMEBACKS",
    items: [
      "Eliminated rework from stripped fasteners",
      "Reduced installer frustration",
      "Predictable labor costs per square foot",
      "Faster installation means more projects per year",
    ],
    ctaLabel: "INSTALLER KIT",
    ctaType: "outline",
  },
  {
    accent: "blue",
    image: distributorImg,
    imageAlt: "Distributor checking inventory",
    eyebrow: "MATERIALS MANAGER WITH INVENTORY",
    index: "02",
    title: "THE DISTRIBUTOR",
    quote:
      "\u201cConsistent quality means I can order by the pallet without worrying about bad batches. We used to have the \u2018hot batch, cold batch\u2019 problem where one pallet would drive perfectly and the next would strip constantly. With PROGRIP, every order performs exactly like the last one. That predictability is worth more than shaving a few dollars per box.\u201d",
    project: "$45M annual volume across 15-20 active projects, centralized purchasing",
    name: "SARAH CHEN",
    role: "Materials Manager",
    company: "Apex Commercial Builders, Boston, MA",
    mattersTitle: "MATERIAL YOU CAN TRUST AT SCALE",
    items: [
      "Eliminated batch-to-batch quality variation",
      "Simplified inventory management",
      "Reduced emergency supply runs",
      "Better vendor relationship through consistency",
    ],
    ctaLabel: "OPEN ACCOUNT",
    ctaType: "outline",
  },
  {
    accent: "red",
    image: contractorImg,
    imageAlt: "Contractor reviewing plans",
    eyebrow: "GC REVIEWING PLANS ON SITE",
    index: "03",
    title: "THE CONTRACTOR",
    quote:
      "\u201cI include PROGRIP in specifications now because I know it won\u2019t cause delays or warranty callbacks. Fastener failures don\u2019t show up in my critical path analysis until they\u2019ve already cost me days. The submittal builder makes documentation easy for architects, and having technical data sheets on hand eliminates inspector questions. One less thing to worry about means I can focus on bigger project risks.\u201d",
    project:
      "Commercial and light-industrial GC, 12-person team, $15M annual revenue",
    name: "JAMES RODRIGUEZ",
    role: "Principal",
    company: "Rodriguez Construction Group, Phoenix, AZ",
    mattersTitle: "RISK ELIMINATION ON THE CRITICAL PATH",
    items: [
      "Reduced delays from material failures",
      "Simplified submittal process",
      "Better architect and inspector relationships",
      "Lower warranty risk on completed projects",
    ],
    ctaLabel: "BUILD SUBMITTAL",
    ctaType: "red",
  },
];

export default function Personas() {
  return (
    <section className="personas" id="personas">
      <div className="personas__frame">
        <span className="corner corner--tl"></span>
        <span className="corner corner--tr"></span>
        <span className="corner corner--bl"></span>
        <span className="corner corner--br"></span>

        <div className="personas__head">
          <div className="personas__kicker">
            <span></span>
            PERSONA TESTIMONIALS
          </div>

          <h2 className="personas__title">
            THE RIGHT SCREW. <span className="red">RIGHT WHEN</span>{" "}
            <span className="num">03</span>
            <br />
            <span className="red">YOU NEED IT.</span>
          </h2>

          <p className="personas__lead">
            Real contractors. Real projects. Real results. Here&apos;s how
            professionals across the supply chain rely on PROGRIP to keep
            projects on schedule and under budget.
          </p>
        </div>

        <div className="personas__grid">
          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
}
