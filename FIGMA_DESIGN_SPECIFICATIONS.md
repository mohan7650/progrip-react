# Figma Design Specifications - Pro+Grip Website (Copy)

This document contains the complete design specifications extracted from the Figma file.

## Design System

### Color Palette

```css
/* Background Colors */
--color-bg-brand-guide-note: #111411;
--color-bg-product--9-: #1F1F1F;
--color-bg-backgroundborder: #E50914;
--color-bg-footer--1-: #050505;
--color-bg-menu: #3D0404;
--color-bg-card-3: #141714;
--color-bg-frame-2: #1C1C1C;
--color-bg-text-input: #FFFFFF;
--color-bg-refined-version---new: #050904;
--color-bg-overlay: #424242;
--color-bg-frame-32: #1A1A1A;
--color-bg-finalized-progrip-homepage: #636363;
--color-bg-product: #171717;
--color-bg-frame-40: #000000;

```

### Typography

```css
/* Font Family */
--font-primary: 'Russo One', system-ui, -apple-system, sans-serif;

/* Font Sizes */
--text-xl: 16px;
--text-2xl: 18px;
--text-3xl: 20px;
--text-4xl: 21px;
--text-xs: 11px;
--text-sm: 12px;
--text-base: 14px;
--text-lg: 15px;

/* Font Weights */
--font-wood-framed-residential: 400;
--font-6x1-14: 400;
--font-built-for-demanding-assemblies-where-strength-matters-most: 400;
--font-light-gauge-steel-construction: 400;
--font-02: 700;
--font-sds--technical-sheets: 400;
--font-strong--result: 700;
--font-30-reduction-in-cam-out-vs-standard-screws: 400;
--font-create-and-manage-foreman-sub-accounts: 400;
--font-build-a-branded-submittal-pdf-in-under-60-seconds: 400;
--font-commercial-drywall-installation: 400;
--font-heavy-duty: 400;
--font-real-contractors-real-projects-real-results-heres-how-professionals-across-the-supply-chain-rely-on-progrip-to-keep-projects-on-schedule-and-under-budget: 400;
--font-get-updates-on-new-products-and-job-site-tips: 400;
--font-placeholder: 400;
--font-existing-building-retrofit-tenant-improvements-selective-demolition-and-rebuild: 400;
--font-x: 400;
--font-persona-testimonials: 400;
--font-predictable-labor-costs-per-square-foot: 400;
--font-fast-bite-performance-for-stronger-day-to-day-applications: 400;
--font-office-build-outs-retail-spaces-commercial-interior-partitions: 400;
--font-pro-quality-screws-that-wont-slow-down-or-delay-the-job: 400;
--font-privacy-policy: 400;
--font-installer-kit-: 700;
--font-no-account-required-to-start--experience-first: 400;
--font-reduced-delays-from-material-failures: 400;
--font-03: 700;
--font-renovation--remodel: 400;
--font-role-based-access-built-for-how-construction-companies: 400;
--font-pallet--container-pricing-logic: 400;
--font-browse-all: 400;
--font-about-us: 400;
--font-shop-self-drilling-screws-: 700;
--font-shop-variety-packs-: 700;
--font-facebook: 400;
--font-full-compliance-with-astm-c1002-and-astm-c954-structural-framing-screws-carry-icc-es-evaluation-reports-for-code-required-load--bearing-applications-technical-data-sheets-and-compliance-documentation-are-available-for-submittal-packages: 400;
--font-spec-progrip-once--every-sub-on-the-job-follows: 400;
--font-leed--certifications: 400;
--font-admin-buyer-foreman-general-roles: 400;
--font-follow-us: 600;
--font-built-for-pros: 400;
--font-astm-c1002--c954-certified: 400;
--font-plan-multi-family-project-: 700;
--font-contact-for-volume-pricing-: 700;
--font-graphical-system-details: 400;
--font-installer: 700;
--font-renovation-project-guide-: 700;
--font-for-pros: 400;
--font-average-35-time-savings: 400;
--font-coarse-thread-screws: 400;
--font-for-wood-studs-coarse-thread-drywall-screws: 400;
--font-categories: 400;
--font-button: 600;
--font-meets-all-standards: 400;
--font-icc-es-reports-for-structural-screws: 400;
--font-material-you-can-trust-at-scale: 700;
--font-professional-grade-fasteners--professional-grade-platform: 700;
--font-highlights: 700;
--font-and-lastly-we-would-like-to-see-a-few-more-graphical-elements-from-the-progrip-branding-guide-into-this-website-design-specifically-we-would-like-to-see-thread-texturereticle-mark-targeting--action-icon-split-panel: 400;
--font-request-to-buyer-for-new-skus: 400;
--font-instant-delivery-confirmation: 400;
--font-: 400;
--font-learn-more: 700;
--font-sds-leed-iso-docs-always-current-alwaysdownloadable: 400;
--font-40-60-units-100000-150000-drywall-screws-plus-10000-20000-structural-screws: 400;
--font-fine-thread-drywall-screws-for-existing-metal-stud-systems-often-25-gauge-in-older-buildings: 400;
--font-no-account-required-to-start: 400;
--font-100-hardness-inspection-per-production-lot: 400;
--font-saved-project-history: 400;
--font-buyers-create-foreman-sub-accounts: 400;
--font-build-submittal-: 700;
--font-for-structure-structural-framing-screws-9-x-3-typical: 400;
--font-: 600;
--font-05: 700;
--font-for-metal-studs-self-drilling-screws-20-gauge-or-fine-thread-25-gauge: 400;
--font-heading-3--the-gc: 700;
--font-products: 600;
--font-cookies-settings: 400;
--font-2-tap-reorder-from-any-phone-built-for-one-hand: 400;
--font-by-subscribing-you-agree-to-our-privacy-policy-and-consent-to-receive-updates-from-pro-grip: 400;
--font-contact-us: 400;
--font-all-jobs-orders-and-deliveries-in-one-dashboard: 400;
--font-contractor: 700;
--font-self-drilling-for-quick-penetration: 400;
--font-bidding-a-project-and-needs-a-product-submittal-in-under-60-seconds: 400;
--font-keep-a-variety-pack-in-the-truck-2000-fine-thread-2000-coarse-thread-500-structural-better-to-have-three-types-on-hand-than-make-a-supply-run-mid-day-when-you-discover-mixed-framing-most-renovation-delays-come-from-material-trips-not-installation-time: 400;
--font-for-your-application: 400;
--font-the-installer: 700;
--font-rodriguez-construction-group-phoenix-az: 400;
--font-why-this-matters: 400;
--font-heading-4--mobile-reorder: 600;
--font-free-freight-thresholds: 400;
--font-contractor-focused-bulk-packaging-reduces-cardboard-waste-and-trips-to-the-supply-truck-available-through-major-distributors-nationwide-with-direct-ordering-options-for-volume-accounts-and-technical-support-from-professionals-with-real-construction-experience: 400;
--font-available-through-500-distributors-nationwide: 400;
--font-sarah-chen: 700;
--font-recommended-products: 700;
--font-company: 600;
--font-faster-installation-means-more-projects-per-year: 400;
--font-01: 700;
--font-mike-torres: 700;
--font-apex-commercial-builders-boston-ma: 400;
--font--6x1---78: 400;
--font-po-upload-maps-automatically--no-manual-entry: 400;
--font-40-less-penetration-force-on-self--drilling-points: 400;
--font-mixed-material-projects-require-reliable-fasteners-across-all-substrates-without-switching-suppliers-or-dealing-with-inconsistent-quality-stocking-progrip-across-product-types-means-consistent-performance-simplified-ordering-and-one-supplier-relationship-for-the-entire-project-eliminates-the-good-for-wood-bad-for-metal-problem-with-generic-fasteners: 400;
--font-when-project-timelines-are-tight-and-callbacks-kill-profit-you-need-fasteners-that-perform-exactly-as-expected-every-single-time-heres-what-sets-progrip-apart-from-retail-grade-alternatives: 400;
--font-tagline: 600;
--font-coarse-thread-drywall-screws: 700;
--font-metal-studs: 400;
--font-terms-of-service: 400;
--font-lower-warranty-risk-on-completed-projects: 400;
--font-weight--22-lb: 400;
--font-single-family-homes-additions-wood-framed-townhomes-and-multi-family: 400;
--font-pro-tip: 400;
--font-this-is-a-dedicated-section-promoting-web-and-app-features-the-platform-is-not-a-feature--its-the-retention-strategy: 500;
--font--2026-pro-grip-all-rights-reserved: 400;
--font-full-traceability-by-lot-number: 400;
--font-the-right-screw-right-when-you-need-it: 400;
--font-what-matters: 400;
--font-text: 400;
--font-view-installation-guide-: 700;
--font-open-account-: 700;
--font-back-office-managing-5-jobs-and-3-suppliers-from-a-spreadsheet-and-need-a-better-solution: 400;
--font-choose-the-right-screw: 400;
--font-shareable-direct-link: 400;
--font-link-text: 400;
--font-multi-family-framing: 400;
--font-renovation-work-means-unknown-or-mixed-framingconditions-behind-existing-finishes-you-cant-reliablypredict-what-substrate-youll-encounter-until-demo-is-complete-progrips-consistent-performance-eliminates-surprises-across-all-materials-when-youre-not-sure-whats-behind-the-wall-you-need-fasteners-you-can-trust-in-any-substrate-without-callbacks: 400;
--font-professional-contractors-match-fasteners-to-substrates-for-optimal-performance-and-code-compliance-heres-how-to-spec-progrip-screws-across-common-construction-applications: 400;
--font-installer-app-: 600;
--font-dynamic-pricing-locked-to-her-category--volume: 400;
--font-consistent-hardness-rating-hrc-52--56-across-every-production-batch-ensures-predictable-torque-performance-without-brittleness-or-stripping-our-03-failure-rate-is-up-to-10x-better-than-industry-average: 400;
--font-eliminated-rework-from-stripped-fasteners: 400;
--font-reduced-failures: 400;
--font-the-distributor: 700;
--font-12-15-screws-per-sheet-8000-12000-per-1000-sq-ft-depending-on-system: 400;
--font-project-types: 700;
--font-every-document-you-need-for-spec-compliance: 400;
--font-simplified-submittal-process: 400;
--font-primary-fine-thread-drywall-screws-for-25-gauge-systems: 400;
--font-reorder-any-sku-in-2-taps-from-his-phone: 400;
--font-eliminates-callbacks-from-stripped-fasteners-on-high-square-footage-projects-self-drilling-point-saves-30--40-installation-time-vs-pre-drilling-consistent-performance-means-predictable-labor-costs-and-on--schedule-completion-wrong-thread-type-causes-stripped-screws-in-metal-studs-resulting-in-rework-and-schedule-delays: 400;
--font-application-guide: 400;
--font-why-progrip: 400;
--font-heat-treated-phillips-drive-resists-cam-out-up-to-30-better-than-standard-screws-maintaining-positive-bit-engagement-under-high-torque-self-drilling-points-reduce-penetration-force-by-40-eliminating-the-pre-drill-step-on-steel-studs-up-to-20-gauge: 400;
--font-better-vendor-relationship-through-consistency: 400;
--font-set-drill-clutch-between-15-18-for-optimal-depth-control-on-25-gauge-systems-replace-phillips-bits-every-1000-screws-to-maintain-consistent-drive-performance-worn-bits-increase-cam-out-frequency-and-damage-screw-heads-test-clutch-settings-on-scrap-material-before-production-driving: 400;
--font-view-all: 400;
--font-faster-installation: 700;
--font-light-gauge-installation-tips-: 700;
--font-resources: 400;
--font-materials-manager-with-inventory: 700;
--font-light-gauge-steel-systems-are-extremely-unforgiving-over-torque-by-even-small-amounts-and-you-strip-out-the-thin-metal-under-torque-and-you-get-movement-cracks-and-fastener-pop-progrips-precision-thread-design-and-consistent-hardness-hrc-52-56-provide-the-narrow-torque-window-these-engineered-systems-require-generic-screws-with-batch-variation-cause-constant-stripping: 400;
--font-build-submittal: 700;
--font-delivery-confirmation-with-eta--right-on-his-screen: 400;
--font-open-company-account-: 600;
--font-primary-self-drilling-drywall-screws-20-gauge-steel-studs-and-heavier: 400;
--font-structural-framing-screws-for-blocking-and-reinforcement: 400;
--font-every-job-every-order-every-delivery-one-login-one-screen: 400;
--font-order-history-by-sku-or-project: 400;
--font-foreman-on-jobsite-with-drillmaterial: 700;
--font-eliminated-batch-to-batch-quality-variation: 400;
--font-distributor: 700;
--font-direct-ordering-for-volume-accounts: 400;
--font-mountain-states-construction-denver-co: 400;
--font-retail-storefronts-medical-offices-any-project-with-engineered-light-gauge-steel-systems: 400;
--font-secondary-self-drilling-screws-for-20-gauge-track-and-stud-connections: 400;
--font-for-structure-structural-framing-screws-blocking-rim-boards-subfloor-ledgers: 400;
--font-shop-coarse-thread-screws-: 700;
--font-metal-stud-screws: 400;
--font-residential-framing-guide-: 700;
--font-8000-pcs: 400;
--font-complete-submittal-documentation-online: 400;
--font-consistent-quality-means-i-can-order-by-the-pallet-without-worrying-about-bad-batches-we-used-to-have-the-hot-batch-cold-batch-problem-where-one-pallet-would-drive-perfectly-and-the-next-would-strip-constantly-with-progrip-every-order-performs-exactly-like-the-last-one-that-predictability-is-worth-more-than-shaving-a-few-dollars-per-box-45m-annual-volume-across-15-20-active-projects-centralized-purchasing: 400;
--font-simplified-inventory-management: 400;
--font-gc-reviewing-plans-on-site: 700;
--font-principal: 400;
--font-coarse-thread-screws-for-wood-framing-additions-and-repairs: 400;
--font-getting-crews-home-on-time-with-zero-comebacks: 700;
--font-application-type: 700;
--font-last-order-one-tap-away: 400;
--font-careers: 400;
--font-james-rodriguez: 700;
--font-for-standard-2x4-framing-with-12-drywall-1-14-screws-meet-code-minimum-use-1-58-for-ceiling-applications-to-ensure-adequate-penetration-accounting-for-potential-insulation-compression-on-engineered-lumber-i-joists-lvl-verify-fastener-schedules-as-some-manufacturers-require-specific-lengths: 400;
--font-heading-4--account-system: 600;
--font-technical-support-with-jobsite-experience: 400;
--font-materials-manager: 400;
--font-buy-now: 700;
--font-youtube: 400;
--font-the-contractor: 700;
--font-2000-sq-ft-house-8000-10000-drywall-screws-plus-1000-2000-structural-screws: 400;
--font-apartments-condos-townhomes-with-mixed-wood-and-metal-framing-systems: 400;
--font-risk-elimination-on-the-critical-path: 700;
--font-better-architect-and-inspector-relationships: 400;
--font-shop-fine-thread-screws-: 700;
--font-heading: 400;
--font-drywall-screws: 400;
--font-heading-3--the-buyer: 700;
--font-no-price-visibility-required--just-order: 400;
--font-use-1-14-length-for-standard-12-drywall-to-20-gauge-studs-bump-to-1-58-for-58-fire-rated-board-always-verify-stud-gauge-before-ordering-mixing-fine-thread-and-self-drilling-products-on-the-same-project-causes-inventory-confusion: 400;
--font-varies-widely-by-project-5000-10000-screws-typical-for-commercial-tenant-improvement: 400;
--font-framing-screws: 400;
--font-typical-quantities: 700;
--font-alternative-fine-thread-drywall-screws-25-gauge-and-lighter-steel-studs: 400;
--font-select-products-brand-the-pdf-send-under-60-seconds: 400;
--font-iso-documentation: 400;
--font-linkedin: 400;
--font-switched-to-progrip-after-the-third-callback-on-a-40-unit-multi-family-project-stripped-screws-were-killing-our-schedule-and-burning-labor-hours-on-rework-six-months-in-weve-had-zero-fastener-failures-across-three-buildings-crews-are-faster-callbacks-are-down-and-were-back-on-budget-200000-sq-ft-multi-family-complex-mixed-wood-and-metal-framing: 400;
--font-10000-15000-screws-per-1000-sq-ft-depending-on-stud-spacing-and-code-requirements: 400;
--font-heading-4--ordering-engine: 600;
--font-approval-workflow-per-company: 400;
--font-reduced-emergency-supply-runs: 400;
--font-wood-construction-requires-aggressive-thread-engagement-and-clean-cutting-action-without-splitting-dimensional-lumber-progrips-coarse-thread-design-17-tpi-prevents-spinning-and-provides-superior-holding-power-in-spf-syp-engineered-lumber-and-wood-composites-fine-thread-screws-designed-for-metal-will-spin-in-wood-and-fail-to-hold-properly: 400;
--font-request-new-items-directly-to-the-buyer: 400;
--font-brand-guide-elements: 400;
--font-instagram: 400;
--font-reduced-installer-frustration: 400;
--font-i-include-progrip-in-specifications-now-because-i-know-it-wont-cause-delays-or-warranty-callbacks-fastener-failures-dont-show-up-in-my-critical-path-analysis-until-theyve-already-cost-me-days-the-submittal-builder-makes-documentation-easy-for-architects-and-having-technical-data-sheets-on-hand-eliminates-inspector-questions-one-less-thing-to-worry-about-means-i-can-focus-on-bigger-project-risks-commercial-and-light-industrial-gc-12-person-team-15m-annual-revenue: 400;
--font-build-a-submitall: 600;
--font-po-upload-auto-maps-to-orders: 400;
--font-heading-3--the-foreman: 700;
--font-04: 700;
--font-account-balance--po-upload: 400;
--font-pricing-by-category-volume-and-region: 400;
--font-drywall: 400;
--font-heading-2--whyprofessionalcontractorschoose-progrip: 700;
--font-interactive-view: 700;
--font-variety-pack-recommended: 400;
--font-delivery-tracking-without-calling: 400;
--font-heading-4--literature-hub: 600;
--font-for-drywall-coarse-thread-drywall-screws-all-drywall-to-stud-applications: 400;
--font-heading-4--submittals-builder: 600;
--font-03-failure-rate-vs-2-4-industry-average: 400;
--font-order-by-building-section-to-avoid-mixing-screws-on-the-jobsite-label-material-staging-areas-with-application-specific-fastener-types-color-coded-labels-green-for-wood-blue-for-metal-reduceinstallation-errors-on-mixed-framing-projects: 400;
--font-heading-4--customer-dashboard: 600;
--font-framing-foreman: 400;

/* Line Heights */
--leading-pallet--container-pricing-logic: 20px;
--leading-100-hardness-inspection-per-production-lot: 19px;
--leading-mike-torres: 22px;
--leading-getting-crews-home-on-time-with-zero-comebacks: 22px;
--leading-dynamic-pricing-locked-to-her-category--volume: 21px;
--leading-pro-quality-screws-that-wont-slow-down-or-delay-the-job: 20px;
--leading-mountain-states-construction-denver-co: 20px;
--leading-self-drilling-for-quick-penetration: 18px;
--leading-application-guide: 14px;
--leading-admin-buyer-foreman-general-roles: 20px;
--leading-30-reduction-in-cam-out-vs-standard-screws: 19px;
--leading-heading-4--customer-dashboard: 29px;
--leading-average-35-time-savings: 19px;
--leading-shop-fine-thread-screws-: 30px;
--leading-03-failure-rate-vs-2-4-industry-average: 19px;
--leading-eliminated-batch-to-batch-quality-variation: 20px;
--leading-create-and-manage-foreman-sub-accounts: 21px;
--leading-for-wood-studs-coarse-thread-drywall-screws: 22px;
--leading-order-history-by-sku-or-project: 20px;
--leading-every-document-you-need-for-spec-compliance: 22px;
--leading-contractor-focused-bulk-packaging-reduces-cardboard-waste-and-trips-to-the-supply-truck-available-through-major-distributors-nationwide-with-direct-ordering-options-for-volume-accounts-and-technical-support-from-professionals-with-real-construction-experience: 22px;
--leading-light-gauge-steel-construction: 34px;
--leading-primary-fine-thread-drywall-screws-for-25-gauge-systems: 22px;
--leading-build-submittal: 16px;
--leading-2000-sq-ft-house-8000-10000-drywall-screws-plus-1000-2000-structural-screws: 22px;
--leading-spec-progrip-once--every-sub-on-the-job-follows: 21px;
--leading-drywall: 24px;
--leading-strong--result: 21px;
--leading-wood-framed-residential: 34px;
--leading-shop-self-drilling-screws-: 30px;
--leading-the-right-screw-right-when-you-need-it: 63px;
--leading-sarah-chen: 22px;
--leading-8000-pcs: 24px;
--leading-why-this-matters: 17px;
--leading-po-upload-auto-maps-to-orders: 20px;
--leading-for-standard-2x4-framing-with-12-drywall-1-14-screws-meet-code-minimum-use-1-58-for-ceiling-applications-to-ensure-adequate-penetration-accounting-for-potential-insulation-compression-on-engineered-lumber-i-joists-lvl-verify-fastener-schedules-as-some-manufacturers-require-specific-lengths: 22px;
--leading-instant-delivery-confirmation: 20px;
--leading-role-based-access-built-for-how-construction-companies: 22px;
--leading-facebook: 24px;
--leading-renovation--remodel: 34px;
--leading-heading-4--ordering-engine: 29px;
--leading-real-contractors-real-projects-real-results-heres-how-professionals-across-the-supply-chain-rely-on-progrip-to-keep-projects-on-schedule-and-under-budget: 29px;
--leading-the-installer: 38px;
--leading-link-text: 27px;
--leading-variety-pack-recommended: 22px;
--leading-2-tap-reorder-from-any-phone-built-for-one-hand: 22px;
--leading-contact-us: 24px;
--leading-foreman-on-jobsite-with-drillmaterial: 13px;
--leading-better-vendor-relationship-through-consistency: 20px;
--leading-wood-construction-requires-aggressive-thread-engagement-and-clean-cutting-action-without-splitting-dimensional-lumber-progrips-coarse-thread-design-17-tpi-prevents-spinning-and-provides-superior-holding-power-in-spf-syp-engineered-lumber-and-wood-composites-fine-thread-screws-designed-for-metal-will-spin-in-wood-and-fail-to-hold-properly: 23px;
--leading-linkedin: 24px;
--leading-available-through-500-distributors-nationwide: 19px;
--leading-eliminates-callbacks-from-stripped-fasteners-on-high-square-footage-projects-self-drilling-point-saves-30--40-installation-time-vs-pre-drilling-consistent-performance-means-predictable-labor-costs-and-on--schedule-completion-wrong-thread-type-causes-stripped-screws-in-metal-studs-resulting-in-rework-and-schedule-delays: 23px;
--leading-existing-building-retrofit-tenant-improvements-selective-demolition-and-rebuild: 22px;
--leading-this-is-a-dedicated-section-promoting-web-and-app-features-the-platform-is-not-a-feature--its-the-retention-strategy: 21px;
--leading-faster-installation: 16px;
--leading-typical-quantities: 17px;
--leading-reduced-emergency-supply-runs: 20px;
--leading-choose-the-right-screw: 63px;
--leading-brand-guide-elements: 13px;
--leading-heading-4--submittals-builder: 29px;
--leading-commercial-drywall-installation: 34px;
--leading-reorder-any-sku-in-2-taps-from-his-phone: 21px;
--leading-no-price-visibility-required--just-order: 21px;
--leading-multi-family-framing: 34px;
--leading-no-account-required-to-start: 20px;
--leading-astm-c1002--c954-certified: 19px;
--leading-icc-es-reports-for-structural-screws: 19px;
--leading-switched-to-progrip-after-the-third-callback-on-a-40-unit-multi-family-project-stripped-screws-were-killing-our-schedule-and-burning-labor-hours-on-rework-six-months-in-weve-had-zero-fastener-failures-across-three-buildings-crews-are-faster-callbacks-are-down-and-were-back-on-budget-200000-sq-ft-multi-family-complex-mixed-wood-and-metal-framing: 25px;
--leading-bidding-a-project-and-needs-a-product-submittal-in-under-60-seconds: 20px;
--leading-use-1-14-length-for-standard-12-drywall-to-20-gauge-studs-bump-to-1-58-for-58-fire-rated-board-always-verify-stud-gauge-before-ordering-mixing-fine-thread-and-self-drilling-products-on-the-same-project-causes-inventory-confusion: 22px;
--leading-reduced-failures: 29px;
--leading-consistent-hardness-rating-hrc-52--56-across-every-production-batch-ensures-predictable-torque-performance-without-brittleness-or-stripping-our-03-failure-rate-is-up-to-10x-better-than-industry-average: 22px;
--leading-retail-storefronts-medical-offices-any-project-with-engineered-light-gauge-steel-systems: 22px;
--leading-framing-screws: 21px;
--leading-graphical-system-details: 32px;
--leading-account-balance--po-upload: 20px;
--leading-why-progrip: 14px;
--leading-residential-framing-guide-: 30px;
--leading-coarse-thread-drywall-screws: 33px;
--leading-structural-framing-screws-for-blocking-and-reinforcement: 22px;
--leading-build-submittal-: 30px;
--leading--6x1---78: 24px;
--leading-03: 16px;
--leading-recommended-products: 17px;
--leading-heading-4--account-system: 29px;
--leading-follow-us: 27px;
--leading-persona-testimonials: 14px;
--leading-professional-grade-fasteners--professional-grade-platform: 18px;
--leading-pro-tip: 17px;
--leading-pricing-by-category-volume-and-region: 22px;
--leading-heading-3--the-gc: 26px;
--leading-plan-multi-family-project-: 30px;
--leading-primary-self-drilling-drywall-screws-20-gauge-steel-studs-and-heavier: 22px;
--leading-material-you-can-trust-at-scale: 22px;
--leading-for-structure-structural-framing-screws-9-x-3-typical: 22px;
--leading-10000-15000-screws-per-1000-sq-ft-depending-on-stud-spacing-and-code-requirements: 22px;
--leading-free-freight-thresholds: 20px;
--leading-set-drill-clutch-between-15-18-for-optimal-depth-control-on-25-gauge-systems-replace-phillips-bits-every-1000-screws-to-maintain-consistent-drive-performance-worn-bits-increase-cam-out-frequency-and-damage-screw-heads-test-clutch-settings-on-scrap-material-before-production-driving: 22px;
--leading-single-family-homes-additions-wood-framed-townhomes-and-multi-family: 22px;
--leading-highlights: 16px;
--leading-heading-3--the-foreman: 26px;
--leading-keep-a-variety-pack-in-the-truck-2000-fine-thread-2000-coarse-thread-500-structural-better-to-have-three-types-on-hand-than-make-a-supply-run-mid-day-when-you-discover-mixed-framing-most-renovation-delays-come-from-material-trips-not-installation-time: 22px;
--leading-get-updates-on-new-products-and-job-site-tips: 27px;
--leading-cookies-settings: 22px;
--leading-direct-ordering-for-volume-accounts: 19px;
--leading-reduced-delays-from-material-failures: 20px;
--leading-all-jobs-orders-and-deliveries-in-one-dashboard: 21px;
--leading-metal-studs: 24px;
--leading-careers: 24px;
--leading-renovation-project-guide-: 30px;
--leading-installer: 14px;
--leading-build-a-branded-submittal-pdf-in-under-60-seconds: 21px;
--leading-project-types: 17px;
--leading-professional-contractors-match-fasteners-to-substrates-for-optimal-performance-and-code-compliance-heres-how-to-spec-progrip-screws-across-common-construction-applications: 29px;
--leading-faster-installation-means-more-projects-per-year: 20px;
--leading-alternative-fine-thread-drywall-screws-25-gauge-and-lighter-steel-studs: 22px;
--leading-and-lastly-we-would-like-to-see-a-few-more-graphical-elements-from-the-progrip-branding-guide-into-this-website-design-specifically-we-would-like-to-see-thread-texturereticle-mark-targeting--action-icon-split-panel: 26px;
--leading-shareable-direct-link: 20px;
--leading-rodriguez-construction-group-phoenix-az: 20px;
--leading-shop-variety-packs-: 30px;
--leading-heading-4--mobile-reorder: 29px;
--leading-sds-leed-iso-docs-always-current-alwaysdownloadable: 21px;
--leading-heading-3--the-buyer: 26px;
--leading-heading-2--whyprofessionalcontractorschoose-progrip: 65px;
--leading-application-type: 17px;
--leading-40-60-units-100000-150000-drywall-screws-plus-10000-20000-structural-screws: 22px;
--leading-office-build-outs-retail-spaces-commercial-interior-partitions: 22px;
--leading-40-less-penetration-force-on-self--drilling-points: 19px;
--leading-complete-submittal-documentation-online: 19px;
--leading-for-structure-structural-framing-screws-blocking-rim-boards-subfloor-ledgers: 22px;
--leading-po-upload-maps-automatically--no-manual-entry: 21px;
--leading-about-us: 24px;
--leading-simplified-inventory-management: 20px;
--leading-: 21px;
--leading-varies-widely-by-project-5000-10000-screws-typical-for-commercial-tenant-improvement: 22px;
--leading-for-your-application: 63px;
--leading-request-to-buyer-for-new-skus: 20px;
--leading-leed--certifications: 20px;
--leading-eliminated-rework-from-stripped-fasteners: 20px;
--leading-installer-kit-: 30px;
--leading-coarse-thread-screws: 24px;
--leading-for-metal-studs-self-drilling-screws-20-gauge-or-fine-thread-25-gauge: 22px;
--leading-full-traceability-by-lot-number: 19px;
--leading-metal-stud-screws: 28px;
--leading-buy-now: 16px;
--leading-heading: 60px;
--leading-text: 30px;
--leading-request-new-items-directly-to-the-buyer: 21px;
--leading-fine-thread-drywall-screws-for-existing-metal-stud-systems-often-25-gauge-in-older-buildings: 22px;
--leading-contractor: 14px;
--leading-privacy-policy: 22px;
--leading-secondary-self-drilling-screws-for-20-gauge-track-and-stud-connections: 22px;
--leading-button: 30px;
--leading-apartments-condos-townhomes-with-mixed-wood-and-metal-framing-systems: 22px;
--leading-saved-project-history: 20px;
--leading-placeholder: 27px;
--leading-browse-all: 24px;
--leading-view-all: 24px;
--leading-drywall-screws: 28px;
--leading-no-account-required-to-start--experience-first: 21px;
--leading-resources: 24px;
--leading-terms-of-service: 22px;
--leading-framing-foreman: 20px;
--leading-reduced-installer-frustration: 20px;
--leading-materials-manager: 20px;
--leading-weight--22-lb: 24px;
--leading-categories: 16px;
--leading-instagram: 24px;
--leading-meets-all-standards: 29px;
--leading-for-drywall-coarse-thread-drywall-screws-all-drywall-to-stud-applications: 22px;
--leading-mixed-material-projects-require-reliable-fasteners-across-all-substrates-without-switching-suppliers-or-dealing-with-inconsistent-quality-stocking-progrip-across-product-types-means-consistent-performance-simplified-ordering-and-one-supplier-relationship-for-the-entire-project-eliminates-the-good-for-wood-bad-for-metal-problem-with-generic-fasteners: 23px;
--leading-by-subscribing-you-agree-to-our-privacy-policy-and-consent-to-receive-updates-from-pro-grip: 18px;
--leading-shop-coarse-thread-screws-: 30px;
--leading-05: 16px;
--leading--2026-pro-grip-all-rights-reserved: 22px;
--leading-: 20px;
--leading-full-compliance-with-astm-c1002-and-astm-c954-structural-framing-screws-carry-icc-es-evaluation-reports-for-code-required-load--bearing-applications-technical-data-sheets-and-compliance-documentation-are-available-for-submittal-packages: 22px;
--leading-learn-more: 16px;
--leading-youtube: 24px;
--leading-better-architect-and-inspector-relationships: 20px;
--leading-for-pros: 24px;
--leading-risk-elimination-on-the-critical-path: 22px;
--leading-renovation-work-means-unknown-or-mixed-framingconditions-behind-existing-finishes-you-cant-reliablypredict-what-substrate-youll-encounter-until-demo-is-complete-progrips-consistent-performance-eliminates-surprises-across-all-materials-when-youre-not-sure-whats-behind-the-wall-you-need-fasteners-you-can-trust-in-any-substrate-without-callbacks: 23px;
--leading-approval-workflow-per-company: 20px;
--leading-predictable-labor-costs-per-square-foot: 20px;
--leading-i-include-progrip-in-specifications-now-because-i-know-it-wont-cause-delays-or-warranty-callbacks-fastener-failures-dont-show-up-in-my-critical-path-analysis-until-theyve-already-cost-me-days-the-submittal-builder-makes-documentation-easy-for-architects-and-having-technical-data-sheets-on-hand-eliminates-inspector-questions-one-less-thing-to-worry-about-means-i-can-focus-on-bigger-project-risks-commercial-and-light-industrial-gc-12-person-team-15m-annual-revenue: 25px;
--leading-lower-warranty-risk-on-completed-projects: 20px;
--leading-interactive-view: 16px;
--leading-open-account-: 30px;
--leading-order-by-building-section-to-avoid-mixing-screws-on-the-jobsite-label-material-staging-areas-with-application-specific-fastener-types-color-coded-labels-green-for-wood-blue-for-metal-reduceinstallation-errors-on-mixed-framing-projects: 22px;
--leading-01: 16px;
--leading-back-office-managing-5-jobs-and-3-suppliers-from-a-spreadsheet-and-need-a-better-solution: 20px;
--leading-delivery-confirmation-with-eta--right-on-his-screen: 21px;
--leading-installer-app-: 21px;
--leading-distributor: 14px;
--leading-buyers-create-foreman-sub-accounts: 20px;
--leading-materials-manager-with-inventory: 13px;
--leading-build-a-submitall: 21px;
--leading-heading-4--literature-hub: 29px;
--leading-the-contractor: 38px;
--leading-light-gauge-installation-tips-: 30px;
--leading-open-company-account-: 21px;
--leading-04: 16px;
--leading-products: 27px;
--leading-heat-treated-phillips-drive-resists-cam-out-up-to-30-better-than-standard-screws-maintaining-positive-bit-engagement-under-high-torque-self-drilling-points-reduce-penetration-force-by-40-eliminating-the-pre-drill-step-on-steel-studs-up-to-20-gauge: 22px;
--leading-6x1-14: 24px;
--leading-light-gauge-steel-systems-are-extremely-unforgiving-over-torque-by-even-small-amounts-and-you-strip-out-the-thin-metal-under-torque-and-you-get-movement-cracks-and-fastener-pop-progrips-precision-thread-design-and-consistent-hardness-hrc-52-56-provide-the-narrow-torque-window-these-engineered-systems-require-generic-screws-with-batch-variation-cause-constant-stripping: 23px;
--leading-heavy-duty: 24px;
--leading-technical-support-with-jobsite-experience: 19px;
--leading-12-15-screws-per-sheet-8000-12000-per-1000-sq-ft-depending-on-system: 22px;
--leading-contact-for-volume-pricing-: 30px;
--leading-principal: 20px;
--leading-every-job-every-order-every-delivery-one-login-one-screen: 22px;
--leading-sds--technical-sheets: 20px;
--leading-delivery-tracking-without-calling: 20px;
--leading-what-matters: 13px;
--leading-apex-commercial-builders-boston-ma: 20px;
--leading-gc-reviewing-plans-on-site: 13px;
--leading-fast-bite-performance-for-stronger-day-to-day-applications: 18px;
--leading-02: 16px;
--leading-tagline: 24px;
--leading-coarse-thread-screws-for-wood-framing-additions-and-repairs: 22px;
--leading-last-order-one-tap-away: 20px;
--leading-select-products-brand-the-pdf-send-under-60-seconds: 22px;
--leading-x: 24px;
--leading-built-for-pros: 29px;
--leading-james-rodriguez: 22px;
--leading-built-for-demanding-assemblies-where-strength-matters-most: 18px;
--leading-company: 27px;
--leading-consistent-quality-means-i-can-order-by-the-pallet-without-worrying-about-bad-batches-we-used-to-have-the-hot-batch-cold-batch-problem-where-one-pallet-would-drive-perfectly-and-the-next-would-strip-constantly-with-progrip-every-order-performs-exactly-like-the-last-one-that-predictability-is-worth-more-than-shaving-a-few-dollars-per-box-45m-annual-volume-across-15-20-active-projects-centralized-purchasing: 25px;
--leading-view-installation-guide-: 30px;
--leading-iso-documentation: 20px;
--leading-when-project-timelines-are-tight-and-callbacks-kill-profit-you-need-fasteners-that-perform-exactly-as-expected-every-single-time-heres-what-sets-progrip-apart-from-retail-grade-alternatives: 29px;
--leading-the-distributor: 38px;
--leading-simplified-submittal-process: 20px;

```

