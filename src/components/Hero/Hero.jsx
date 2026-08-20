import heroVideo from "../../assets/video/Pro Grip Hero Video.mp4";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" aria-label="PROGRIP hero">
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
            <span className="hero__title-line">Built For Pros,</span>
            <span className="hero__title-line">Ready For The Job!</span>
          </h1>

          <p className="hero__subtitle">
            Engineered for professionals who demand speed, reliability, and
            control. Built to perform on every job site.
          </p>

          <div className="hero__actions">
            <a href="#products" className="hero__btn hero__btn--primary">
              Order Now
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Build Submittals
            </a>
          </div>
        </div>

        <ul className="hero__personas">
          <li className="hero__persona hero__persona--installer">
            <span className="hero__persona-num">01</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Installer</h2>
              <p className="hero__persona-body">
                Pro Quality Screws that wonrsquo;t slow down or delay the job.
              </p>
            </div>
          </li>

          <li className="hero__persona hero__persona--distributor">
            <span className="hero__persona-num">02</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Distributor</h2>
              <p className="hero__persona-body">
                Back office, managing 5 jobs and 3 suppliers from a
                spreadsheet and needs a better solution.
              </p>
            </div>
          </li>

          <li className="hero__persona hero__persona--contractor">
            <span className="hero__persona-num">03</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">The Contractor</h2>
              <p className="hero__persona-body">
                Focused on job profitability and crew productivity. Values
                quality products that reduce delays and rework costs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
