import heroVideo from "../../assets/video/Pro Grip Hero Video.mp4";
import "./Hero.css";

function CrosshairIcon() {
  return (
    <svg
      className="hero__crosshair"
      viewBox="0 0 85.09 85.09"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Red filled background circle */}
      <circle cx="42.545" cy="42.545" r="42.545" fill="transparent" />
      {/* Outer ring */}
      <circle cx="42.545" cy="42.545" r="39.085" fill="none" stroke="#CC1010" strokeWidth="5" />
      {/* Inner small circle */}
      <circle cx="42.545" cy="42.545" r="11.8" fill="#CC1010" stroke="#CC1010" strokeWidth="5" />
      {/* Left horizontal tick */}
      <line x1="0.96" y1="41.59" x2="15.3" y2="41.59" stroke="#CC1010" strokeWidth="5" strokeLinecap="round" />
      {/* Right horizontal tick */}
      <line x1="69.79" y1="41.59" x2="84.13" y2="41.59" stroke="#CC1010" strokeWidth="5" strokeLinecap="round" />
      {/* Top vertical tick */}
      <line x1="42.545" y1="0.96" x2="42.545" y2="15.3" stroke="#CC1010" strokeWidth="5" strokeLinecap="round" />
      {/* Bottom vertical tick */}
      <line x1="42.545" y1="69.79" x2="42.545" y2="84.13" stroke="#CC1010" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Pro+Grip hero">
      <video className="hero__video" autoPlay muted loop playsInline preload="auto">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero__video-overlay" aria-hidden="true" />

      <div className="hero__stage">
        <span className="hero__stripe hero__stripe--red" aria-hidden="true" />
        <span className="hero__stripe hero__stripe--gray" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__eyebrow">
            Professional-grade fasteners + professional-grade platform
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">Pro Hold.</span>
            <span className="hero__title-line">Pro<CrosshairIcon />Speed.</span>
            <span className="hero__title-line">Pro+Grip.</span>
          </h1>

          <p className="hero__subtitle">
            Engineered for professionals who demand speed, reliability, and
            control. Built to perform on every job site.
          </p>

          <div className="hero__actions">
            <button type="button" className="hero__btn hero__btn--primary">
              Order Now
            </button>
            <button type="button" className="hero__btn hero__btn--outline">
              Build a Submittal
            </button>
          </div>
        </div>

        <ul className="hero__personas">
          <li className="hero__persona hero__persona--installer">
            <span className="hero__persona-num">01</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Installer</h2>
              <p className="hero__persona-body">
                Pro Quality Screws that won&rsquo;t slow down or delay the job.
              </p>
            </div>
          </li>

          <li className="hero__persona hero__persona--distributor">
            <span className="hero__persona-num">02</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Distributor</h2>
              <p className="hero__persona-body">
                Back office, managing 5 jobs and 3 suppliers from a spreadsheet.
                And need a better solution.
              </p>
            </div>
          </li>

          <li className="hero__persona hero__persona--contractor">
            <span className="hero__persona-num">03</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Contractor</h2>
              <p className="hero__persona-body">
                Bidding a project and needs a product submittal in under 60
                seconds.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;