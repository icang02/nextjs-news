import Link from "next/link";
import { FaRegClock, FaRegEye } from "react-icons/fa";

function stripTags(html: any) {
  return html.replace(/<[^>]*>?/gm, "");
}

const CardNews = ({ news, previewContent }: any) => {
  return (
    <div>
      <img
        src={news.better_featured_image.source_url}
        alt="image"
        className="border dark:border-transparent w-full aspect-[4/2.5] object-cover object-center hover:brightness-75 transition ease-in"
      />
      <Link
        href={`/${news.link}`}
        className="text__title mt-3.5 block text-base font-medium tracking-wide leading-tight hover:underline"
      >
        {news.title.rendered}
      </Link>
      <p className="text__other mt-2 text-[10px] lg:text-[11px] font-normal flex items-center space-x-3 lg:space-x-5">
        <span className="flex items-center space-x-0.5 lg:space-x-1">
          <span>by</span>
          <Link href="#" className="uppercase font-medium hover:underline">
            {"Author"}
          </Link>
        </span>
        <span className="flex items-center space-x-1">
          <FaRegClock className="opacity-70 -mt-0.5" />
          <span>{news.date}</span>
        </span>
        <span className="flex items-center space-x-1">
          <FaRegEye className="opacity-70 -mt-0.5" />
          <span>{10}</span>
        </span>
      </p>
      {previewContent && (
        <p className="text__p mt-3 line-clamp-3 lg:line-clamp-2 text-xs font-normal text-zinc-600 leading-normal">
          {stripTags(news.content.rendered)}
        </p>
      )}
    </div>
  );
};

export default CardNews;