### Spacing

```css
/* Spacing Scale */
--space-1: 1px;
--space-2: 1px;
--space-3: 3px;
--space-6: 8px;
--space-24: 15px;
--space-4: 4px;
--space-5: 5px;
--space-8: 9px;
--space-10: 10px;
--space-12: 12px;
--space-16: 13px;
--space-20: 14px;
```

### Border Radius

```css
--radius-sm: 1px;
--radius-md: 8px;
--radius-lg: 9999px;
--radius-full: 9999px; /* Full radius (circles) */
```

### Shadows

```css
--shadow-button: 0px 2px 2px #050904;
--shadow-main: 0px 35px 120px #000000;
--shadow-main: 0px 1px 0px 1px #FFFFFF;
--shadow-01: 0px 0px 45px #E51216;
```

## Layout Specifications

### Main Layout

- **Header Height**: 162px

## Exported Assets

| Asset | File | Format | Scale |
|-------|------|--------|-------|
| logos_PROGRIP_SCREWS_WHITE | `figma-assets/logos-progrip-screws-white.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image.png` | PNG | 1x |
| Product | `figma-assets/product.png` | PNG | 1x |
| logos_PROGRIP_SCREWS_WHITE | `figma-assets/logos-progrip-screws-white-2.png` | PNG | 1x |
| Fine 6x1-1_4 Screw 1 3 | `figma-assets/fine-6x1-1-4-screw-1-3.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image-2.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image-2.png` | PNG | 1x |
| Product | `figma-assets/product-2.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image-2.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image-2.png` | PNG | 1x |
| Product | `figma-assets/product-2.png` | PNG | 1x |
| hf_20260415_174442_908bd4d7-08dd-4e4d-b7dd-15478bd19668 1 | `figma-assets/hf-20260415-174442-908bd4d7-08dd-4e4d-b7dd-15478bd19668-1.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Fine 6x1-1_4 Screw 1 1 | `figma-assets/fine-6x1-1-4-screw-1-1.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Product | `figma-assets/product-2.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Card | `figma-assets/card.png` | PNG | 1x |
| Gradient | `figma-assets/gradient.png` | PNG | 1x |
| Background | `figma-assets/background.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Header / 145 / | `figma-assets/header--145-.png` | PNG | 1x |
| Layout / 394 / | `figma-assets/layout--394-.png` | PNG | 1x |
| hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 1 | `figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-1-2.png` | PNG | 1x |
| hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 1 | `figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-1.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Placeholder Image | `figma-assets/placeholder-image-2.png` | PNG | 1x |
| Gradient | `figma-assets/gradient-2.png` | PNG | 1x |
| Product | `figma-assets/product-2.png` | PNG | 1x |
| Product | `figma-assets/product-2.png` | PNG | 1x |
| hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 2 | `figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-2.png` | PNG | 1x |
| A7C00779 1 | `figma-assets/a7c00779-1.png` | PNG | 1x |
| Product / 4 / | `figma-assets/product--4-.png` | PNG | 1x |

## Component Tree

Hierarchical node descriptions. Each indented line is a child.
Format: `[TYPE] Name WxH | property:value ...`

```
[FRAME] Refined Version - New | 1920x11540
  [RECTANGLE] hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 1 | 1951x1458 | asset:figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-1-2.png
  [RECTANGLE] hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 2 | 1951x1458 | asset:figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-2.png
  [RECTANGLE] hf_20260415_181153_cfcf7a64-31e0-42d9-9767-997585e8b793 1 | 1951x1458 | asset:figma-assets/hf-20260415-181153-cfcf7a64-31e0-42d9-9767-997585e8b793-1.png
  [RECTANGLE] hf_20260415_174442_908bd4d7-08dd-4e4d-b7dd-15478bd19668 1 | 1922x1435 | asset:figma-assets/hf-20260415-174442-908bd4d7-08dd-4e4d-b7dd-15478bd19668-1.png
  [FRAME] Header / 145 / | 1920x1014 | layout:VERTICAL | asset:figma-assets/header--145-.png
    [FRAME] Content | 1920x728 | layout:VERTICAL | pad:112,64,112,64 | gap:80
      [FRAME] Content | 1792x504 | layout:VERTICAL | gap:24
  [FRAME] CTA / 65 / | 1920x506 | layout:VERTICAL | pad:120,0,120,0
    [FRAME] Frame 30 | 263x521
      [VECTOR] Retângulo 7 | 204x1080
      [VECTOR] Retângulo 7 copiar | 204x1080
    [BOOLEAN_OPERATION] Subtract
    [BOOLEAN_OPERATION] Subtract
    [BOOLEAN_OPERATION] Subtract
    [FRAME] Content | 860x266 | layout:VERTICAL | gap:41
      [FRAME] Frame 29 | 860x165 | layout:VERTICAL | gap:24
        [TEXT] Heading | 860x120 | "Built for pros, Ready for the job!" | font:Russo One/60px/w400 | align:CENTER
        [TEXT] Text | 860x21 | "Pro-Grip screws are engineered to help you work faster, smarter, and with total ..." | font:Inter/14px/w400 | align:CENTER
      [FRAME] Actions | 454x60 | layout:HORIZONTAL | gap:24
        [FRAME] Button | 215x60 | layout:HORIZONTAL | pad:18,28,18,28 | gap:8
          [TEXT] Button | 47x30 | "Order" | font:Barlow Condensed/20px/w700 | align:LEFT
        [FRAME] Button | 215x60 | layout:HORIZONTAL | pad:18,28,18,28 | gap:8 | shadow:DROP_SHADOW/0,2,2/#050904
          [TEXT] Button | 66x30 | "Contact" | font:Barlow Condensed/20px/w700 | align:LEFT
  [VECTOR] Retângulo 7 | 275x1106
  [VECTOR] Retângulo 7 copiar | 275x1106
  [FRAME] Navbar / 1 / | 1920x130 | layout:VERTICAL | pad:0,64,0,64
    [FRAME] Container | 1440x60 | layout:HORIZONTAL | gap:32
      [RECTANGLE] logos_PROGRIP_SCREWS_WHITE | 314x60 | asset:figma-assets/logos-progrip-screws-white-2.png
      [FRAME] Column | 865x60 | layout:HORIZONTAL | gap:32
        [FRAME] Nav links | 387x30 | layout:HORIZONTAL | gap:32
          [FRAME] Link | 81x30 | layout:HORIZONTAL | gap:4
            [TEXT] Link text | 81x30 | "Products" | font:Oswald/20px/w400 | align:LEFT
          [FRAME] Link | 51x30 | layout:HORIZONTAL | gap:4
            [TEXT] Link text | 51x30 | "About" | font:Oswald/20px/w400 | align:LEFT
          [FRAME] Link | 88x30 | layout:HORIZONTAL | gap:4
            [TEXT] Link text | 88x30 | "Resources" | font:Oswald/20px/w400 | align:LEFT
          [FRAME] Link | 71x30 | layout:HORIZONTAL | gap:4
            [FRAME] Nav Link Dropdown | 71x30 | layout:HORIZONTAL | gap:4
              [TEXT] Link text | 43x30 | "More" | font:Oswald/20px/w400 | align:LEFT
              [FRAME] Chevron Down | 24x24
                [VECTOR] Vector | 13x7
            [FRAME] Menu | 116x161 | radius:8 | layout:VERTICAL | pad:24,24,24,24 | gap:16
              [TEXT] Link text | 63x27 | "Contact" | font:Barlow/18px/w400 | align:LEFT
              [TEXT] Link text | 63x27 | "FAQ" | font:Barlow/18px/w400 | align:LEFT
              [TEXT] Link text | 63x27 | "Blog" | font:Barlow/18px/w400 | align:LEFT
        [FRAME] Actions | 446x60 | layout:HORIZONTAL | gap:16
          [INSTANCE] Button | 215x60 | layout:HORIZONTAL | pad:8,20,8,20 | gap:8
            [TEXT] Button | 74x30 | "Account" | font:Oswald/20px/w500 | align:LEFT
          [INSTANCE] Button | 215x60 | layout:HORIZONTAL | pad:8,20,8,20 | gap:8
            [TEXT] Button | 54x30 | "Order" | font:Oswald/20px/w500 | align:LEFT
  [GROUP] Group 15 | 20x25
    [VECTOR] Vector | 20x25
  [FRAME] Frame 2 | 1190x135 | layout:HORIZONTAL
    [FRAME] Paragraph+Background+VerticalBorder | 357x119
      [FRAME] Frame 23 | 326x85 | layout:HORIZONTAL | gap:28
        [TEXT] 01 | 22x28 | "01" | font:Barlow Condensed/28px/w900 | align:LEFT
        [FRAME] Frame 22 | 276x85 | layout:VERTICAL
          [FRAME] Frame 39 | 276x85 | layout:VERTICAL | gap:20
            [TEXT] Heading 3 → The Foreman | 276x26 | "The installer" | font:Oswald/24px/w700 | align:LEFT
            [TEXT] Pro Quality Screws that won’t slow down or delay the job. | 276x39 | "Pro Quality Screws that won’t slow down or delay the job." | font:Barlow/16px/w400 | align:LEFT
    [FRAME] Paragraph+Background+VerticalBorder | 357x119
      [FRAME] Frame 24 | 317x105 | layout:HORIZONTAL | gap:24
        [TEXT] 02 | 26x28 | "02" | font:Barlow Condensed/28px/w900 | align:LEFT
        [FRAME] Frame 21 | 267x105 | layout:VERTICAL | gap:20
          [FRAME] Frame 38 | 267x105 | layout:VERTICAL | gap:20
            [TEXT] Heading 3 → The Buyer | 267x26 | "The distributor" | font:Oswald/24px/w700 | align:LEFT
            [TEXT] Back office, managing 5 jobs and 3 suppliers from a spreadsheet. And need a better solution. | 267x59 | "Back office, managing 5 jobs and 3 suppliers from a spreadsheet. And need a bett..." | font:Barlow/16px/w400 | align:LEFT
    [FRAME] Paragraph+Background+VerticalBorder | 357x119
      [FRAME] Frame 25 | 301x105 | layout:HORIZONTAL | gap:24
        [TEXT] 03 | 26x28 | "03" | font:Barlow Condensed/28px/w900 | align:LEFT
        [FRAME] Frame 20 | 251x105 | layout:VERTICAL
          [FRAME] Frame 40 | 251x105 | layout:VERTICAL | gap:20
            [TEXT] Heading 3 → The GC | 251x26 | "the contractor" | font:Oswald/24px/w700 | align:LEFT
            [TEXT] Bidding a project and needs a product submittal in under 60 seconds. | 251x59 | "Bidding a project and needs a product submittal in under 60 seconds." | font:Barlow/16px/w400 | align:LEFT
  [FRAME] Layout / 394 / | 1920x903 | layout:VERTICAL | pad:112,64,112,64 | gap:80 | asset:figma-assets/layout--394-.png
    [FRAME] Container | 1440x805 | layout:VERTICAL | gap:80
      [FRAME] Section Title | 768x214 | layout:VERTICAL | gap:16
        [FRAME] Tagline Wrapper | 162x24 | layout:HORIZONTAL | pad:0,20,0,5 | gap:5
          [RECTANGLE] Rectangle 4 | 24x2
          [TEXT] Tagline | 108x24 | "The Pro system" | font:Oswald/16px/w600 | align:LEFT
        [FRAME] Content | 927x174 | layout:VERTICAL | gap:24
          [FRAME] Frame 31 | 927x120 | layout:HORIZONTAL | gap:40
            [TEXT] Heading | 927x120 | "The right screw Right when you need it" | font:Oswald/60px/w700 | align:LEFT
          [TEXT] Text | 927x30 | "Three proven fasteners engineered for the work that matters" | font:Barlow Condensed/20px/w400 | align:LEFT
      [FRAME] Component | 1440x446 | layout:VERTICAL | gap:32
        [FRAME] Row | 1440x411 | layout:HORIZONTAL | gap:2
          [FRAME] Card | 488x411 | layout:VERTICAL
            [FRAME] Content | 488x411 | layout:VERTICAL | pad:32,32,32,32
              [FRAME] Frame 26 | 424x300 | layout:VERTICAL | gap:24
                [FRAME] Content Top | 424x144 | layout:VERTICAL | gap:25
                  [FRAME] Tagline Wrapper | 103x24 | layout:HORIZONTAL | pad:0,5,0,5
                    [TEXT] Tagline | 93x24 | "01 — Installer" | font:Oswald/16px/w600 | align:LEFT
                  [FRAME] Content | 424x95 | layout:VERTICAL | gap:16
                    [TEXT] Heading | 424x50 | "THE INSTALLER" | font:Oswald/50px/w700 | align:LEFT
                    [TEXT] Text | 424x29 | "Pro Quality Screws that won’t slow down or delay the job." | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 353x118
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] Reorder any SKU in 2 taps from his phone | 276x21 | "Reorder any SKU in 2 taps from his phone" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] Request new items directly to the Buyer | 265x21 | "Request new items directly to the Buyer" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] Delivery confirmation with ETA — right on his screen | 347x21 | "Delivery confirmation with ETA — right on his screen" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] No price visibility required — just order | 258x21 | "No price visibility required — just order" | font:Inter/14px/w400 | align:LEFT
              [FRAME] Frame 10 | 424x61 | layout:VERTICAL | pad:20,0,20,0 | gap:40
                [TEXT] Installer App → | 164x21 | "Installer App →" | font:Oswald/20px/w600 | align:LEFT
          [FRAME] Card | 488x411 | layout:VERTICAL | asset:figma-assets/card.png
            [FRAME] Content | 488x411 | layout:VERTICAL | pad:32,32,32,32
              [FRAME] Frame 27 | 424x300 | layout:VERTICAL | gap:24
                [FRAME] Content Top | 424x136 | layout:VERTICAL | gap:25
                  [FRAME] Tagline Wrapper | 121x24 | layout:HORIZONTAL | pad:0,5,0,5
                    [TEXT] Tagline | 111x24 | "02 — Distributor" | font:Oswald/16px/w600 | align:LEFT
                  [FRAME] Content | 424x87 | layout:VERTICAL | gap:16
                    [TEXT] Heading | 424x50 | "The DISTRIBUTOR" | font:Oswald/50px/w700 | align:LEFT
                    [TEXT] Text | 424x21 | ""5 jobs. 3 suppliers. One spreadsheet."" | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 353x118
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] All jobs, orders, and deliveries in one dashboard | 317x21 | "All jobs, orders, and deliveries in one dashboard" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] Create and manage foreman sub-accounts | 284x21 | "Create and manage foreman sub-accounts" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] PO upload maps automatically — no manual entry | 329x21 | "PO upload maps automatically — no manual entry" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 353x22
                    [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                    [TEXT] Dynamic pricing locked to her category + volume | 325x21 | "Dynamic pricing locked to her category + volume" | font:Inter/14px/w400 | align:LEFT
              [FRAME] Frame 10 | 424x61 | layout:VERTICAL | pad:20,0,20,0 | gap:40
                [TEXT] Open Company Account → | 259x21 | "Open Company Account →" | font:Oswald/20px/w600 | align:LEFT
          [FRAME] Content | 459x411 | layout:VERTICAL | pad:32,32,32,32
            [FRAME] Frame 28 | 395x308 | layout:VERTICAL | gap:24
              [FRAME] Content Top | 395x136 | layout:VERTICAL | gap:25
                [FRAME] Tagline Wrapper | 120x24 | layout:HORIZONTAL | pad:0,5,0,5
                  [TEXT] Tagline | 110x24 | "03 — Contractor" | font:Oswald/16px/w600 | align:LEFT
                [FRAME] Content | 395x87 | layout:VERTICAL | gap:16
                  [TEXT] Heading | 395x50 | "The cONTRACTOR" | font:Oswald/50px/w700 | align:LEFT
                  [TEXT] Text | 395x21 | ""Submittal due in an hour. Rep isn't answering."" | font:Inter/14px/w400 | align:LEFT
              [FRAME] List | 353x138
                [FRAME] Item | 353x22
                  [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                  [TEXT] Build a branded submittal PDF in under 60 seconds | 339x21 | "Build a branded submittal PDF in under 60 seconds" | font:Inter/14px/w400 | align:LEFT
                [FRAME] Item | 353x22
                  [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                  [TEXT] No account required to start — experience first | 313x21 | "No account required to start — experience first" | font:Inter/14px/w400 | align:LEFT
                [FRAME] Item | 353x42
                  [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                  [TEXT] SDS, LEED, ISO docs always current, alwaysdownloadable | 383x42 | "SDS, LEED, ISO docs always current, alwaysdownloadable" | font:Inter/14px/w400 | align:LEFT
                [FRAME] Item | 353x22
                  [TEXT] › | 5x21 | "›" | font:Barlow/14px/w600 | align:LEFT
                  [TEXT] Spec ProGrip once — every sub on the job follows | 332x21 | "Spec ProGrip once — every sub on the job follows" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Frame 12 | 395x61 | layout:VERTICAL | gap:40
              [FRAME] Frame 10 | 395x61 | layout:VERTICAL | pad:20,0,20,0 | gap:40
                [TEXT] build a submitall | 180x21 | "build a submitall" | font:Oswald/20px/w600 | align:LEFT
      [TEXT] 05 | 76x60 | "05" | font:Russo One/60px/w400 | align:LEFT
  [FRAME] Frame 35 | 1434x1405 | layout:HORIZONTAL | gap:27
    [FRAME] Application 2 | 460x1405
      [FRAME] Container | 459x957 | layout:VERTICAL | pad:34,32,40,32 | gap:16
        [FRAME] Container | 395x15 | layout:HORIZONTAL | gap:12
          [FRAME] Container | 15x15 | layout:VERTICAL
            [TEXT] 02 | 15x15 | "02" | font:Arial/13px/w700 | align:LEFT
          [RECTANGLE] Horizontal Divider | 368x1
        [FRAME] Container | 395x26 | layout:VERTICAL | pad:13,0,0,0
          [TEXT] Application Type | 395x13 | "Application Type" | font:Arial/11px/w700 | align:LEFT
        [FRAME] Heading 3 | 395x68 | layout:VERTICAL
          [TEXT] MULTI-FAMILY FRAMING | 395x68 | "MULTI-FAMILY FRAMING" | font:Russo One/32px/w400 | align:LEFT
        [FRAME] Container | 395x82 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x17 | layout:VERTICAL
            [TEXT] Project Types | 395x17 | "Project Types" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Apartments, condos, townhomes with mixed wood and metal framing systems | 395x44 | "Apartments, condos, townhomes with mixed wood and metal framing systems" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 395x162 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x17 | layout:VERTICAL
            [TEXT] Recommended Products | 395x17 | "Recommended Products" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x23 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] For Wood Studs: Coarse Thread Drywall Screws | 395x22 | "For Wood Studs: Coarse Thread Drywall Screws" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] For Metal Studs: Self-Drilling Screws (20-gauge) or Fine Thread (25-gauge) | 395x44 | "For Metal Studs: Self-Drilling Screws (20-gauge) or Fine Thread (25-gauge)" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] For Structure: Structural Framing Screws (#9 x 3" typical) | 395x44 | "For Structure: Structural Framing Screws (#9 x 3" typical)" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 395x210 | layout:VERTICAL | pad:13,0,13,0 | gap:8
          [FRAME] Container | 395x17 | layout:VERTICAL
            [TEXT] Why This Matters | 395x17 | "Why This Matters" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x159 | layout:VERTICAL
            [TEXT] Mixed-material projects require reliable fasteners across all substrates without switching suppliers or dealing with inconsistent quality. Stocking PROGRIP across product types means consistent performance, simplified ordering, and one supplier relationship for the entire project. Eliminates the "good for wood, bad for metal" problem with generic fasteners. | 395x159 | "Mixed-material projects require reliable fasteners across all substrates without..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] VerticalBorder | 395x136 | layout:VERTICAL | pad:0,0,0,19 | gap:8
          [FRAME] Container | 376x17 | layout:VERTICAL
            [TEXT] Pro Tip | 376x17 | "Pro Tip" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 376x111 | layout:VERTICAL
            [TEXT] Order by building section to avoid mixing screws on the jobsite. Label material staging areas with application-specific fastener types. Color-coded labels (green for wood, blue for metal) reduceinstallation errors on mixed-framing projects. | 376x111 | "Order by building section to avoid mixing screws on the jobsite. Label material ..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] Container | 395x78 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x13 | layout:VERTICAL
            [TEXT] Typical Quantities | 395x13 | "Typical Quantities" | font:Arial/11px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] 40-60 units: 100,000-150,000 drywall screws plus 10,000-20,000 structural screws | 395x44 | "40-60 units: 100,000-150,000 drywall screws plus 10,000-20,000 structural screws" | font:Inter/14px/w400 | align:LEFT
      [FRAME] Background | 459x220 | layout:VERTICAL | pad:28,28,28,28 | gap:99
        [RECTANGLE] Gradient | 459x220 | asset:figma-assets/gradient-2.png
      [FRAME] Frame 24 | 460x132 | layout:VERTICAL | gap:12
        [FRAME] Background+Border | 396x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] PLAN MULTI-FAMILY PROJECT → | 286x30 | "PLAN MULTI-FAMILY PROJECT →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Border | 396x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] CONTACT FOR VOLUME PRICING → | 308x30 | "CONTACT FOR VOLUME PRICING →" | font:Oswald/20px/w700 | align:LEFT
    [FRAME] Application 1 | 460x1405
      [FRAME] Container | 459x908 | layout:VERTICAL | pad:34,32,40,32 | gap:16
        [FRAME] Container | 395x15 | layout:HORIZONTAL | gap:12
          [FRAME] Container | 15x15 | layout:VERTICAL
            [TEXT] 01 | 15x15 | "01" | font:Arial/13px/w700 | align:LEFT
          [RECTANGLE] Horizontal Divider | 368x1
        [FRAME] Container | 395x26 | layout:VERTICAL | pad:13,0,0,0
          [TEXT] Application Type | 395x13 | "Application Type" | font:Arial/11px/w700 | align:LEFT
        [FRAME] Heading 3 | 395x69 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] COMMERCIAL DRYWALL INSTALLATION | 395x68 | "COMMERCIAL DRYWALL INSTALLATION" | font:Russo One/32px/w400 | align:LEFT
        [FRAME] Container | 395x81 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x17 | layout:VERTICAL
            [TEXT] Project Types | 395x17 | "Project Types" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Office build-outs, retail spaces, commercial interior partitions | 395x44 | "Office build-outs, retail spaces, commercial interior partitions" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 395x133 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x17 | layout:VERTICAL
            [TEXT] Recommended Products | 395x17 | "Recommended Products" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Primary: Self-Drilling Drywall Screws (20-gauge steel studs and heavier) | 395x44 | "Primary: Self-Drilling Drywall Screws (20-gauge steel studs and heavier)" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Alternative: Fine Thread Drywall Screws (25-gauge and lighter steel studs) | 395x44 | "Alternative: Fine Thread Drywall Screws (25-gauge and lighter steel studs)" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 395x193 | layout:VERTICAL | pad:13,0,0,0 | gap:8
          [FRAME] Container | 395x13 | layout:VERTICAL
            [TEXT] Why This Matters | 395x13 | "Why This Matters" | font:Arial/11px/w400 | align:LEFT
          [FRAME] Container | 395x159 | layout:VERTICAL
            [TEXT] Eliminates callbacks from stripped fasteners on high-square-footage projects. Self-drilling point saves 30- 40% installation time vs pre-drilling. Consistent performance means predictable labor costs and on- schedule completion. Wrong thread type causes stripped screws in metal studs, resulting in rework and schedule delays. | 395x159 | "Eliminates callbacks from stripped fasteners on high-square-footage projects. Se..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] VerticalBorder | 395x149 | layout:VERTICAL | pad:13,0,0,19 | gap:8
          [FRAME] Container | 376x17 | layout:VERTICAL
            [TEXT] Pro Tip | 376x17 | "Pro Tip" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 376x111 | layout:VERTICAL
            [TEXT] Use 1-1/4" length for standard 1/2" drywall to 20-gauge studs. Bump to 1-5/8" for 5/8" fire-rated board. Always verify stud gauge before ordering; mixing fine thread and self-drilling products on the same project causes inventory confusion. | 376x111 | "Use 1-1/4" length for standard 1/2" drywall to 20-gauge studs. Bump to 1-5/8" fo..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] Container | 395x77 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 395x13 | layout:VERTICAL
            [TEXT] Typical Quantities | 395x13 | "Typical Quantities" | font:Arial/11px/w400 | align:LEFT
          [FRAME] Container | 395x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] 10,000-15,000 screws per 1,000 sq ft depending on stud spacing and code requirements | 395x44 | "10,000-15,000 screws per 1,000 sq ft depending on stud spacing and code requirem..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Background | 459x220 | layout:VERTICAL | pad:28,28,28,28 | gap:99 | asset:figma-assets/background.png
        [RECTANGLE] Gradient | 459x220
        [FRAME] Container | 403x21 | layout:VERTICAL | pad:0,0,1,0
      [FRAME] Frame 23 | 459x132 | layout:VERTICAL | gap:12
        [FRAME] Background+Border | 396x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] SHOP SELF-DRILLING SCREWS → | 294x30 | "SHOP SELF-DRILLING SCREWS →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Border | 396x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] VIEW INSTALLATION GUIDE → | 262x30 | "VIEW INSTALLATION GUIDE →" | font:Oswald/20px/w700 | align:CENTER
    [FRAME] Application 3 | 460x1405
      [FRAME] Container | 458x1011 | layout:VERTICAL | pad:34,32,40,32 | gap:16
        [FRAME] Container | 394x15 | layout:HORIZONTAL | gap:12
          [FRAME] Container | 15x15 | layout:VERTICAL
            [TEXT] 03 | 15x15 | "03" | font:Arial/13px/w700 | align:LEFT
          [RECTANGLE] Horizontal Divider | 367x1
        [FRAME] Container | 394x26 | layout:VERTICAL | pad:13,0,0,0
          [TEXT] Application Type | 394x13 | "Application Type" | font:Arial/11px/w700 | align:LEFT
        [FRAME] Heading 3 | 394x68 | layout:VERTICAL
          [TEXT] RENOVATION & REMODEL | 394x68 | "RENOVATION & REMODEL" | font:Russo One/32px/w400 | align:LEFT
        [FRAME] Container | 394x82 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 394x17 | layout:VERTICAL
            [TEXT] Project Types | 394x17 | "Project Types" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 394x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Existing building retrofit, tenant improvements, selective demolition and rebuild | 394x44 | "Existing building retrofit, tenant improvements, selective demolition and rebuil..." | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 394x210 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 394x17 | layout:VERTICAL
            [TEXT] Recommended Products | 394x17 | "Recommended Products" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 394x23 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Variety Pack Recommended: | 394x22 | "Variety Pack Recommended:" | font:Inter/14px/w400 | align:LEFT
          [FRAME] List | 394x143 | layout:VERTICAL | pad:1,0,0,18 | gap:6
            [FRAME] Item | 376x43
              [TEXT] Text | 0x22 | " " | font:Arial/14px/w400 | align:LEFT
              [TEXT] Fine Thread Drywall Screws (for existing metal stud systems, often 25-gauge in older buildings) | 322x44 | "Fine Thread Drywall Screws (for existing metal stud systems, often 25-gauge in o..." | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 376x43
              [TEXT] Text | 0x22 | " " | font:Arial/14px/w400 | align:LEFT
              [TEXT] Coarse Thread Screws (for wood framing additions and repairs) | 338x44 | "Coarse Thread Screws (for wood framing additions and repairs)" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 376x43
              [TEXT] Text | 0x22 | " " | font:Arial/14px/w400 | align:LEFT
              [TEXT] Structural Framing Screws (for blocking and reinforcement) | 291x44 | "Structural Framing Screws (for blocking and reinforcement)" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 394x197 | layout:VERTICAL | pad:13,0,0,0 | gap:8
          [FRAME] Container | 394x17 | layout:VERTICAL
            [TEXT] Why This Matters | 394x17 | "Why This Matters" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 394x159 | layout:VERTICAL
            [TEXT] Renovation work means unknown or mixed framingconditions behind existing finishes. You can't reliablypredict what substrate you'll encounter until demo is complete. PROGRIP's consistent performance eliminates surprises across all materials. When you're not sure what's behind the wall, you need fasteners you can trust in any substrate without callbacks. | 378x159 | "Renovation work means unknown or mixed framingconditions behind existing finishe..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] VerticalBorder | 394x149 | layout:VERTICAL | pad:13,0,0,19 | gap:8
          [FRAME] Container | 375x17 | layout:VERTICAL
            [TEXT] Pro Tip | 375x17 | "Pro Tip" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Container | 375x111 | layout:VERTICAL
            [TEXT] Keep a variety pack in the truck: 2,000 fine thread, 2,000 coarse thread, 500 structural. Better to have three types on hand than make a supply run mid-day when you discover mixed framing. Most renovation delays come from material trips, not installation time. | 375x111 | "Keep a variety pack in the truck: 2,000 fine thread, 2,000 coarse thread, 500 st..." | font:Inter/14px/w400 | align:JUSTIFIED
        [FRAME] Container | 394x78 | layout:VERTICAL | pad:13,0,0,0 | gap:7
          [FRAME] Container | 394x13 | layout:VERTICAL
            [TEXT] Typical Quantities | 394x13 | "Typical Quantities" | font:Arial/11px/w400 | align:LEFT
          [FRAME] Container | 394x45 | layout:VERTICAL | pad:0,0,1,0
            [TEXT] Varies widely by project; 5,000-10,000 screws typical for commercial tenant improvement | 394x44 | "Varies widely by project; 5,000-10,000 screws typical for commercial tenant impr..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Background | 458x220 | layout:VERTICAL | pad:28,28,28,28 | gap:99
        [RECTANGLE] Gradient | 458x220 | asset:figma-assets/gradient-2.png
        [FRAME] Container | 402x13 | layout:VERTICAL
        [FRAME] Container | 402x21 | layout:VERTICAL | pad:0,0,1,0
      [FRAME] Frame 25 | 459x132 | layout:VERTICAL | gap:12
        [FRAME] Background+Border | 394x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] SHOP VARIETY PACKS → | 221x30 | "SHOP VARIETY PACKS →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Border | 394x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] RENOVATION PROJECT GUIDE → | 283x30 | "RENOVATION PROJECT GUIDE →" | font:Oswald/20px/w700 | align:LEFT
  [GROUP] Group 22 | 1440x295
    [FRAME] Header | 1413x161 | layout:HORIZONTAL | pad:0,122,0,122 | gap:80
      [FRAME] Container | 698x161 | layout:VERTICAL | gap:21
        [FRAME] Container | 698x14
          [RECTANGLE] Background | 28x3
          [TEXT] APPLICATION GUIDE | 157x14 | " APPLICATION GUIDE" | font:Arial/12px/w400 | align:LEFT
        [FRAME] Heading 2 | 1224x125 | layout:VERTICAL
          [TEXT] CHOOSE THE RIGHT SCREW | 1224x63 | "CHOOSE THE RIGHT SCREW" | font:Russo One/66px/w400 | align:LEFT
          [TEXT] FOR YOUR APPLICATION | 1224x63 | "FOR YOUR APPLICATION" | font:Russo One/66px/w400 | align:LEFT
      [TEXT] 04 | 118x72 | "04" | font:Russo One/60px/w400 | align:LEFT
    [FRAME] Frame 30 | 258x287
      [VECTOR] Retângulo 7 | 102x540
      [VECTOR] Retângulo 7 copiar | 102x540
    [TEXT] Professional contractors match fasteners to substrates for optimal performance and code compliance. Here's how to spec PROGRIP screws across common construction applications. | 691x87 | "Professional contractors match fasteners to substrates for optimal performance a..." | font:Inter/18px/w400 | align:LEFT
  [BOOLEAN_OPERATION] Subtract | 297x297
    [ELLIPSE] Ellipse 1 | 297x297
    [VECTOR] Vector 1 | 205x206
  [FRAME] Brand guide note | 1440x158 | layout:HORIZONTAL | pad:34,36,34,36 | gap:48
    [FRAME] Container | 360x88 | layout:VERTICAL | gap:12
      [FRAME] Container | 360x13 | layout:VERTICAL
        [TEXT] Brand Guide Elements | 360x13 | "Brand Guide Elements" | font:Inter/11px/w400 | align:LEFT
      [FRAME] Heading 3 | 360x63 | layout:VERTICAL
        [TEXT] GRAPHICAL SYSTEM DETAILS | 360x63 | "GRAPHICAL SYSTEM DETAILS" | font:Russo One/30px/w400 | align:LEFT
    [FRAME] Container | 1006x79
      [TEXT] And lastly we would like to see a few more graphical elements from the ProGrip branding Guide into this website design. Specifically We would like to see Thread texture,Reticle mark Targeting / action icon, Split panel. | 1012x80 | "And lastly we would like to see a few more graphical elements from the ProGrip b..." | font:Inter/14px/w400 | align:LEFT
  [FRAME] Product / 9 / | 1920x1067 | layout:VERTICAL | pad:112,64,112,64 | gap:80
    [FRAME] Container | 1440x727 | layout:VERTICAL | gap:80
      [FRAME] Title | 1440x155 | layout:VERTICAL | gap:16
        [FRAME] Tagline Wrapper | 211x21 | layout:HORIZONTAL | pad:0,20,0,5 | gap:5
          [RECTANGLE] Rectangle 4 | 24x2
          [TEXT] Tagline | 157x21 | "The Pro ordering system" | font:Oswald/14px/w600 | align:CENTER
        [FRAME] Content | 1440x118 | layout:VERTICAL | gap:16
          [TEXT] Heading | 1440x60 | "Order like a pro, Every time" | font:Oswald/60px/w700 | align:CENTER
          [TEXT] Text | 1440x42 | "A platform built around how your crew actually works — from the foreman on his..." | font:Inter/14px/w400 | align:CENTER
      [FRAME] Content | 1440x492 | layout:VERTICAL | gap:2
        [FRAME] Row | 1440x244 | layout:HORIZONTAL | gap:2
          [FRAME] Product | 409x244 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product-2.png
            [FRAME] Frame 3 | 369x204 | layout:HORIZONTAL | gap:40
              [GROUP] Group 8 | 369x204
                [FRAME] Overlay | 89x21
                  [TEXT] INSTALLER | 73x15 | "INSTALLER" | font:Oswald/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Mobile Reorder | 93x29 | "Mobile Reorder" | font:Barlow Condensed/14px/w600 | align:LEFT
                [TEXT] 2-tap reorder from any phone, built for one hand. | 325x22 | "2-tap reorder from any phone, built for one hand." | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 369x72
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Last order one tap away | 161x20 | "Last order one tap away" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Request to Buyer for new SKUs | 208x20 | "Request to Buyer for new SKUs" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Instant delivery confirmation | 189x20 | "Instant delivery confirmation" | font:Inter/14px/w400 | align:LEFT
            [RECTANGLE] Rectangle 1 | 42x42
          [FRAME] Product | 513x244 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product-2.png
            [FRAME] Frame 4 | 473x182 | layout:HORIZONTAL | gap:40
              [GROUP] Group 9 | 399x182
                [FRAME] Overlay | 110x21
                  [TEXT] DISTRIBUTOR | 94x15 | "DISTRIBUTOR" | font:Oswald/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Customer Dashboard | 125x29 | "Customer Dashboard" | font:Barlow Condensed/14px/w600 | align:LEFT
                [TEXT] Every job, every order, every delivery, one login, one screen. | 399x22 | "Every job, every order, every delivery, one login, one screen." | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 369x72
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Order history by SKU or project | 208x20 | "Order history by SKU or project" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Account balance + PO upload | 197x20 | "Account balance + PO upload" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Delivery tracking without calling | 212x20 | "Delivery tracking without calling" | font:Inter/14px/w400 | align:LEFT
            [RECTANGLE] Rectangle 1 | 42x42
          [FRAME] Product | 513x244 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product-2.png
            [FRAME] Frame 5 | 473x183 | layout:HORIZONTAL | gap:40
              [GROUP] Group 10 | 381x183
                [FRAME] Overlay | 97x20
                  [TEXT] CONTRACTOR | 81x15 | "CONTRACTOR" | font:Barlow Condensed/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Submittals Builder | 134x29 | "Submittals Builder" | font:Oswald/14px/w600 | align:LEFT
                [TEXT] Select products, brand the PDF, send. Under 60 seconds. | 381x22 | "Select products, brand the PDF, send. Under 60 seconds." | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 369x72
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] No account required to start | 188x20 | "No account required to start" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Saved project history | 141x20 | "Saved project history" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Shareable direct link | 135x20 | "Shareable direct link" | font:Inter/14px/w400 | align:LEFT
          [RECTANGLE] Rectangle 1 | 42x42
        [FRAME] Row | 1440x246 | layout:HORIZONTAL | gap:2
          [FRAME] Product | 479x246 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product-2.png
            [FRAME] Frame 7 | 439x206 | layout:HORIZONTAL | gap:40
              [GROUP] Group 12 | 369x206
                [FRAME] Overlay | 110x21
                  [TEXT] INSTALLER | 73x15 | "INSTALLER" | font:Oswald/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Ordering Engine | 98x29 | "Ordering Engine" | font:Barlow Condensed/14px/w600 | align:LEFT
                [FRAME] List | 369x72
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] SDS + technical sheets | 153x20 | "SDS + technical sheets" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] LEED + certifications | 139x20 | "LEED + certifications" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] ISO documentation | 127x20 | "ISO documentation" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] SDS + technical sheets | 153x20 | "SDS + technical sheets" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] LEED + certifications | 139x20 | "LEED + certifications" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] ISO documentation | 127x20 | "ISO documentation" | font:Inter/14px/w400 | align:LEFT
                [TEXT] Pricing by category, volume, and region. | 266x22 | "Pricing by category, volume, and region." | font:Inter/14px/w400 | align:LEFT
          [FRAME] Product | 479x245 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product.png
            [FRAME] Frame 8 | 439x205 | layout:HORIZONTAL | gap:40
              [GROUP] Group 13 | 379x205
                [FRAME] Overlay | 125x23
                  [TEXT] DISTRIBUTOR | 94x15 | "DISTRIBUTOR" | font:Oswald/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Account System | 96x29 | "Account System" | font:Barlow Condensed/14px/w600 | align:LEFT
                [TEXT] Role-based access built for how construction companies. | 379x22 | "Role-based access built for how construction companies." | font:Inter/14px/w400 | align:LEFT
                [FRAME] List | 369x72
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Admin, Buyer, Foreman, General roles | 248x20 | "Admin, Buyer, Foreman, General roles" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Buyers create foreman sub-accounts | 245x20 | "Buyers create foreman sub-accounts" | font:Inter/14px/w400 | align:LEFT
                  [FRAME] Item | 369x20
                    [RECTANGLE] Background | 4x4 | radius:2
                    [TEXT] Approval workflow per company | 213x20 | "Approval workflow per company" | font:Inter/14px/w400 | align:LEFT
          [FRAME] Product | 479x246 | layout:VERTICAL | pad:20,20,20,20 | gap:16 | asset:figma-assets/product-2.png
            [FRAME] Frame 6 | 439x94 | layout:HORIZONTAL | gap:40
              [GROUP] Group 11 | 315x94
                [FRAME] Overlay | 97x20
                  [TEXT] CONTRACTOR | 81x15 | "CONTRACTOR" | font:Barlow Condensed/14px/w700 | align:LEFT
                [TEXT] Heading 4 → Literature Hub | 104x29 | "Literature Hub" | font:Oswald/14px/w600 | align:LEFT
                [TEXT] Every document you need for spec compliance. | 315x22 | "Every document you need for spec compliance." | font:Inter/14px/w400 | align:LEFT
                [TEXT] Every document you need for spec compliance. | 315x22 | "Every document you need for spec compliance." | font:Inter/14px/w400 | align:LEFT
              [FRAME] List | 245x72
                [FRAME] Item | 245x20
                  [RECTANGLE] Background | 4x4 | radius:2
            [FRAME] Item | 245x20
              [RECTANGLE] Background | 4x4 | radius:2
              [TEXT] Pallet + container pricing logic | 201x20 | "Pallet + container pricing logic" | font:Inter/14px/w400 | align:LEFT
            [TEXT] Free freight thresholds | 163x20 | "   Free freight thresholds" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 245x20
              [VECTOR] Background | 4x4 | radius:2
              [VECTOR] Background | 4x4 | radius:2
              [TEXT] PO upload auto-maps to orders | 220x20 | "   PO upload auto-maps to orders" | font:Inter/14px/w400 | align:LEFT
          [RECTANGLE] Rectangle 1 | 42x42
    [FRAME] Actions | 1440x84 | layout:HORIZONTAL | gap:24
      [TEXT] "This is a dedicated section promoting web and app features. The platform is not a feature — it's the retention strategy." | 858x29 | ""This is a dedicated section promoting web and app features. The platform is not..." | font:Barlow/14px/w500 | align:CENTER
      [FRAME] Actions | 215x66 | layout:VERTICAL | gap:24
        [FRAME] Button | 215x66 | layout:HORIZONTAL | pad:18,24,18,24 | gap:8
          [TEXT] Button | 99x30 | "Order Now" | font:Oswald/20px/w700 | align:LEFT
  [FRAME] Footer / 1 / | 1920x480 | layout:VERTICAL | pad:80,64,80,64 | gap:17
    [FRAME] Content | 1438x248
      [FRAME] Newsletter | 500x212 | layout:VERTICAL | gap:24
        [FRAME] Company Logo | 196x49
          [RECTANGLE] logos_PROGRIP_SCREWS_WHITE | 189x36 | asset:figma-assets/logos-progrip-screws-white.png
        [TEXT] Get updates on new products and job site tips. | 500x27 | "Get updates on new products and job site tips." | font:Barlow/18px/w400 | align:LEFT
        [FRAME] Actions | 500x88 | layout:VERTICAL | gap:12
          [FRAME] Form | 584x58 | layout:HORIZONTAL | gap:16
            [INSTANCE] Text input | 353x58 | layout:HORIZONTAL | pad:14,19,14,19 | gap:8
              [TEXT] Placeholder | 315x27 | "Your email" | font:Barlow/18px/w400 | align:LEFT
            [INSTANCE] Button | 215x58 | layout:HORIZONTAL | pad:14,19,14,19 | gap:8
              [TEXT] Button | 95x30 | "Subscribe" | font:Oswald/20px/w700 | align:LEFT
          [TEXT] By subscribing you agree to our Privacy Policy and consent to receive updates from Pro-Grip. | 500x18 | "By subscribing you agree to our Privacy Policy and consent to receive updates fr..." | font:Barlow/12px/w400 | align:LEFT
      [FRAME] Links | 687x243 | layout:HORIZONTAL | gap:40
        [FRAME] Column | 202x243 | layout:VERTICAL | gap:16
          [TEXT] Products | 202x27 | "Products" | font:Barlow/18px/w600 | align:LEFT
          [FRAME] Footer Links | 202x200 | layout:VERTICAL
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Browse all | 202x24 | "Browse all" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Metal studs | 202x24 | "Metal studs" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Drywall | 202x24 | "Drywall" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Heavy duty | 202x24 | "Heavy duty" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] View all | 202x24 | "View all" | font:Barlow/16px/w400 | align:LEFT
        [FRAME] Column | 202x243 | layout:VERTICAL | gap:16
          [TEXT] Company | 202x27 | "Company" | font:Barlow/18px/w600 | align:LEFT
          [FRAME] Footer Links | 202x200 | layout:VERTICAL
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] About us | 202x24 | "About us" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Resources | 202x24 | "Resources" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] For pros | 202x24 | "For pros" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Contact us | 202x24 | "Contact us" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0
              [TEXT] Careers | 202x24 | "Careers" | font:Barlow/16px/w400 | align:LEFT
        [FRAME] Column | 202x243 | layout:VERTICAL | gap:16
          [TEXT] Follow us | 202x27 | "Follow us" | font:Barlow/18px/w600 | align:LEFT
          [FRAME] Social Links | 202x200 | layout:VERTICAL
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0 | gap:12
              [INSTANCE] Facebook | 24x24
                [VECTOR] Vector | 20x20
              [TEXT] Facebook | 68x24 | "Facebook" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0 | gap:12
              [INSTANCE] Instagram | 24x24
                [VECTOR] Vector | 18x18
              [TEXT] Instagram | 71x24 | "Instagram" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0 | gap:12
              [INSTANCE] X | 24x24
                [VECTOR] Vector | 18x16
              [TEXT] X | 10x24 | "X" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0 | gap:12
              [INSTANCE] LinkedIn | 24x24
                [VECTOR] Vector | 18x18
              [TEXT] LinkedIn | 60x24 | "LinkedIn" | font:Barlow/16px/w400 | align:LEFT
            [FRAME] Link | 202x40 | layout:HORIZONTAL | pad:8,0,8,0 | gap:12
              [INSTANCE] Youtube | 24x24
                [VECTOR] Vector | 20x14
              [TEXT] YouTube | 60x24 | "YouTube" | font:Barlow/16px/w400 | align:LEFT
    [FRAME] Credits | 1438x55 | layout:VERTICAL | gap:32
      [LINE] Divider | 1438x0
      [FRAME] Row | 1438x23 | layout:HORIZONTAL | gap:64
        [TEXT] © 2026 Pro-Grip. All rights reserved. | 236x23 | "© 2026 Pro-Grip. All rights reserved." | font:Barlow/15px/w400 | align:LEFT
        [FRAME] Footer Links | 358x23 | layout:HORIZONTAL | gap:24
          [TEXT] Privacy Policy | 90x23 | "Privacy Policy" | font:Barlow/15px/w400 | align:LEFT
          [TEXT] Terms of Service | 110x23 | "Terms of Service" | font:Barlow/15px/w400 | align:LEFT
          [TEXT] Cookies Settings | 110x23 | "Cookies Settings" | font:Barlow/15px/w400 | align:LEFT
  [RECTANGLE] Rectangle 2 | 42x42
  [RECTANGLE] Rectangle 3 | 42x42
  [RECTANGLE] A7C00779 1 | 1963x1308 | asset:figma-assets/a7c00779-1.png
  [FRAME] Frame | 1920x1836 | layout:VERTICAL | pad:0,0,17,0
    [FRAME] Section | 1440x1819 | layout:VERTICAL | pad:96,0,96,0 | gap:24
      [FRAME] Container | 1440x14
        [RECTANGLE] Background | 28x3
        [TEXT] WHY PROGRIP | 107x14 | "WHY PROGRIP" | font:Arial/12px/w400 | align:LEFT
      [FRAME] Container | 1440x183 | layout:HORIZONTAL | gap:80
        [FRAME] Container | 660x183
          [TEXT] Heading 2 → WHY
