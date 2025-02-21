import CardNews from "@/components/CardNews";
import CardNewsSm from "@/components/CardNewsSm";

const LatestNews = ({ latestNews }: any) => {
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

          {/* <div className="col-span-6 md:col-span-2">
            <div className="mb-5 md:mb-8 flex items-center space-x-3">
              <span className="block size-3 bg-blue-700"></span>
              <h6 className="text-lg md:text-xl font-semibold dark:text-gray-200">Penghargaan</h6>
            </div>
            <div className="grid grid-cols-1 gap__card">
              {penghargaanNews.slice(0, 5).map((item, i) => (
                <div key={i} data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay={i === 0 ? 0 : i * 100}>
                  <SmCardNews news={item} />
                </div>
              ))}
            </div>

            <div className="mt-9 swiper">
              <div className="swiper-wrapper">
                {penghargaanNews.slice(5).map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div
                      className="relative aspect-[4/2.5] bg-cover bg-center"
                      style={{ backgroundImage: `url('storage/${item.image}')` }}
                    >
                      <div className="z-10 absolute inset-0 bg-gradient-to-b from-white/20 to-black/60"></div>
                      
                      <div className="p-5 relative z-20 text-white flex flex-col items-center justify-center h-full">
                        <span className="inline-block font-semibold mb-2 text-xs rounded px-3 py-1 bg-white text-blue-700">
                          {item.categories[0].name}
                        </span>
                        <span
                          onClick={() => navigateToUrl(item.slug)}
                          className="cursor-pointer leading-tight lg:leading-normal text-center font-semibold hover:underline"
                        >
                          {item.title.split(' ').slice(0, 10).join(' ')}
                        </span>
                        <p className="mt-4 lg:mt-5 text-xs">{new Date(item.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
