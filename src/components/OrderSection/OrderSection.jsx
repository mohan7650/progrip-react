import SectionHead from "../Shared/SectionHead.jsx";
import Button from "../Shared/Button.jsx";
import OrderCard from "./OrderCard.jsx";
import Reveal from "../Reveal.jsx";
import crosshairIcon from "../../assets/images/crosshair.png";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./OrderSection.css";

export default function OrderSection() {
  const { t } = useTranslation();
  const o = t.order;

  return (
    <section className="section section-order" id="order">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow={o.eyebrow}
            title={
              <>
                <span>{o.titleLine1}<span className="text-red">{o.titleLine2}</span></span>
                <img src={crosshairIcon} alt="" className="order-title-icon" />
              </>
            }
            sub={o.sub}
          />
        </Reveal>

        <div className="order-grid">
          {o.cards.map((feature, i) => (
            <OrderCard
              key={feature.title}
              category={o.categories[feature.category]}
              categoryClass={feature.category.toLowerCase()}
              title={feature.title}
              text={feature.text}
              items={feature.items}
              delay={i * 0.1}
            />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="order-foot">
            <p className="order-foot-text">
              {o.footTextPrefix}{" "}
              <span className="text-red">{o.footTextAccent}</span>
            </p>
            <Button href="#products" variant="red">{o.orderNow}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