PROFESSIONAL
CONTRACTORS
CHOOSE PROGRIP | 1217x130 | "WHY PROFESSIONAL CONTRACTORS CHOOSE PROGRIP" | font:Arial/60px/w700 | align:LEFT
        [FRAME] Container | 76x183 | layout:VERTICAL | gap:17
          [FRAME] Container | 76x74 | layout:VERTICAL | pad:1,0,1,0
        [TEXT] 02 | 76x72 | "02" | font:Russo One/60px/w400 | align:LEFT
      [TEXT] When project timelines are tight and callbacks kill profit, you need fasteners that perform exactly as expected, every single time. Here's what sets PROGRIP apart from retail-grade alternatives. | 707x58 | "When project timelines are tight and callbacks kill profit, you need fasteners t..." | font:Inter/14px/w400 | align:JUSTIFIED
      [FRAME] Border | 1440x1300 | layout:GRID | pad:41,0,0,1
        [FRAME] Background+Border | 360x600 | layout:VERTICAL | pad:32,32,46,32 | gap:22
          [FRAME] Container | 295x16 | layout:HORIZONTAL | gap:173
            [FRAME] Container | 16x16 | layout:VERTICAL
              [TEXT] 01 | 16x16 | "01" | font:Arial/14px/w700 | align:LEFT
          [FRAME] Heading 3 | 295x79 | layout:VERTICAL | pad:20,0,0,0
            [TEXT] Faster Installation | 295x59 | "Faster Installation" | font:Russo One/28px/w400 | align:LEFT
          [FRAME] Container | 295x157 | layout:VERTICAL
            [TEXT] Heat-treated Phillips drive resists cam-out up to 30% better than standard screws, maintaining positive bit engagement under high torque. Self-drilling points reduce penetration force by 40%, eliminating the pre-drill step on steel studs up to 20-gauge. | 295x157 | "Heat-treated Phillips drive resists cam-out up to 30% better than standard screw..." | font:Inter/14px/w400 | align:LEFT
          [FRAME] VerticalBorder | 295x65 | layout:VERTICAL | pad:2,0,0,19
            [TEXT] Strong → Result: | 208x63 | "Result: More screws driven per hour, fewer bit changes, less installer fatigue." | font:Arial/14px/w700 | align:LEFT
          [FRAME] List | 295x116 | layout:VERTICAL | pad:2,0,0,18 | gap:9
            [FRAME] Item | 277x38
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] 30% reduction in cam-out vs standard screws | 191x38 | "30% reduction in cam-out vs standard screws" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 277x39
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] 40% less penetration force on self- drilling points | 232x38 | "40% less penetration force on self- drilling points" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 277x20 | layout:VERTICAL
              [TEXT] Average 35% time savings | 174x19 | "Average 35% time savings" | font:Inter/14px/w400 | align:LEFT
              [TEXT]   | 4x19 | " " | font:Arial/13px/w400 | align:LEFT
        [FRAME] Background+Border | 360x600 | layout:VERTICAL | pad:32,32,68,32 | gap:22
          [FRAME] Container | 295x16 | layout:HORIZONTAL | gap:173
            [FRAME] Container | 16x16 | layout:VERTICAL
              [TEXT] 02 | 16x16 | "02" | font:Arial/14px/w700 | align:LEFT
          [FRAME] Heading 3 | 295x80 | layout:VERTICAL | pad:20,0,0,0
            [TEXT] Reduced Failures | 295x59 | "Reduced Failures" | font:Russo One/28px/w400 | align:LEFT
          [FRAME] Container | 295x135 | layout:VERTICAL
            [TEXT] Consistent hardness rating (HRC 52- 56) across every production batch ensures predictable torque performance without brittleness or stripping. Our 0.3% failure rate is up to 10x better than industry average. | 295x135 | "Consistent hardness rating (HRC 52- 56) across every production batch ensures pr..." | font:Inter/14px/w400 | align:LEFT
          [FRAME] VerticalBorder | 295x66 | layout:VERTICAL | pad:2,0,0,19
            [TEXT] Strong → Result: | 224x63 | "Result: Fewer warranty callbacks, lower material waste, predictable project cost..." | font:Arial/14px/w700 | align:LEFT
          [FRAME] List | 295x117 | layout:VERTICAL | pad:2,0,0,18 | gap:9
            [FRAME] Item | 277x38
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] 0.3% failure rate vs 2-4% industry average | 224x38 | "0.3% failure rate vs 2-4% industry average" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 277x39
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] 100% hardness inspection per production lot | 199x38 | "100% hardness inspection per production lot" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 277x20 | layout:VERTICAL
              [TEXT] Full traceability by lot number | 196x19 | "Full traceability by lot number" | font:Inter/14px/w400 | align:LEFT
              [TEXT]   | 4x19 | " " | font:Arial/13px/w400 | align:LEFT
        [FRAME] Background+Border | 360x600 | layout:VERTICAL | pad:32,32,42,32 | gap:21
          [FRAME] Container | 295x16 | layout:HORIZONTAL | gap:173
            [FRAME] Container | 16x16 | layout:VERTICAL
              [TEXT] 03 | 16x16 | "03" | font:Arial/14px/w700 | align:LEFT
          [FRAME] Heading 3 | 295x80 | layout:VERTICAL | pad:21,0,0,0
            [TEXT] Meets All Standards | 295x59 | "Meets All Standards" | font:Russo One/28px/w400 | align:LEFT
          [FRAME] Container | 295x180 | layout:VERTICAL
            [TEXT] Full compliance with ASTM C1002 and ASTM C954. Structural framing screws carry ICC-ES evaluation reports for code-required load- bearing applications. Technical data sheets and compliance documentation are available for submittal packages. | 295x180 | "Full compliance with ASTM C1002 and ASTM C954. Structural framing screws carry I..." | font:Inter/14px/w400 | align:LEFT
          [FRAME] VerticalBorder | 295x66 | layout:VERTICAL | pad:3,0,0,19
            [TEXT] Strong → Result: | 229x63 | "Result: Inspectors approve, architects accept, projects stay on schedule." | font:Arial/14px/w700 | align:LEFT
          [FRAME] List | 295x98 | layout:VERTICAL | pad:2,0,0,18 | gap:9
            [FRAME] Item | 277x20 | layout:VERTICAL
              [TEXT] ASTM C1002 & C954 certified | 199x19 | "ASTM C1002 & C954 certified" | font:Inter/14px/w400 | align:LEFT
              [TEXT]   | 4x19 | " " | font:Arial/13px/w400 | align:LEFT
            [FRAME] Item | 277x20 | layout:VERTICAL
              [TEXT] ICC-ES reports for structural screws | 240x19 | "ICC-ES reports for structural screws" | font:Inter/14px/w400 | align:LEFT
              [TEXT]   | 4x19 | " " | font:Arial/13px/w400 | align:LEFT
            [FRAME] Item | 277x39
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] Complete submittal documentation online | 233x38 | "Complete submittal documentation online" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Background+Border | 360x600 | layout:VERTICAL | pad:32,32,53,32 | gap:21
          [FRAME] Container | 295x16 | layout:HORIZONTAL | gap:173
            [FRAME] Container | 16x16 | layout:VERTICAL
              [TEXT] 04 | 16x16 | "04" | font:Arial/14px/w700 | align:LEFT
          [FRAME] Heading 3 | 295x51 | layout:VERTICAL | pad:21,0,0,0
            [TEXT] Built For Pros | 295x30 | "Built For Pros" | font:Russo One/28px/w400 | align:LEFT
          [FRAME] Container | 295x180 | layout:VERTICAL
            [TEXT] Contractor-focused bulk packaging reduces cardboard waste and trips to the supply truck. Available through major distributors nationwide with direct ordering options for volume accounts and technical support from professionals with real construction experience. | 295x180 | "Contractor-focused bulk packaging reduces cardboard waste and trips to the suppl..." | font:Inter/14px/w400 | align:LEFT
          [FRAME] VerticalBorder | 295x66 | layout:VERTICAL | pad:3,0,0,19
            [TEXT] Strong → Result: | 214x63 | "Result: Reliable supply chain, expert guidance, less packaging waste." | font:Arial/14px/w700 | align:LEFT
          [FRAME] List | 295x117 | layout:VERTICAL | pad:3,0,0,18 | gap:9
            [FRAME] Item | 277x38
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] Available through 500+ distributors nationwide | 234x38 | "Available through 500+ distributors nationwide" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Item | 277x20 | layout:VERTICAL
              [TEXT] Direct ordering for volume accounts | 238x19 | "Direct ordering for volume accounts" | font:Inter/14px/w400 | align:LEFT
              [TEXT]   | 4x19 | " " | font:Arial/13px/w400 | align:LEFT
            [FRAME] Item | 277x39
              [TEXT] Text | 0x19 | " " | font:Arial/13px/w400 | align:LEFT
              [TEXT] Technical support with jobsite experience | 199x38 | "Technical support with jobsite experience" | font:Inter/14px/w400 | align:LEFT
  [FRAME] Frame 32 | 1920x1778 | layout:HORIZONTAL | pad:40,40,40,40 | gap:40
    [FRAME] Frame | 1440x1698 | layout:VERTICAL | pad:100,0,100,0 | gap:64
      [FRAME] Header | 1364x162 | layout:HORIZONTAL | gap:80
        [FRAME] Container | 698x162 | layout:VERTICAL | gap:22
          [FRAME] Container | 698x14
            [RECTANGLE] Background | 28x3
            [TEXT] PERSONA TESTIMONIALS | 193x14 | " PERSONA TESTIMONIALS" | font:Arial/12px/w400 | align:LEFT
          [FRAME] Heading 2 | 1322x126 | layout:VERTICAL
            [TEXT] THE RIGHT SCREW. RIGHT WHEN YOU NEED IT. | 964x126 | "THE RIGHT SCREW. RIGHT WHEN YOU NEED IT." | font:Russo One/60px/w400 | align:LEFT
        [FRAME] Container | 422x162 | layout:VERTICAL | gap:23
          [FRAME] Container | 422x72 | layout:VERTICAL
            [TEXT] 03 | 422x72 | "03" | font:Russo One/60px/w400 | align:LEFT
      [FRAME] Container | 1364x58 | layout:VERTICAL
        [TEXT] Real contractors. Real projects. Real results. Here's how professionals across the supply chain rely on PROGRIP to keep projects on schedule and under budget. | 704x58 | "Real contractors. Real projects. Real results. Here's how professionals across t..." | font:Inter/15px/w400 | align:LEFT
      [FRAME] Cards | 1358x1150 | layout:HORIZONTAL | pad:1,0,0,1 | gap:20
        [FRAME] Card 1 | 439x1149 | layout:VERTICAL
          [FRAME] Background | 438x230 | layout:VERTICAL | pad:28,28,28,28
            [RECTANGLE] Gradient | 438x230 | asset:figma-assets/gradient-2.png
            [FRAME] Container | 382x13 | layout:VERTICAL
          [FRAME] Container | 438x914 | layout:VERTICAL | pad:36,34,40,34 | gap:31
            [TEXT] Foreman on jobsite with drill/material | 370x13 | "Foreman on jobsite with drill/material" | font:Arial/11px/w700 | align:LEFT
            [FRAME] Container | 370x15 | layout:HORIZONTAL | gap:12
              [FRAME] Container | 15x15 | layout:VERTICAL
                [TEXT] 01 | 15x15 | "01" | font:Arial/13px/w700 | align:LEFT
              [RECTANGLE] Horizontal Divider | 343x1
            [FRAME] Heading 3 | 370x41 | layout:VERTICAL | pad:3,0,0,0
              [TEXT] THE Installer | 370x38 | "THE Installer" | font:Arial/38px/w700 | align:LEFT
            [FRAME] Container | 370x225 | layout:VERTICAL
              [TEXT] “Switched to PROGRIP after the third callback on a 40-unit multi-family project. Stripped screws were killing our schedule and burning labor hours on rework. Six months in, we've had zero fastener failures across three buildings. Crews are faster, callbacks are down, and we're back on budget” 200,000 sq ft multi-family complex, mixed wood and metal framing | 370x225 | "“Switched to PROGRIP after the third callback on a 40-unit multi-family projec..." | font:Arial/15px/w400 | align:JUSTIFIED
            [FRAME] Container | 370x69 | layout:VERTICAL | pad:7,0,0,0
              [FRAME] Container | 370x23 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Mike Torres | 370x22 | "Mike Torres" | font:Inter/18px/w700 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Framing Foreman | 370x20 | "Framing Foreman" | font:Inter/14px/w400 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Mountain States Construction, Denver, CO | 370x20 | "Mountain States Construction, Denver, CO" | font:Inter/14px/w400 | align:LEFT
            [FRAME] VerticalBorder | 370x70 | layout:VERTICAL | pad:5,0,0,19 | gap:7
              [FRAME] Container | 351x13 | layout:VERTICAL
                [TEXT] What Matters | 351x13 | "What Matters" | font:Inter/11px/w400 | align:LEFT
              [FRAME] Container | 351x44 | layout:VERTICAL
                [TEXT] Getting crews home on time with zero comebacks | 351x44 | "Getting crews home on time with zero comebacks" | font:Inter/16px/w700 | align:LEFT
            [FRAME] List | 370x128 | layout:VERTICAL | pad:3,0,13,18 | gap:9
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Eliminated rework from stripped fasteners | 278x21 | "Eliminated rework from stripped fasteners" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Reduced installer frustration | 188x21 | "Reduced installer frustration" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Predictable labor costs per square foot | 258x21 | "Predictable labor costs per square foot" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Faster installation means more projects per year | 319x21 | "Faster installation means more projects per year" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
            [FRAME] Border | 215x60 | layout:HORIZONTAL | pad:16,23,16,23
              [TEXT] Installer KIT → | 155x30 | "Installer KIT →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Card 2 | 439x1149 | layout:VERTICAL
          [FRAME] Background | 438x230 | layout:VERTICAL | pad:28,28,28,28
            [RECTANGLE] Gradient | 438x230 | asset:figma-assets/gradient.png
            [FRAME] Container | 382x13 | layout:VERTICAL
          [FRAME] Container | 438x915 | layout:VERTICAL | pad:36,34,40,34 | gap:31
            [TEXT] Materials manager with inventory | 370x13 | "Materials manager with inventory" | font:Arial/11px/w700 | align:LEFT
            [FRAME] Container | 370x15 | layout:HORIZONTAL | gap:12
              [FRAME] Container | 15x15 | layout:VERTICAL
                [TEXT] 02 | 15x15 | "02" | font:Arial/13px/w700 | align:LEFT
              [RECTANGLE] Horizontal Divider | 343x1
            [TEXT] THE Distributor | 370x38 | "THE Distributor" | font:Arial/38px/w700 | align:LEFT
            [FRAME] Container | 370x250 | layout:VERTICAL
              [TEXT] “Consistent quality means I can order by the pallet without worrying about bad batches. We used to have the 'hot batch, cold batch' problem where one pallet would drive perfectly and the next would strip constantly. With PROGRIP, every order performs exactly like the last one. That predictability is worth more than shaving a few dollars per box.” $45M annual volume across 15-20 active projects, centralized purchasing | 370x250 | "“Consistent quality means I can order by the pallet without worrying about bad..." | font:Arial/15px/w400 | align:JUSTIFIED
            [FRAME] Container | 370x75 | layout:VERTICAL | pad:7,0,5,0
              [FRAME] Container | 370x23 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Sarah Chen | 370x22 | "Sarah Chen" | font:Inter/18px/w700 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Materials Manager | 370x20 | "Materials Manager" | font:Inter/14px/w400 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Apex Commercial Builders, Boston, MA | 370x20 | "Apex Commercial Builders, Boston, MA" | font:Inter/14px/w400 | align:LEFT
            [FRAME] VerticalBorder | 370x43 | layout:VERTICAL | pad:0,0,0,19 | gap:8
              [FRAME] Container | 351x13 | layout:VERTICAL
                [TEXT] What Matters | 351x13 | "What Matters" | font:Inter/11px/w400 | align:LEFT
              [FRAME] Container | 351x22 | layout:VERTICAL
                [TEXT] Material you can trust at scale | 351x22 | "Material you can trust at scale" | font:Inter/16px/w700 | align:LEFT
            [FRAME] List | 370x128 | layout:VERTICAL | pad:3,0,13,18 | gap:9
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Eliminated batch-to-batch quality variation | 283x21 | "Eliminated batch-to-batch quality variation" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Simplified inventory management | 221x21 | "Simplified inventory management" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Reduced emergency supply runs | 217x21 | "Reduced emergency supply runs" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT]  Better vendor relationship through consistency | 315x21 | " Better vendor relationship through consistency" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
            [FRAME] Border | 215x60 | layout:HORIZONTAL | pad:16,23,16,23
              [TEXT] OPEN ACCOUNT → | 164x30 | "OPEN ACCOUNT →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Card 3 | 439x1149 | layout:VERTICAL
          [FRAME] Background | 438x230 | layout:VERTICAL | pad:28,28,28,28
            [RECTANGLE] Gradient | 438x230 | asset:figma-assets/gradient-2.png
            [FRAME] Container | 382x13 | layout:VERTICAL
          [FRAME] Container | 438x918 | layout:VERTICAL | pad:36,34,40,34 | gap:21
            [TEXT] GC reviewing plans on site | 370x13 | "GC reviewing plans on site" | font:Arial/11px/w700 | align:LEFT
            [FRAME] Container | 370x15 | layout:HORIZONTAL | gap:12
              [FRAME] Container | 15x15 | layout:VERTICAL
                [TEXT] 03 | 15x15 | "03" | font:Arial/13px/w700 | align:LEFT
              [RECTANGLE] Horizontal Divider | 343x1
            [FRAME] Heading 3 | 370x41 | layout:VERTICAL | pad:3,0,0,0
              [TEXT] THE CONTRACTOR | 370x38 | "THE CONTRACTOR" | font:Arial/38px/w700 | align:LEFT
            [FRAME] Container | 370x300 | layout:VERTICAL
              [TEXT] “I include PROGRIP in specifications now because I know it won't cause delays or warranty callbacks. Fastener failures don't show up in my critical path analysis until they've already cost me days. The submittal builder makes documentation easy for architects, and having technical data sheets on hand eliminates inspector questions. One less thing to worry about means I can focus on bigger project risks” Commercial and light-industrial GC, 12-person team, $15M annual revenue | 370x300 | "“I include PROGRIP in specifications now because I know it won't cause delays ..." | font:Arial/15px/w400 | align:JUSTIFIED
            [FRAME] Container | 370x69 | layout:VERTICAL | pad:7,0,0,0
              [FRAME] Container | 370x23 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] James Rodriguez | 370x22 | "James Rodriguez" | font:Inter/18px/w700 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Principal | 370x20 | "Principal" | font:Inter/14px/w400 | align:LEFT
              [FRAME] Container | 370x21 | layout:VERTICAL | pad:0,0,1,0
                [TEXT] Rodriguez Construction Group, Phoenix, AZ | 370x20 | "Rodriguez Construction Group, Phoenix, AZ" | font:Inter/14px/w400 | align:LEFT
            [FRAME] VerticalBorder | 370x70 | layout:VERTICAL | pad:5,0,0,19 | gap:7
              [FRAME] Container | 351x13 | layout:VERTICAL
                [TEXT] What Matters | 351x13 | "What Matters" | font:Inter/11px/w400 | align:LEFT
              [FRAME] Container | 351x44 | layout:VERTICAL
                [TEXT] Risk elimination on the critical path | 351x44 | "Risk elimination on the critical path" | font:Inter/16px/w700 | align:LEFT
            [FRAME] List | 370x128 | layout:VERTICAL | pad:3,0,13,18 | gap:9
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Reduced delays from material failures | 249x21 | "Reduced delays from material failures" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Simplified submittal process | 187x21 | "Simplified submittal process" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Better architect and inspector relationships | 286x21 | "Better architect and inspector relationships" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
              [FRAME] Item | 352x21 | layout:VERTICAL
                [TEXT] Lower warranty risk on completed projects | 283x21 | "Lower warranty risk on completed projects" | font:Inter/14px/w400 | align:LEFT
                [TEXT]   | 4x21 | " " | font:Arial/14px/w400 | align:LEFT
            [FRAME] Background+Border | 215x60 | layout:HORIZONTAL | pad:16,23,16,23
              [TEXT] BUILD SUBMITTAL → | 188x30 | "BUILD SUBMITTAL →" | font:Oswald/20px/w700 | align:LEFT
      [GROUP] Group 19 | 1439x79
        [GROUP] Group 20 | 1439x79
          [VECTOR] Vector | 80x79
          [VECTOR] Vector | 80x79
      [GROUP] Group 20 | 1439x79
        [VECTOR] Vector | 80x79
        [VECTOR] Vector | 80x79
  [FRAME] Application 4 | 706x1193 | layout:VERTICAL | gap:133
    [FRAME] Background | 705x220 | layout:VERTICAL | pad:28,28,28,28 | gap:99
      [RECTANGLE] Gradient | 705x350 | asset:figma-assets/gradient-2.png
    [FRAME] Container | 705x857 | layout:VERTICAL | pad:34,32,40,32 | gap:11
      [FRAME] Container | 641x16 | layout:HORIZONTAL | gap:12
        [FRAME] Container | 16x16 | layout:VERTICAL
          [TEXT] 04 | 16x16 | "04" | font:Arial/14px/w700 | align:LEFT
        [RECTANGLE] Horizontal Divider | 613x1
      [FRAME] Container | 641x30 | layout:VERTICAL | pad:13,0,0,0
        [TEXT] Application Type | 641x17 | "Application Type" | font:Inter/14px/w700 | align:LEFT
      [FRAME] Heading 3 | 641x58 | layout:VERTICAL
        [FRAME] Frame 41 | 641x58 | layout:HORIZONTAL | pad:12,0,12,0 | gap:40
          [TEXT] LIGHT-GAUGE STEEL CONSTRUCTION | 641x34 | "LIGHT-GAUGE STEEL CONSTRUCTION" | font:Russo One/32px/w400 | align:LEFT
      [FRAME] Container | 641x82 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Project Types | 641x17 | "Project Types" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x45 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] Retail storefronts, medical offices, any project with engineered light-gauge steel systems | 641x44 | "Retail storefronts, medical offices, any project with engineered light-gauge ste..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x90 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Recommended Products | 641x17 | "Recommended Products" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] Primary: Fine Thread Drywall Screws (for 25-gauge systems) | 641x22 | "Primary: Fine Thread Drywall Screws (for 25-gauge systems)" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] Secondary: Self-Drilling Screws (for 20-gauge track and stud connections) | 641x22 | "Secondary: Self-Drilling Screws (for 20-gauge track and stud connections)" | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x165 | layout:VERTICAL | pad:13,0,13,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Why This Matters | 641x17 | "Why This Matters" | font:Russo One/14px/w400 | align:LEFT
        [FRAME] Container | 641x114 | layout:VERTICAL
          [TEXT] Light-gauge steel systems are extremely unforgiving. Over-torque by even small amounts and you strip out the thin metal. Under-torque and you get movement, cracks, and fastener pop. PROGRIP's precision thread design and consistent hardness (HRC 52-56) provide the narrow torque window these engineered systems require. Generic screws with batch variation cause constant stripping. | 641x114 | "Light-gauge steel systems are extremely unforgiving. Over-torque by even small a..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] VerticalBorder | 641x110 | layout:VERTICAL | pad:0,0,0,19 | gap:8
        [FRAME] Container | 622x13 | layout:VERTICAL
          [TEXT] Pro Tip | 622x13 | "Pro Tip" | font:Inter/11px/w400 | align:LEFT
        [FRAME] Container | 622x89 | layout:VERTICAL
          [TEXT] Set drill clutch between 15-18 for optimal depth control on 25-gauge systems. Replace Phillips bits every 1,000 screws to maintain consistent drive performance. Worn bits increase cam-out frequency and damage screw heads. Test clutch settings on scrap material before production driving. | 622x89 | "Set drill clutch between 15-18 for optimal depth control on 25-gauge systems. Re..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x60 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Typical Quantities | 641x17 | "Typical Quantities" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] 12-15 screws per sheet, 8,000-12,000 per 1,000 sq ft depending on system | 641x22 | "12-15 screws per sheet, 8,000-12,000 per 1,000 sq ft depending on system" | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x87 | layout:HORIZONTAL | pad:27,0,0,0 | gap:12
        [FRAME] Background+Border | 312x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] SHOP FINE THREAD SCREWS → | 229x30 | "SHOP FINE THREAD SCREWS →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Border | 312x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] LIGHT-GAUGE INSTALLATION TIPS → | 263x30 | "LIGHT-GAUGE INSTALLATION TIPS →" | font:Oswald/20px/w700 | align:LEFT
  [FRAME] Application 5 | 706x1193 | layout:VERTICAL | gap:130
    [FRAME] Background | 705x220 | layout:VERTICAL | pad:28,28,28,28 | gap:99
      [RECTANGLE] Gradient | 705x350 | asset:figma-assets/gradient-2.png
      [FRAME] Container | 649x13 | layout:VERTICAL
    [FRAME] Container | 705x843 | layout:VERTICAL | pad:34,32,40,32 | gap:18
      [FRAME] Container | 641x16 | layout:HORIZONTAL | gap:12
        [FRAME] Container | 16x16 | layout:VERTICAL
          [TEXT] 05 | 16x16 | "05" | font:Arial/14px/w700 | align:LEFT
        [RECTANGLE] Horizontal Divider | 613x1
      [FRAME] Container | 641x30 | layout:VERTICAL | pad:13,0,0,0
        [TEXT] Application Type | 641x17 | "Application Type" | font:Inter/14px/w700 | align:LEFT
      [FRAME] Heading 3 | 641x35 | layout:VERTICAL | pad:0,0,1,0
        [TEXT] WOOD-FRAMED RESIDENTIAL | 641x34 | "WOOD-FRAMED RESIDENTIAL" | font:Russo One/32px/w400 | align:LEFT
      [FRAME] Container | 641x60 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Project Types | 641x17 | "Project Types" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] Single-family homes, additions, wood-framed townhomes and multi-family | 641x22 | "Single-family homes, additions, wood-framed townhomes and multi-family" | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x89 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Recommended Products | 641x17 | "Recommended Products" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] For Drywall: Coarse Thread Drywall Screws (all drywall-to-stud applications) | 641x22 | "For Drywall: Coarse Thread Drywall Screws (all drywall-to-stud applications)" | font:Inter/14px/w400 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] For Structure: Structural Framing Screws (blocking, rim boards, subfloor, ledgers) | 641x22 | "For Structure: Structural Framing Screws (blocking, rim boards, subfloor, ledger..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x164 | layout:VERTICAL | pad:13,0,13,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Why This Matters | 641x17 | "Why This Matters" | font:Russo One/14px/w400 | align:LEFT
        [FRAME] Container | 641x114 | layout:VERTICAL
          [TEXT] Wood construction requires aggressive thread engagement and clean cutting action without splitting dimensional lumber. PROGRIP's coarse thread design (17 TPI) prevents spinning and provides superior holding power in SPF, SYP, engineered lumber, and wood composites. Fine thread screws (designed for metal) will spin in wood and fail to hold properly. | 641x114 | "Wood construction requires aggressive thread engagement and clean cutting action..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] VerticalBorder | 641x114 | layout:VERTICAL | pad:0,0,0,19 | gap:8
        [FRAME] Container | 622x17 | layout:VERTICAL
          [TEXT] Pro Tip | 622x17 | "Pro Tip" | font:Russo One/14px/w400 | align:LEFT
        [FRAME] Container | 622x89 | layout:VERTICAL
          [TEXT] For standard 2x4 framing with 1/2" drywall, 1-1/4" screws meet code minimum. Use 1-5/8" for ceiling applications to ensure adequate penetration accounting for potential insulation compression. On engineered lumber (I-joists, LVL), verify fastener schedules as some manufacturers require specific lengths. | 622x89 | "For standard 2x4 framing with 1/2" drywall, 1-1/4" screws meet code minimum. Use..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x60 | layout:VERTICAL | pad:13,0,0,0 | gap:7
        [FRAME] Container | 641x17 | layout:VERTICAL
          [TEXT] Typical Quantities | 641x17 | "Typical Quantities" | font:Inter/14px/w700 | align:LEFT
        [FRAME] Container | 641x23 | layout:VERTICAL | pad:0,0,1,0
          [TEXT] 2,000 sq ft house: 8,000-10,000 drywall screws plus 1,000-2,000 structural screws | 641x22 | "2,000 sq ft house: 8,000-10,000 drywall screws plus 1,000-2,000 structural screw..." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Container | 641x77 | layout:HORIZONTAL | pad:17,0,0,0 | gap:12
        [FRAME] Background+Border | 300x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] SHOP COARSE THREAD SCREWS → | 257x30 | "SHOP COARSE THREAD SCREWS →" | font:Oswald/20px/w700 | align:LEFT
        [FRAME] Border | 300x60 | layout:VERTICAL | pad:15,19,15,19
          [TEXT] RESIDENTIAL FRAMING GUIDE → | 238x30 | "RESIDENTIAL FRAMING GUIDE →" | font:Oswald/20px/w700 | align:LEFT
  [FRAME] Frame 37 | 1792x578 | layout:VERTICAL | gap:24
    [FRAME] Frame 1 | 636x32 | layout:VERTICAL | gap:12
      [TEXT] Professional-grade fasteners + professional-grade platform | 636x18 | "Professional-grade fasteners + professional-grade platform" | font:Barlow Condensed/20px/w700 | align:LEFT
      [RECTANGLE] Horizontal Divider | 32x2
    [TEXT] Heading | 1130x384 | "Pro hold.  Pro speed. Pro+Grip." | font:Oswald/128px/w700 | align:CENTER
    [TEXT] Text | 1792x30 | "Engineered for professionals who demand speed, reliability, and control. Built t..." | font:Barlow/20px/w400 | align:CENTER
    [FRAME] Actions | 1440x60 | layout:HORIZONTAL | gap:24
      [FRAME] Frame 36 | 1440x60 | layout:HORIZONTAL | gap:24
        [FRAME] Button | 215x60 | layout:HORIZONTAL | pad:18,28,18,28 | gap:8
          [TEXT] Button | 97x30 | "Order Now" | font:Oswald/20px/w600 | align:LEFT
        [FRAME] Button | 215x60 | layout:HORIZONTAL | pad:18,28,18,28 | gap:8
          [TEXT] Button | 159x30 | "Build a Submittal" | font:Oswald/20px/w600 | align:LEFT
  [GROUP] Group 21 | 85x85
    [VECTOR] Elipse 1 | 83x83
    [VECTOR] Elipse 1 copiar 7 | 24x24
    [VECTOR] Forma 7 | 0x14
    [VECTOR] Forma 7 copiar | 0x14
    [VECTOR] Forma 7 copiar 2 | 14x0
    [VECTOR] Forma 7 copiar 2 | 14x0
  [FRAME] Product / 4 / | 1920x1301 | asset:figma-assets/product--4-.png
    [GROUP] Group 16 | 1440x1100
      [FRAME] Container | 1440x214 | layout:VERTICAL | gap:80
        [FRAME] Title | 768x214 | layout:VERTICAL | gap:16
          [FRAME] Tagline Wrapper | 120x24 | layout:HORIZONTAL | pad:0,20,0,5 | gap:5
            [RECTANGLE] Rectangle 4 | 24x2
            [TEXT] Tagline | 66x24 | "complete" | font:Oswald/16px/w600 | align:LEFT
          [FRAME] Content | 768x174 | layout:VERTICAL | gap:24
            [TEXT] Heading | 768x120 | "Products built  for speed." | font:Russo One/60px/w400 | align:LEFT
            [TEXT] Text | 768x30 | "The full range of Pro-Grip fasteners for every job" | font:Barlow Condensed/20px/w400 | align:LEFT
        [TEXT] 01 | 64x60 | "01" | font:Russo One/60px/w400 | align:LEFT
        [VECTOR] Vector | 829x514
      [FRAME] Main | 954x680 | radius:1 | layout:HORIZONTAL | pad:32,32,32,32 | shadow:DROP_SHADOW/0,35,120/#000000 | shadow:INNER_SHADOW/0,1,0/#FFFFFF
        [RECTANGLE] Placeholder Image | 285x181 | radius:8 | asset:figma-assets/placeholder-image-2.png
        [RECTANGLE] Placeholder Image | 285x181 | asset:figma-assets/placeholder-image-2.png
        [RECTANGLE] Placeholder Image | 285x181 | radius:8 | asset:figma-assets/placeholder-image.png
        [RECTANGLE] Placeholder Image | 285x181 | radius:8 | asset:figma-assets/placeholder-image-2.png
        [RECTANGLE] Placeholder Image | 285x181 | radius:8 | asset:figma-assets/placeholder-image-2.png
        [RECTANGLE] Placeholder Image | 285x181 | radius:8 | asset:figma-assets/placeholder-image-2.png
        [RECTANGLE] Horizontal Divider | 856x1
        [FRAME] Container | 168x16 | layout:HORIZONTAL | gap:8
          [RECTANGLE] Background | 8x8 | radius:9999
          [TEXT] Interactive View | 152x16 | "Interactive View" | font:Inter/12px/w700 | align:LEFT
        [RECTANGLE] Overlay+Blur | 742x90 | radius:9999
        [FRAME] Container | 383x122 | layout:VERTICAL | gap:8
          [FRAME] Container | 383x16 | layout:VERTICAL
            [TEXT] Faster Installation | 383x16 | "Faster Installation" | font:Inter/12px/w700 | align:LEFT
          [FRAME] Heading 3 | 383x66 | layout:VERTICAL
            [TEXT] Coarse Thread Drywall Screws | 383x66 | "Coarse Thread  Drywall Screws" | font:Inter/21px/w700 | align:LEFT
          [FRAME] Container | 383x24 | layout:VERTICAL
            [TEXT] 6x1-1/4” | 383x24 | "6x1-1/4”" | font:Barlow/16px/w400 | align:LEFT
        [FRAME] Link | 215x60 | layout:HORIZONTAL | pad:0,24,0,24
          [TEXT] Build Submittal | 160x16 | "Build Submittal" | font:Oswald/20px/w700 | align:CENTER
        [FRAME] Link | 215x60 | layout:HORIZONTAL | pad:0,24,0,24
          [TEXT] Buy now | 88x16 | " Buy now" | font:Oswald/20px/w700 | align:CENTER
      [FRAME] Aside | 220x475 | layout:VERTICAL
        [FRAME] Overlay+Border+OverlayBlur | 220x355 | radius:1 | layout:VERTICAL | pad:24,24,24,24 | gap:24
          [FRAME] Container | 170x16 | layout:HORIZONTAL | pad:0,0,0,0 | gap:117
            [FRAME] Container | 97x16 | layout:VERTICAL
              [TEXT] Highlights | 97x16 | "Highlights" | font:Inter/12px/w700 | align:LEFT
          [FRAME] Container | 170x156 | layout:VERTICAL | pad:0,0,8,0 | gap:20
            [FRAME] Container | 170x76 | layout:HORIZONTAL | gap:16
              [FRAME] Margin | 8x16 | layout:VERTICAL | pad:8,0,0,0
                [RECTANGLE] Background | 8x8 | radius:9999
              [FRAME] Container | 114x76 | layout:VERTICAL | gap:4
                [FRAME] Heading 4 | 114x48 | layout:VERTICAL
                  [TEXT] Coarse Thread Screws | 114x48 | "Coarse Thread Screws" | font:Russo One/14px/w400 | align:LEFT
                [FRAME] Container | 114x24 | layout:VERTICAL
                  [TEXT] # 6x1 - 7/8’’ | 79x24 | "# 6x1 - 7/8’’" | font:Inter/14px/w400 | align:LEFT
            [FRAME] Container | 170x52 | layout:HORIZONTAL | gap:16
              [FRAME] Margin | 8x16 | layout:VERTICAL | pad:8,0,0,0
                [RECTANGLE] Background | 8x8 | radius:9999
              [FRAME] Container | 91x52 | layout:VERTICAL | gap:4
                [FRAME] Heading 4 | 91x24 | layout:VERTICAL
                  [TEXT] 8000 pcs | 67x24 | "8000 pcs" | font:Russo One/14px/w400 | align:LEFT
                [FRAME] Container | 91x24 | layout:VERTICAL
                  [TEXT] Weight : 22 lb | 91x24 | "Weight : 22 lb" | font:Inter/14px/w400 | align:LEFT
          [FRAME] HorizontalBorder | 170x85 | layout:VERTICAL | pad:24,0,0,0
            [FRAME] Link | 170x60 | layout:HORIZONTAL | pad:16,24,16,24
              [TEXT] learn more | 113x16 | "learn more" | font:Oswald/20px/w700 | align:CENTER
      [TEXT] 01 | 266x42 | "01" | font:Inter/35px/w700 | align:LEFT | shadow:DROP_SHADOW/0,0,45/#E51216
      [GROUP] Group 14 | 710x403
        [RECTANGLE] Fine 6x1-1_4 Screw 1 1 | 710x296 | asset:figma-assets/fine-6x1-1-4-screw-1-1.png
        [GROUP] Mask group | 703x267
          [RECTANGLE] Fine 6x1-1_4 Screw 1 2 | 703x267
          [RECTANGLE] Fine 6x1-1_4 Screw 1 3 | 703x267 | asset:figma-assets/fine-6x1-1-4-screw-1-3.png
      [FRAME] Tagline Wrapper | 271x24
        [TEXT] Tagline | 132x24 | "06 — Drywall Screw" | font:Oswald/16px/w600 | align:LEFT
        [FRAME] Tagline Wrapper | 271x24
          [TEXT] Tagline | 131x24 | "04 — Drywall Screw" | font:Oswald/16px/w600 | align:LEFT
    [FRAME] Border | 170x26 | radius:9999 | layout:VERTICAL | pad:4,12,4,12
      [TEXT] Categories | 62x16 | "Categories" | font:Inter/12px/w400 | align:LEFT
    [FRAME] Tagline Wrapper | 271x24
      [TEXT] Tagline | 126x24 | "03 — Fine 6x1-1/4”" | font:Oswald/16px/w600 | align:LEFT
    [FRAME] Tagline Wrapper | 271x24
      [TEXT] Tagline | 100x24 | "01 — Fine 6x2”" | font:Oswald/16px/w600 | align:LEFT
    [FRAME] Tagline Wrapper | 271x24
      [TEXT] Tagline | 143x24 | "02 — Coarse 6x1-1/4”" | font:Oswald/16px/w600 | align:LEFT
    [FRAME] Tagline Wrapper | 271x24
      [TEXT] Tagline | 131x24 | "05 — Drywall Screw" | font:Oswald/16px/w600 | align:LEFT
    [GROUP] Group 17 | 201x430
      [FRAME] Frame 17 | 199x138 | layout:VERTICAL | pad:10,10,10,10 | gap:10
        [TEXT] 03 | 179x16 | "03" | font:Inter/12px/w700 | align:LEFT
        [TEXT] Metal Stud Screws | 179x28 | "Metal Stud Screws" | font:Russo One/14px/w400 | align:LEFT
        [TEXT] Built for demanding assemblies where strength matters most. | 179x54 | "Built for demanding assemblies where strength matters most." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Frame 18 | 178x149 | radius:1 | layout:VERTICAL | pad:10,10,10,10 | gap:10
        [TEXT] 02 | 158x16 | "02" | font:Inter/12px/w700 | align:LEFT
        [TEXT] Drywall Screws | 158x28 | "Drywall Screws" | font:Russo One/14px/w400 | align:LEFT
        [TEXT] Fast bite performance for stronger day-to-day applications. | 158x65 | "Fast bite performance for stronger day-to-day applications." | font:Inter/14px/w400 | align:LEFT
      [FRAME] Frame 19 | 180x126 | layout:VERTICAL | pad:10,10,10,10 | gap:10
        [TEXT] 01 | 160x16 | "01" | font:Inter/12px/w700 | align:LEFT
        [TEXT] Framing Screws | 160x21 | "Framing Screws" | font:Russo One/14px/w400 | align:LEFT
        [TEXT] Self-drilling for quick penetration. | 141x49 | "Self-drilling for quick penetration.  " | font:Inter/14px/w400 | align:LEFT
```

