import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      img: "/services-background.png",
      quote: "We are very happy",
    },
    { id: 2, img: "/services-background.png", quote: "Amazing service! Would absolutely recommend to anyone" },
    { id: 3, img: "/services-background.png", quote: "Highly recommended!" },
    { id: 4, img: "/services-background.png", quote: "Excellent experience!" },
    { id: 5, img: "/services-background.png", quote: "Would use again!" },
    { id: 6, img: "/services-background.png", quote: "Top-notch service!" },
  ];

  return (
    <section id="testimonials" className="testimonial-section">
      <h1 className="testimonial-heading">What Our Clients Say</h1>
      <div className="testimonial-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-card">
              <img src={item.img} alt="Client Testimonial" className="testimonial-image" />
              <p className="quote">{item.quote}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
