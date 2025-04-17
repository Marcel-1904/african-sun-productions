import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact-us" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <div className="contact-content">
          <p>
            We are based in the Eastern Cape, South Africa
            <br />
            Since we are constantly filming, and sometimes out of reach by
            phone, please contact us via email:{" "}
            <a
              className="email-link"
              href="mailto:info@africansunproductions.com"
            >
              info@africansunproductions.com
            </a>
          </p>
          <br />
          <h2>Follow Us</h2>
          <p>Keep up to date with our latest adventures!</p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AfricanSunProductions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={"/facebook-icon.png"}
                alt="Facebook-Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/africansunproductions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={"/instagram-icon.png"}
                alt="Instagram-Icon"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/c/AfricanSunProductions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={"/Youtube-icon.png"}
                alt="Youtube-Icon"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
