import { useEffect, useState } from "react";
import "./YouTube.css";

export default function YouTube() {
  const videos = [
    "https://www.youtube.com/embed/gX5bfZuIQSU?si=WXUwILhy0D_D2D7B?rel=0&modestbranding=1&showinfo=0",
    "https://www.youtube.com/embed/38jbhhwn4n8?si=JalwsEPYuO8pYN9L",
    "https://www.youtube.com/embed/MCpXTyipD6Y?si=izJ_G1fF6gut7hug",
    "https://www.youtube.com/embed/zn5S5w_Fgh4?si=M_QrdfPWbSBiqt2Y",
    "https://www.youtube.com/embed/GRzxqqY0N2U?si=mySnQt1sRzoTOaX_",
    "https://www.youtube.com/embed/EPwFjZxTUWk?si=SUmwEk1dKiVEAytn",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 600);
    }
  }, []);

  const videosToDisplay = isMobile ? videos.slice(0, 4) : videos;


  return (
    <section id="youtube-wall" className="youtube-section">
      <h1 className="section-heading">Watch Our Latest Videos</h1>
      <div className="video-grid">
        {videosToDisplay.map((video, index) => (
          <iframe
            key={index}
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </section>
  );
}
