import ProSystemCard from "./ProSystemCard.jsx";
import Reveal from "../Reveal.jsx";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./ProSystem.css";
import pro05Img from "../../assets/images/Pro_05.png";

export default function ProSystem() {
  const { t } = useTranslation();
  const p = t.proSystem;

  return (
    <section
      className="pro-system"
      id="pro-system"
      style={{ "--pro-bg": `url(${pro05Img})` }}
    >
      <div className="pro-system__inner">
        <span className="pro-system__ghost-num" aria-hidden="true">02</span>

        <div className="pro-system__head">
          <Reveal>
            <div className="pro-system__kicker">
              <span></span>
              {p.kicker}
            </div>
          </Reveal>

          <div className="pro-system__head-content">
            <Reveal delay={0.1}>
              <h2 className="pro-system__title">
                {p.title.line1}
                {p.title.line2 && (
                  <>
                    <br />
                    <span className="pro-system__title-red">{p.title.line2}</span>
                  </>
                )}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="pro-system__lead">{p.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="pro-system__grid">
          {p.cards.map((card, i) => (
            <ProSystemCard key={card.eyebrow} {...card} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
