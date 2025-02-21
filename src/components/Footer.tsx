const navLinks = [
  { name: "Beranda", url: "/" },
  { name: "Berita", url: "/" },
  { name: "Pemerintahan", url: "/menu-1" },
  { name: "Penghargaan", url: "/menu-2" },
  { name: "Smart City", url: "/menu-3" },
  { name: "Event", url: "/menu-5" },
  { name: "Foto", url: "/menu-4" },
  { name: "Video", url: "/menu-4" },
];

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  return (
    <div className="dark:border-t dark:border-t-gray-800 py-12 pb-8 mb-0 lg:py-12 lg:pt-14 lg:mb-0 px-4 lg:px-0 bg-main dark:bg-dark-primary transition-all ease-in-out duration-300">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
          {/* Logo & Info */}
          <div className="col-span-3 lg:col-span-1">
            <div className="mb-2.5 lg:mb-4 flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <img
                src="/img/logo.svg"
                alt="logo"
                className="w-44 -mt-2.5 mb-1.5 lg:mb-3"
              />
              <div className="h-0.5 lg:h-1 w-[174px] lg:w-full bg-gradient-to-l rounded-sm from-gray-400 to-gray-400"></div>
            </div>
            <p className="flex space-x-2 text-xs font-normal leading-normal -mt-0.5 lg:-mt-2.5">
              <span className="text-white/70">&#169; 2021-2025</span>
              <Link href="/" className="text-white   font-bold hover:underline">
                Dinas Komunikasi dan Informatika Kota Kendari
              </Link>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-3 lg:col-span-1">
            <div className="mb-2.5 lg:mb-4 flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <p className="mt-0 lg:-mt-1 text-xs font-semibold text-white">
                Pintasan
              </p>
              <div className="h-0.5 lg:h-1 w-[56px] lg:w-full bg-gradient-to-l rounded-sm from-gray-400 to-gray-400"></div>
            </div>
            <div className="flex justify-start flex-row gap-x-3 gap-y-1 flex-wrap text-white font-normal text-xs">
              {navLinks.map((item, index) => (
                <span key={index} className="flex items-center gap-x-1">
                  <Link
                    href={`/category/${item.url}`}
                    className="hover:underline"
                  >
                    {item.name}
                  </Link>
                  {index !== navLinks.length - 1 && (
                    <span className="text-gray-200 dark:text-gray-400">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-3 lg:col-span-1">
            <div className="mb-2.5 lg:mb-4 flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <p className="mt-0 lg:-mt-1 text-xs font-semibold text-white text-nowrap">
                Sosial Media
              </p>
              <div className="h-0.5 lg:h-1 w-[77px] lg:w-full bg-gradient-to-l rounded-sm from-gray-400 to-gray-400"></div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-2.5">
              {socialIcons.map((item, index) => (
                <a
                  target="_blank"
                  key={index}
                  href={item.link}
                  className="rounded-full text-sm lg:text-lg size-9 lg:size-10 transition cursor-pointer duration-300 ease-in-out flex justify-center items-center text-gray-300 border border-gray-300/30 hover:text-accent hover:border-accent/50"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
