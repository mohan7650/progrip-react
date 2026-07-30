import ProSystemCard from "./ProSystemCard.jsx";
import Reveal from "../Reveal.jsx";
import "./ProSystem.css";
import pro05Img from "../../assets/images/Pro_05.png";

const PRO_CARDS = [
  {
    accent: "green",
    eyebrow: "01 — Installer",
    title: "THE INSTALLER",
    desc: "Pro Quality Screws that won\u2019t slow down or delay the job.",
    items: [
      "Reorder any SKU in 2 taps from his phone",
      "Request new items directly to the Buyer",
      "Delivery confirmation with ETA \u2014 right on his screen",
      "No price visibility required \u2014 just order",
    ],
    ctaLabel: "Installer App \u2192",
  },
  {
    accent: "blue",
    eyebrow: "02 — Distributor",
    title: "THE DISTRIBUTOR",
    desc: "\u201c5 jobs. 3 suppliers. One spreadsheet.\u201d",
    items: [
      "All jobs, orders, and deliveries in one dashboard",
      "Create and manage foreman sub-accounts",
      "Dynamic pricing locked to her category + volume",
      "PO upload maps automatically \u2014 no manual entry",
    ],
    ctaLabel: "Open Company Account \u2192",
  },
  {
    accent: "red",
    eyebrow: "03 — Contractor",
    title: "THE CONTRACTOR",
    desc: "\u201cSubmittal due in an hour. Rep isn\u2019t answering.\u201d",
    items: [
      "Build a branded submittal PDF in under 60 seconds",
      "No account required to start \u2014 experience first",
      "SDS, LEED, ISO docs always current, alwaysdownloadable",
      "Spec ProGrip once \u2014 every sub on the job follows",
    ],
    ctaLabel: "Build a Submittal \u2192",
  },
];

export default function ProSystem() {
  return (
    <section
      className="pro-system"
      id="pro-system"
      style={{ "--pro-bg": `url(${pro05Img})` }}
    >
      <div className="pro-system__inner">
        <span className="pro-system__ghost-num" aria-hidden="true">05</span>

        <div className="pro-system__head">
          <Reveal>
            <div className="pro-system__kicker">
              <span></span>
              The Pro system
            </div>
          </Reveal>

          <div className="pro-system__head-content">
            <Reveal delay={0.1}>
              <h2 className="pro-system__title">
                The right screw
                <br />
                <span className="pro-system__title-red">Right when you need it</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="pro-system__lead">
                Three proven fasteners engineered for the work that matters
              </p>
            </Reveal>
          </div>
        </div>

        <div className="pro-system__grid">
          {PRO_CARDS.map((card, i) => (
            <ProSystemCard key={card.eyebrow} {...card} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
