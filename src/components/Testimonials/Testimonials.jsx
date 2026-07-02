import SectionHead from "../Shared/SectionHead.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    photoClass: "photo-1",
    label: "FOREMAN ON JOBSITE WITH DRILL/DRYWALL",
    title: "THE INSTALLER",
    quote:
      '"Switched to PROGRIP after the third callback on a 40-unit multi-family project. Stripped screws were killing our schedule and burning labor hours on rework. Six months in, we\'ve had zero fastener failures across three buildings. Crews are faster, callbacks are down, and we\'re back on budget."',
    stat: "200,000 sq ft",
    statText: "multi-family complex, mixed wood and metal framing",
    name: "MIKE TORRES",
    role: (
      <>
        Framing Foreman<br />Mountain States Constructors, Denver, CO
      </>
    ),
    tipTitle: "GETTING CREWS HOME ON TIME WITH ZERO COMEBACKS",
    tipItems: [
      "Eliminated rework from stripped fasteners",
      "Reduced installer frustration",
      "Predictable labor costs per square foot",
      "Faster installation means more projects per year",
    ],
    ctaLabel: "INSTALLER KIT →",
    ctaVariant: "red",
  },
  {
    photoClass: "photo-2",
    label: "MATERIALS MANAGER WITH INVENTORY",
    title: "THE DISTRIBUTOR",
    quote:
      '"Consistent quality means I can order by the pallet without spot-checking every batch. We used to have the 5oz batch, cold batch* problem where one pallet would drive perfectly and the next would strip constantly. With PROGRIP, every order performs exactly like the last one. That predictability is worth more than any price discount."',
    stat: "$45M",
    statText: "annual volume across 15–20 active projects, centralized purchasing",
    name: "SARAH CHEN",
    role: (
      <>
        Materials Manager<br />Apex Commercial Builders, Boston, MA
      </>
    ),
    tipTitle: "MATERIAL YOU CAN TRUST AT SCALE",
    tipItems: [
      "Batch-to-batch consistency verified by lot",
      "Simplified inventory management",
      "Reduced emergency supply runs",
      "Better vendor relationship through consistency",
    ],
    ctaLabel: "OPEN ACCOUNT →",
    ctaVariant: "outline",
  },
  {
    photoClass: "photo-3",
    label: "ENGINEER REVIEWING SUBMITTALS",
    title: "THE CONTRACTOR",
    quote:
      '"I include PROGRIP in specifications now because I know it won\'t cause delays or warranty callbacks. Fastener failures don\'t show up in my critical path analysis until they\'ve already cost me days. The submittal builder makes documentation easy for architects, and having technical data sheets on hand eliminates inspector questions. One less thing to worry about means I can focus on bigger project risks."',
    stat: "Commercial and light-industrial GC, 12-person team, $10M annual revenue",
    statText: "",
    name: "JAMES RODRIGUEZ",
    role: (
      <>
        Principal<br />Rodriguez Construction Group, Phoenix, AZ
      </>
    ),
    tipTitle: "RISK ELIMINATION ON THE CRITICAL PATH",
    tipItems: [
      "Reduced delays from material failures",
      "Simplified specification process",
      "Better architect and inspector relationships",
      "Lower warranty risk on completed projects",
    ],
    ctaLabel: "BUILD SUBMITTAL →",
    ctaVariant: "red",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-testimonials" id="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="PERSONA TESTIMONIALS"
          title={
            <>
              THE RIGHT SCREW. RIGHT WHEN<br />
              <span className="text-red">YOU NEED IT.</span>
            </>
          }
          num="03"
          sub="Real contractors. Real projects. Real results. Here's how professionals across the supply chain rely on PROGRIP to keep projects on schedule and under budget."
        />

        <div className="grid grid-3 testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
