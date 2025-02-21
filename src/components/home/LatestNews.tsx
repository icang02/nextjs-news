"use client";
import CardNews from "@/components/CardNews";
import CardNewsSm from "@/components/CardNewsSm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdDateRange } from "react-icons/md";

const LatestNews = ({ latestNews, penghargaanNews }: any) => {
  return (
    <div className="py-8 pb-12 lg:py-12 lg:pb-16 px-4 lg:px-0 dark:bg-dark-primary transition-all ease-in-out duration-300">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-6 gap-7">
          <div className="col-span-6 md:col-span-4">
            <div className="mb-5 md:mb-8 flex items-center space-x-3">
              <span className="block size-3 bg-blue-700"></span>
              <h6 className="text-lg md:text-xl font-semibold dark:text-gray-200">
                Berita Terbaru
              </h6>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap__card">
              {latestNews.map((item: any, i: any) => (
                <div key={i} className="col-span-2 lg:col-span-1">
                  {i < 2 ? (
                    <CardNews previewContent={true} news={item} />
                  ) : (
                    <CardNewsSm news={item} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="mb-5 md:mb-8 flex items-center space-x-3">
              <span className="block size-3 bg-blue-700"></span>
              <h6 className="text-lg md:text-xl font-semibold dark:text-gray-200">
                Penghargaan
              </h6>
            </div>
            <div className="grid grid-cols-1 gap__card">
              {penghargaanNews.slice(0, 5).map((item: any, i: any) => (
                <div key={i}>
                  <CardNewsSm news={item} />
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                className="swiper"
              >
                {penghargaanNews.slice(5).map((item: any, i: any) => (
                  <SwiperSlide key={i}>
                    <div
                      className="relative aspect-[4/2.5] bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${item.better_featured_image.source_url}')`,
                      }}
                    >
                      <div className="z-10 absolute inset-0 bg-gradient-to-b from-white/0 to-black/80"></div>

                      <div className="p-5 relative z-20 text-white flex flex-col items-center justify-center h-full">
                        <span className="inline-block font-semibold mb-2 text-xs rounded px-3 py-1 bg-white text-blue-700">
                          Penghargaan
                        </span>
                        <span className="cursor-pointer leading-tight text-center font-semibold hover:underline">
                          {item.title.rendered}
                        </span>
                        <p className="mt-4 lg:mt-5 text-xs flex items-center space-x-1">
                          <MdDateRange />
                          <span>
                            {new Date(item.date).toLocaleDateString("id-ID", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
