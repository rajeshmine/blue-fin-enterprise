"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ClientsCarousel() {
  const clients = [
    "cl.png", "cl1.png", "cl2.png", "cl3.png", "cl4.png", "cl5.png",
    "cl6.png", "cl7.png", "cl8.png", "cl9.png", "cl10.png", "cl11.png",
    "cl12.png", "cl13.png", "cl14.png", "cl15.png", "cl16.png", "cl17.png",
    "cl18.png",
  ];
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3">
            Our Happy Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-gray-100 tracking-tight">
            Our Valuable <span className="text-accent">Clients</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={16}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 5, spaceBetween: 24 },
          480: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="!pb-12 !px-2 sm:!px-4"
      >
        {clients.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={`/images/clients/${logo}`} className="mx-auto h-12 sm:h-14 md:h-16 w-auto object-contain" alt={`Client ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}