"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { FaAngleLeft, FaAngleRight, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = ({ latestNews }: any) => {
  const [slide, setSlide] = useState(1);
  const router = useRouter();

  const navigateToUrl = (url: string) => {
    router.push(url);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        speed={700}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => setSlide(swiper.activeIndex + 1)}
        className="swiper"
      >
        {latestNews.slice(0, 3).map((item: any, i: any) => (
          <SwiperSlide key={i}>
            <div
              className="relative bg-contain bg-top h-[300px] lg:h-[480px]"
              style={{
                backgroundImage: `url('${item.better_featured_image.source_url}')`,
              }}
            >
              {/* Overlay */}
              <div className="z-[10] bg-gradient-to-b from-black/65 to-black/75 absolute inset-0"></div>

              {/* Content */}
              <div className="relative px-4 pb-8 lg:px-0 md:pb-16 h-full z-[20] container max-w-6xl mx-auto flex items-end justify-between">
                <div>
                  {/* Navigation Buttons */}
                  <div className="absolute top-3 right-4 md:left-0 md:top-16 flex items-center space-x-2">
                    <span
                      className={`swiper-button-prev cursor-pointer rounded-full bg-white/25 size-10 md:size-12 flex justify-center items-center opacity-70 ${
                        slide === 1 ? "cursor-auto" : "!opacity-100"
                      }`}
                    >
                      <FaAngleLeft className="text-white/90" />
                    </span>
                    <span
                      className={`swiper-button-next cursor-pointer rounded-full bg-white/25 size-10 md:size-12 flex justify-center items-center ${
                        slide === 3 ? "opacity-70 cursor-auto" : ""
                      }`}
                    >
                      <FaAngleRight className="text-white/90" />
                    </span>
                  </div>

                  <button className="font-medium mb-5 lg:mb-7 text-xs rounded px-3 py-1 bg-white text-blue-700">
                    Berita
                  </button>
                  <div className="w-[90%]">
                    <h1
                      onClick={() => navigateToUrl(`/${item.link}`)}
                      className="leading-tight lg:leading-[1.3] cursor-pointer line-clamp-2 lg:line-clamp-3 hover:underline text-xl lg:text-4xl font-bold text-white"
                    >
                      {item.title.rendered}
                    </h1>
                    <p className="text-[10px] lg:text-xs font-medium mt-4 lg:mt-7">
                      <span className="text-white/55">by</span>&nbsp;
                      <a
                        href="#"
                        className="text-white hover:underline uppercase"
                      >
                        username
                      </a>
                      &nbsp;&nbsp;
                      <span className="text-white/55">
                        <FaClock className="inline-block mr-1" />
                        {item.date}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Side News */}
                <div className="hidden md:flex flex-col space-y-8 max-w-80">
                  {latestNews.slice(0, 3).map((item2: any, index: any) => (
                    <div key={index}>
                      <p
                        className={`mb-4 text-white/50 text-xs ${
                          slide === index + 1 ? "!text-white/60" : ""
                        }`}
                      >
                        {item2.date}
                      </p>
                      <h6
                        className={`text-sm font-medium text-white/55 ${
                          slide === index + 1 ? "!text-white" : ""
                        }`}
                      >
                        {item2.title.rendered}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
