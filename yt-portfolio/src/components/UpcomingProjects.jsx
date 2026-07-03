import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function UpcomingProjects() {
  const upcoming = [
    {
      title: "AFTER THE CLICK",
      image: "/CLICK.png",
      type: "ZEE SHORT FILM CONTEST",
    },
    {
      title: "DEMON IN THE VASE",
      image: "/VASE.png",
      type: "ARABIAN FOLKLORE",
    },
    {
      title: "DEMON IN THE BOX (2027)",
      image: "/BOX.png",
      type: "ARABIAN FOLKLORE",
    },
    {
      title: "BEN 10 ULTIMATE MISSION",
      image: "/BEN10.png",
      type: "VFX SHORT",
    },
  ];

  return (
    <section
  id="upcoming"
  className="py-24 relative overflow-hidden bg-base-100"
>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">

          <div className="inline-flex px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">
              Upcoming Projects
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content">
            Future <span className="text-primary">Projects</span>
          </h2>

          <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-base-content/40 font-bold">
            Original Films • VFX • CGI • Animation
          </p>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {upcoming.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
                />

                {/* Film grain */}
                <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 transition-opacity duration-700"></div>

                {/* Text */}
                <div className="absolute bottom-7 left-7">

                  <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-3">
                    {item.type}
                  </p>

                  <h3 className="text-2xl md:text-4xl font-black uppercase italic text-white leading-none max-w-[90%]">
                    {item.title}
                  </h3>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}