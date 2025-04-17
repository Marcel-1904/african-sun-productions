import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="right-side-content">
        <div className="logo-section">
          <img src="./ASP Overlay.png" alt="African Sun Productions Logo" />
        </div>
        <div className="text-content">
          <h2>We Get The Shot</h2>
          <p>
            ASP specializes in making hunting movies for the private hunter.
            This is what we do, full-time.
            <br />
            <br />
            We believe that you do the hunt, we film it. You won’t even know you
            have a cameraman with you on the stalk, until you relive your day,
            sitting around the campfire with a cold one in hand.
            <br />
            <br />
            We always try to get the needed footage as it happens, so you don’t
            need to re-enact it later on. Live footage captures the action, your
            emotion, and it will edit into the perfect movie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
