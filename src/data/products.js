import screw01 from "../assets/images/product-section/screw-01.png";
import screw02 from "../assets/images/product-section/screw-02.png";
import screw03 from "../assets/images/product-section/screw-03.png";
import box04 from "../assets/images/product-section/box-04.png";
import box05 from "../assets/images/product-section/box-05.png";
import box06 from "../assets/images/product-section/box-06.png";
import coarse01 from "../assets/images/product-section/Coarse Thread Drywall Screw_01.png";
import coarse02 from "../assets/images/product-section/Coarse Thread Drywall Screw_02.png";
import coarse03 from "../assets/images/product-section/Coarse Thread Drywall Screw_03.png";
import coarse04 from "../assets/images/product-section/Coarse Thread Drywall Screw_04.png";
import coarse05 from "../assets/images/product-section/Coarse Thread Drywall Screw_05.png";
import coarse06 from "../assets/images/product-section/Coarse Thread Drywall Screw_06.png";

export const PRODUCT_DETAILS = {
  "1-1": {
    badge: "Structural Fastener · #6",
    title: ["6×1-7/8\" Fine Thread", "Metal Stud Screw"],
    desc: "Engineered for steel-to-steel connections on load-bearing framing. Self-drilling point, controlled hardness, and a fine 32 TPI thread built to hold when the schedule doesn't allow for callbacks.",
    specs: [
      { label: "LENGTH", value: "1-7/8\"" },
      { label: "THREAD", value: "#6 - 32 TPI FINE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "POINT", value: "SELF-DRILL #3" },
      { label: "GAUGE", value: "UP TO 20-GA STEEL" },
    ],
    img: screw01,
    feature: {
      eyebrow: "01 — Drive System",
      heading: "BUILT TO RESIST",
      headingRed: "CAM-OUT.",
      desc: "A heat-treated Phillips #2 recess keeps the bit locked in under high torque, so the drive doesn't strip out mid-run on a 40-unit framing job.",
      stats: [
        { value: "30%", label: "less cam-out vs. standard" },
        { value: "HRC 52–56", label: "Drive hardness bond" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "1-2": {
    badge: "Fastener · #6",
    title: ["6×1-1/4\" Coarse Thread", "Drywall Screw"],
    desc: "Fast-biting coarse thread for standard drywall-to-wood applications. Cuts clean on the first drive, holds flat, and won't back out under normal load.",
    specs: [
      { label: "LENGTH", value: "1-1/4\"" },
      { label: "THREAD", value: "#6 - COARSE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "POINT", value: "SHARP" },
      { label: "GAUGE", value: "WOOD STUD" },
    ],
    img: screw02,
    feature: {
      eyebrow: "01 — Drive System",
      heading: "FAST BITE,",
      headingRed: "CLEAN FINISH.",
      desc: "Coarse thread geometry grabs wood fiber immediately, reducing drive time on high-volume board installations.",
      stats: [
        { value: "20%", label: "faster drive vs. fine thread" },
        { value: "HRC 50–54", label: "Core hardness range" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "1-3": {
    badge: "Fastener · #6",
    title: ["6×1-1/4\" Fine Thread", "Drywall Screw"],
    desc: "Fine thread precision for metal stud applications. Designed to pull board tight without strip-out, even at high RPM.",
    specs: [
      { label: "LENGTH", value: "1-1/4\"" },
      { label: "THREAD", value: "#6 - 32 TPI FINE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "POINT", value: "SHARP" },
      { label: "GAUGE", value: "UP TO 20-GA STEEL" },
    ],
    img: screw03,
    feature: {
      eyebrow: "01 — Thread Profile",
      heading: "ZERO STRIP-OUT",
      headingRed: "GUARANTEED.",
      desc: "Fine 32 TPI threads engage metal stud flanges fully before torque peaks, keeping the head seated flush every time.",
      stats: [
        { value: "32 TPI", label: "Fine thread pitch" },
        { value: "HRC 52–56", label: "Drive hardness bond" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "1-4": {
    badge: "Box · Drywall Screw",
    title: ["Coarse Thread", "Drywall Screw Box"],
    desc: "Bulk packaging for high-volume drywall installations. PROGRIP coarse thread screws, pre-sorted and ready for continuous work.",
    specs: [
      { label: "COUNT", value: "8,000 PCS" },
      { label: "THREAD", value: "COARSE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "WEIGHT", value: "22 LB" },
      { label: "PACK", value: "JOBSITE BOX" },
    ],
    img: box04,
    feature: {
      eyebrow: "01 — Packaging",
      heading: "BUILT FOR",
      headingRed: "VOLUME.",
      desc: "8,000-count jobsite boxes keep your crew stocked through a full floor without mid-day restocking runs.",
      stats: [
        { value: "8,000", label: "Screws per carton" },
        { value: "22 lb", label: "Box weight" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "1-5": {
    badge: "Box · Drywall Screw",
    title: ["Fine Thread", "Drywall Screw Box"],
    desc: "Fine thread bulk box for metal stud framing crews. Consistent point geometry and heat-treated shanks across every count.",
    specs: [
      { label: "COUNT", value: "8,000 PCS" },
      { label: "THREAD", value: "FINE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "WEIGHT", value: "22 LB" },
      { label: "PACK", value: "JOBSITE BOX" },
    ],
    img: box05,
    feature: {
      eyebrow: "01 — Packaging",
      heading: "STOCK THE",
      headingRed: "JOB SITE.",
      desc: "Pre-sorted fine thread boxes reduce setup time and keep your framing crew moving on multi-floor projects.",
      stats: [
        { value: "8,000", label: "Screws per carton" },
        { value: "22 lb", label: "Box weight" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "1-6": {
    badge: "Box · Drywall Screw",
    title: ["Fine Thread", "Drywall Screw Box"],
    desc: "High-count fine thread carton for large-scale steel framing builds. Every screw meets PROGRIP hardness and geometry specs.",
    specs: [
      { label: "COUNT", value: "8,000 PCS" },
      { label: "THREAD", value: "FINE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "WEIGHT", value: "22 LB" },
      { label: "PACK", value: "JOBSITE BOX" },
    ],
    img: box06,
    feature: {
      eyebrow: "01 — Packaging",
      heading: "READY FOR",
      headingRed: "SCALE.",
      desc: "Large jobsite boxes matched to GC volume orders — fewer purchase orders, more time on the tools.",
      stats: [
        { value: "8,000", label: "Screws per carton" },
        { value: "22 lb", label: "Box weight" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "2-1": {
    badge: "Fastener · #6",
    title: ["Coarse Thread", "Drywall Screw"],
    desc: "Fast-bite coarse thread for standard wood-to-drywall framing. Designed for day-to-day installs that demand consistent, reliable results.",
    specs: [
      { label: "THREAD", value: "COARSE" },
      { label: "DRIVE", value: "PHILLIPS #2" },
      { label: "POINT", value: "SHARP" },
      { label: "GAUGE", value: "WOOD STUD" },
      { label: "TYPE", value: "SHARP POINT" },
    ],
    img: coarse01,
    feature: {
      eyebrow: "01 — Thread Design",
      heading: "GRIP FAST,",
      headingRed: "HOLD FIRM.",
      desc: "Coarse thread geometry bites into wood framing immediately, minimizing spin-out on high-volume board runs.",
      stats: [
        { value: "20%", label: "faster drive vs. fine thread" },
        { value: "HRC 50–54", label: "Core hardness range" },
      ],
    },
    packages: [
      { num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton for single-project ordering." },
      { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging for multi-building and GC accounts." },
      { num: "03", name: "Submittal Package", desc: "ASTM & ICC-ES documentation bundled for architect review." },
    ],
  },
  "2-2": { badge: "Fastener · #6", title: ["Coarse Thread", "Drywall Screw"], desc: "Reliable coarse thread performance for standard framing applications.", specs: [{ label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SHARP" }], img: coarse02, feature: { eyebrow: "01 — Thread Design", heading: "CONSISTENT", headingRed: "RESULTS.", desc: "Consistent thread geometry ensures reliable performance across all board installations.", stats: [{ value: "20%", label: "faster drive" }, { value: "HRC 50–54", label: "Hardness range" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "2-3": { badge: "Fastener · #6", title: ["Coarse Thread", "Drywall Screw"], desc: "Heavy-duty coarse thread for demanding framing installations.", specs: [{ label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SHARP" }], img: coarse03, feature: { eyebrow: "01 — Thread Design", heading: "HEAVY DUTY", headingRed: "PERFORMANCE.", desc: "Built for the most demanding framing jobs where reliability is non-negotiable.", stats: [{ value: "20%", label: "faster drive" }, { value: "HRC 50–54", label: "Hardness range" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "2-4": { badge: "Fastener · #6", title: ["Coarse Thread", "Drywall Screw"], desc: "Pro-grade coarse thread drywall screw for standard framing.", specs: [{ label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SHARP" }], img: coarse04, feature: { eyebrow: "01 — Thread Design", heading: "PRO GRADE,", headingRed: "JOB READY.", desc: "Every screw meets PROGRIP's hardness and geometry specs before it leaves the facility.", stats: [{ value: "20%", label: "faster drive" }, { value: "HRC 50–54", label: "Hardness range" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "2-5": { badge: "Fastener · #6", title: ["Coarse Thread", "Drywall Screw"], desc: "Volume coarse thread for high-count framing builds.", specs: [{ label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SHARP" }], img: coarse05, feature: { eyebrow: "01 — Thread Design", heading: "VOLUME READY,", headingRed: "ZERO WASTE.", desc: "Consistent quality across every count — no rejects, no callbacks.", stats: [{ value: "20%", label: "faster drive" }, { value: "HRC 50–54", label: "Hardness range" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "2-6": { badge: "Fastener · #6", title: ["Coarse Thread", "Drywall Screw"], desc: "High-volume coarse thread for large-scale framing projects.", specs: [{ label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SHARP" }], img: coarse06, feature: { eyebrow: "01 — Thread Design", heading: "SCALE WITHOUT", headingRed: "COMPROMISE.", desc: "Engineered for multi-building projects where every screw must perform the same as the first.", stats: [{ value: "20%", label: "faster drive" }, { value: "HRC 50–54", label: "Hardness range" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-1": { badge: "Self Drilling · #8", title: ['8×1" Self Drill', "Screw"], desc: "Self-drilling tip eliminates pilot holes in steel framing. Built for demanding assemblies where strength and speed both matter.", specs: [{ label: "LENGTH", value: "1\"" }, { label: "THREAD", value: "#8 - COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SELF-DRILL #2" }, { label: "GAUGE", value: "UP TO 20-GA" }], img: screw01, feature: { eyebrow: "01 — Drill Point", heading: "NO PILOT HOLE", headingRed: "NEEDED.", desc: "Hardened self-drill tip cuts through 20-gauge steel cleanly without pre-drilling, saving time on every connection.", stats: [{ value: "#2", label: "Self-drill point" }, { value: "HRC 54–58", label: "Tip hardness" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-2": { badge: "Self Drilling · #8", title: ['8×1-1/4" Self Drill', "Screw"], desc: "Extended length self-drill for thicker steel assemblies requiring deeper penetration.", specs: [{ label: "LENGTH", value: "1-1/4\"" }, { label: "THREAD", value: "#8 - COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SELF-DRILL #2" }, { label: "GAUGE", value: "UP TO 20-GA" }], img: screw02, feature: { eyebrow: "01 — Drill Point", heading: "DEEPER REACH,", headingRed: "SAME SPEED.", desc: "Longer shank reaches through stacked steel layers without losing drill-point integrity.", stats: [{ value: "#2", label: "Self-drill point" }, { value: "HRC 54–58", label: "Tip hardness" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-3": { badge: "Self Drilling · #8", title: ['8×2" Self Drill', "Screw"], desc: "Maximum-length self-drill for multi-layer steel assemblies and heavy-gauge connections.", specs: [{ label: "LENGTH", value: "2\"" }, { label: "THREAD", value: "#8 - COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "POINT", value: "SELF-DRILL #3" }, { label: "GAUGE", value: "UP TO 20-GA" }], img: screw03, feature: { eyebrow: "01 — Drill Point", heading: "MAXIMUM", headingRed: "PENETRATION.", desc: "2-inch self-drill handles multi-layer assemblies where standard lengths fall short.", stats: [{ value: "#3", label: "Heavy self-drill point" }, { value: "HRC 54–58", label: "Tip hardness" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-4": { badge: "Box · Self Drill", title: ["Self Drill", "Screw Box"], desc: "Bulk self-drill box for high-volume steel framing installations.", specs: [{ label: "COUNT", value: "5,000 PCS" }, { label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "WEIGHT", value: "18 LB" }, { label: "PACK", value: "JOBSITE BOX" }], img: box04, feature: { eyebrow: "01 — Packaging", heading: "VOLUME READY,", headingRed: "ZERO DOWNTIME.", desc: "5,000-count boxes keep self-drill crews stocked through long steel framing runs.", stats: [{ value: "5,000", label: "Screws per carton" }, { value: "18 lb", label: "Box weight" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-5": { badge: "Box · Self Drill", title: ["Self Drill", "Screw Box"], desc: "Pro-grade self-drill bulk packaging for demanding steel assemblies.", specs: [{ label: "COUNT", value: "5,000 PCS" }, { label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "WEIGHT", value: "18 LB" }, { label: "PACK", value: "JOBSITE BOX" }], img: box05, feature: { eyebrow: "01 — Packaging", heading: "BUILT FOR", headingRed: "SCALE.", desc: "High-count cartons meet GC and multi-site order requirements without compromise.", stats: [{ value: "5,000", label: "Screws per carton" }, { value: "18 lb", label: "Box weight" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
  "3-6": { badge: "Box · Self Drill", title: ["Self Drill", "Screw Box"], desc: "Large-format self-drill carton for multi-building steel framing projects.", specs: [{ label: "COUNT", value: "5,000 PCS" }, { label: "THREAD", value: "COARSE" }, { label: "DRIVE", value: "PHILLIPS #2" }, { label: "WEIGHT", value: "18 LB" }, { label: "PACK", value: "JOBSITE BOX" }], img: box06, feature: { eyebrow: "01 — Packaging", heading: "ORDER ONCE,", headingRed: "DELIVER TWICE.", desc: "Designed for GC accounts ordering across multiple sites — consistent count and pack every time.", stats: [{ value: "5,000", label: "Screws per carton" }, { value: "18 lb", label: "Box weight" }] }, packages: [{ num: "01", name: "Carton — 1,000 CT", desc: "Standard jobsite carton." }, { num: "02", name: "Carton — 5,000 CT", desc: "Bulk volume packaging." }, { num: "03", name: "Submittal Package", desc: "Documentation bundle." }] },
};
