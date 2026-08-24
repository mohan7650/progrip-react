import FeatureCard from "./FeatureCard.jsx";
import Reveal from "../Reveal.jsx";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./Features.css";

export default function Features() {
  const { t } = useTranslation();
  const f = t.features;

  return (
    <section className="features" id="why">
      <div className="features__inner">
        <span className="features__ghost-num" aria-hidden="true">03</span>

        <Reveal>
          <div className="features__eyebrow">
            <span></span>
            {f.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="features__title">
            {f.titleLine1}
            <br />
            <strong>{f.titleLine2}</strong>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="features__sub">{f.sub}</p>
        </Reveal>

        <div className="features__rule"></div>

        <div className="features__grid">
          {f.cards.map((card, i) => (
            <FeatureCard
              key={card.titleLine1}
              index={String(i + 1).padStart(2, "0")}
              title={
                <>
                  {card.titleLine1}
                  <br />
                  {card.titleLine2}
                </>
              }
              text={card.text}
              result={card.result}
              resultLabel={f.resultLabel}
              stats={card.stats}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
