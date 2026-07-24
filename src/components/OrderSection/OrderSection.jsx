import SectionHead from "../Shared/SectionHead.jsx";
import Button from "../Shared/Button.jsx";
import OrderCard from "./OrderCard.jsx";
import Reveal from "../Reveal.jsx";
import crosshairIcon from "../../assets/images/crosshair.png";
import "./OrderSection.css";

const ORDER_FEATURES = [
  {
    category: "INSTALLER",
    title: "MOBILE REORDER",
    text: "2-tap reorder from any phone, built for one hand.",
    items: [
      "Last order one tap away",
      "Request to Buyer for new SKUs",
      "Instant delivery confirmation",
    ],
  },
  {
    category: "DISTRIBUTOR",
    title: "CUSTOMER DASHBOARD",
    text: "Every job, every order, every delivery, one login, one screen.",
    items: [
      "Order history by SKU or project",
      "Account balance + PO upload",
      "Delivery tracking without calling",
    ],
  },
  {
    category: "CONTRACTOR",
    title: "SUBMITTALS BUILDER",
    text: "Select products, brand the PDF, send. Under 60 seconds.",
    items: [
      "No account required to start",
      "Saved project history",
      "Shareable direct link",
    ],
  },
  {
    category: "INSTALLER",
    title: "ORDERING ENGINE",
    text: "Pricing by category, volume, and region.",
    items: [
      "SDS + technical sheets",
      "LEED + certifications",
      "ISO documentation",
    ],
  },
  {
    category: "DISTRIBUTOR",
    title: "ACCOUNT SYSTEM",
    text: "Role-based access built for how construction companies.",
    items: [
      "Admin, Buyer, Foreman, General roles",
      "Buyers create foreman sub-accounts",
      "Approval workflow per company",
    ],
  },
  {
    category: "CONTRACTOR",
    title: "LITERATURE HUB",
    text: "Every document you need for spec compliance.",
    items: [
      "Pallet + container pricing logic",
      "Free freight thresholds",
      "PO upload auto-maps to orders",
    ],
  },
];

export default function OrderSection() {
  return (
    <section className="section section-order" id="order">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="THE PRO ORDERING SYSTEM"
            title={
              <>
                <span>ORDER LIKE A PRO, <span className="text-red">EVERY TIME</span></span>
                <img src={crosshairIcon} alt="" className="order-title-icon" />
              </>
            }
            sub="A platform built around how your crew actually works — from the foreman on his phone at 6am to the buyer managing five jobs from a desk. Fast, transparent, and built to keep you building."
          />
        </Reveal>

        <div className="order-grid">
          {ORDER_FEATURES.map((feature, i) => (
            <OrderCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="order-foot">
            <p className="order-foot-text">
              "This is a dedicated section promoting web and app features.{" "}
              <span className="text-red">
                The platform is not a feature — it's the retention strategy."
              </span>
            </p>
            <Button href="#" variant="red">ORDER NOW</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
