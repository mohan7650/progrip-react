import FeatureCard from "./FeatureCard.jsx";
import Reveal from "../Reveal.jsx";
import "./Features.css";

const FEATURES = [
  {
    index: "01",
    title: <>FASTER, MORE<br />STABLE INSTALLATION</>,
    text: "Designed for a faster, more stable installation experience. Precise point and recess geometry supports controlled driving and helps reduce screw wobble during installation.",
    result: "Stable, controlled installation with consistent screw engagement.",
    stats: [
      "Faster and more stable installation",
      "Precise point and recess geometry",
      "Reduced screw wobble",
    ],
  },
  {
    index: "02",
    title: <>CONSISTENT<br />PERFORMANCE</>,
    text: "Consistent performance from box to box. Reliable material engagement supports dependable use, while full lot traceability provides production visibility.",
    result: "Consistent product performance with reliable material engagement.",
    stats: [
      "Consistent performance from box to box",
      "Reliable material engagement",
      "Full lot traceability",
    ],
  },
  {
    index: "03",
    title: <>QUALITY &<br />COMPLIANCE</>,
    text: "PROGRIP products are designed with applicable ASTM compliance in mind, supporting the technical requirements relevant to their intended applications.",
    result: "Product quality supported by applicable compliance requirements.",
    stats: [
      "Applicable ASTM compliance",
      "Full lot traceability",
      "Consistent performance from box to box",
    ],
  },
  {
    index: "04",
    title: <>PRECISION &<br />RELIABILITY</>,
    text: "PROGRIP combines precise point and recess geometry with reliable material engagement to support consistent product performance.",
    result: "Purpose-built geometry focused on stability and material.",
    stats: [
      "Precise point and recess geometry",
      "Reduced screw wobble",
      "Reliable material engagement",
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
