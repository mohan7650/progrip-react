import SectionHead from "../Shared/SectionHead.jsx";
import Button from "../Shared/Button.jsx";
import OrderCard from "./OrderCard.jsx";
import "./OrderSection.css";

const ORDER_FEATURES = [
  {
    label: "PUBLIC SCHEDULE",
    text: "Order from any device, jump order for one week.",
    items: [
      "Last order one day away",
      "Request to Buyer for one 30min",
      "Instant delivery confirmation",
    ],
  },
  {
    label: "FASTENER RESOURCES",
    text: "Every job, every order, every building, every login, one system.",
    items: ["Job accounts + PO uploads", "Delivery tracking without calling"],
  },
  {
    label: "SUBMITTALS QUICKED",
    text: "Sales estimates, ICS and the ICPC spent. Under 30 seconds.",
    items: [
      "No account required to start",
      "Resale project reports",
      "Downloadable literature kits",
    ],
  },
  {
    label: "JOBSITE DELIVERY",
    text: "Scheduled delivery windows that respect your schedule.",
    items: ["Same-day options in metro areas", "Staging by building section"],
  },
  {
    label: "VOLUME PRICING",
    text: "Category and volume pricing locked to your account.",
    items: ["Contract pricing by category", "Quarterly volume rebates"],
  },
  {
    label: "ACCOUNT SYSTEM",
    text: "Company accounts with roles and approvals built in.",
    items: ["Buyer / foreman / PM roles", "Approval workflows"],
  },
  {
    label: "COMPLIANCE DOCS",
    text: "SDS, LEED, ICC docs always current and attached to orders.",
    items: ["No account required to start", "Resale project reports"],
  },
  {
    label: "LITERATURE HUB",
    text: "Sales literature, spec sheets and install guides in one place.",
    items: ["Free freight thresholds", "PO upload sales steps to obtain"],
  },
];

export default function OrderSection() {
  return (
    <section className="section section-order" id="order">
      <div className="container">
        <SectionHead
          eyebrow="THE PRO ORDERING SYSTEM"
          title={
            <>
              ORDER LIKE A PRO, <span className="text-red">EVERY TIME</span>
            </>
          }
          sub="A platform sum ground how your sites actually works — from the foreman on the phone at 6am to the buyer managing the pool from a desk. Fast, transparent, and built to keep you building."
        />

        <div className="grid grid-4 order-grid">
          {ORDER_FEATURES.map((feature) => (
            <OrderCard key={feature.label} {...feature} />
          ))}
        </div>

        <div className="order-foot">
          <p className="micro">
            *This is a dedicated section promoting web and app features.{" "}
            <a href="#" className="text-red">
              Try platform to run a feature — the raw learnings sandbox*
            </a>
          </p>
          <Button href="#" variant="red">ORDER NOW</Button>
        </div>
      </div>
    </section>
  );
}
