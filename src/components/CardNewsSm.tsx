import Link from "next/link";
import { FaRegEye, FaShare } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const CardNewsSm = ({ news, isPopular, iconShared, index }: any) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="relative w-[140px]">
        <img
          src={news.better_featured_image.source_url}
          alt="image"
          className="border dark:border-transparent w-full aspect-[4/2.5] object-cover object-center hover:brightness-75 transition ease-in"
        />
        {isPopular && (
          <span className="text-xs absolute top-0 right-0 bg-white/70 text-black/70 px-2 rounded-bl-md font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="w-full">
        <Link
          href={`/${news.link}`}
          className="text__title text-[13px] line-clamp-2 font-medium tracking-wide leading-tight lg:leading-snug hover:underline hover:text-accent-dark hover:dark:text-accent"
        >
          {news.title.rendered}
        </Link>
        <p className="text__other mt-1.5 text-[10px] lg:text-[10px] font-normal flex items-center space-x-3 lg:space-x-4">
          <span className="flex items-center space-x-1">
            <MdDateRange className="opacity-70 -mt-0.5" />
            <span>
              {new Date(news.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </span>
          <span className="flex items-center space-x-1">
            <FaRegEye className="opacity-70 -mt-0.5" />
            <span>{news.views + 752}</span>
          </span>
          {iconShared && (
            <span className="flex items-center space-x-1">
              <FaShare className="opacity-70" />
              <span>{102} shares</span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CardNewsSm;
