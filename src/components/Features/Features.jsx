import FeatureCard from "./FeatureCard.jsx";
import Reveal from "../Reveal.jsx";
import "./Features.css";

const FEATURES = [
  {
    index: "01",
    title: <>FASTER<br />INSTALLATION</>,
    text: "Heat-treated Phillips drive resists cam-out up to 30% better than standard screws, maintaining positive bit engagement under high torque. Self-drilling points reduce penetration force by 40%, eliminating the pre-drill step on steel studs up to 20-gauge.",
    result: "More screws driven per hour, fewer bit changes, less installer fatigue.",
    stats: [
      "30% reduction in cam-out vs standard screws",
      "40% less penetration force on self-drilling points",
      "Average 35% time savings",
    ],
  },
  {
    index: "02",
    title: <>REDUCED<br />FAILURES</>,
    text: "Consistent hardness rating ensures every production batch delivers predictable torque performance without brittleness or stripping. Our low failure rate is up to 10x better than industry average.",
    result: "Fewer warranty callbacks, lower material waste, predictable project costs.",
    stats: [
      "0.3% failure rate vs 2–4% industry average",
      "100% hardness inspection per production lot",
      "Full traceability by lot number",
    ],
  },
  {
    index: "03",
    title: <>MEETS ALL<br />STANDARDS</>,
    text: "Full compliance with ASTM C1002 and ASTM C954. Structural framing screws carry ICC-ES evaluation reports for code-required load-bearing applications. Technical data sheets and compliance documentation are available for submittal packages.",
    result: "Inspectors approve, architects accept, projects stay on schedule.",
    stats: [
      "ASTM C1002 & C954 certified",
      "ICC-ES reports for structural screws",
      "Complete submittal documentation online",
    ],
  },
  {
    index: "04",
    title: <>BUILT FOR PROS</>,
    text: "Contractor-focused bulk packaging reduces cardboard waste and trips to the supply truck. Available through major distributors nationwide with direct ordering options for volume accounts and technical support from professionals with real construction experience.",
    result: "Reliable supply chain, expert guidance, less packaging waste.",
    stats: [
      "Available through 500+ distributors nationwide",
      "Direct ordering for volume accounts",
      "Technical support with jobsite experience",
    ],
  },
];

export default function Features() {
  return (
    <section className="features" id="why">
      <div className="features__inner">
        <Reveal>
          <div className="features__eyebrow">
            <span></span>
            WHY PROGRIP
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="features__title">
            WHY PROFESSIONAL CONTRACTORS <span className="features__num">02</span>
            <br />
            <strong>CHOOSE PROGRIP</strong>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="features__sub">
            When project timelines are tight and callbacks kill profit, you need
            fasteners that perform exactly as expected, every single time. Here's
            what sets PROGRIP apart from retail-grade alternatives.
          </p>
        </Reveal>

        <div className="features__rule"></div>

        <div className="features__grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.index} {...feature} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
