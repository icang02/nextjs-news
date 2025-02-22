import { BreadcrumbItem } from "@/types";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface BreadcrumbProps {
  data: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => {
  return (
    <div className="mb-4 lg:mb-7 bg-[#F6F6F7] px-4 py-2.5 dark:bg-dark-secondary transition-all ease-in-out duration-300">
      <div className="text-[10px] lg:text-xs font-normal flex items-center space-x-2 dark:text-gray-300">
        {/* Link ke Beranda */}
        <Link href="/" className="text-zinc-700 hover:underline">
          Beranda
        </Link>
        <FaAngleRight className="opacity-50 dark:opacity-70" />

        {data.map((item, i) => (
          <React.Fragment key={i}>
            {item.url ? (
              <Link href={item.url} className="text-zinc-700 hover:underline">
                {item.title}
              </Link>
            ) : (
              <span className="text-zinc-700/80 line-clamp-1 dark:text-gray-400">
                {item.title}
              </span>
            )}
            {i !== data.length - 1 && (
              <FaAngleRight className="opacity-50 dark:opacity-70" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
