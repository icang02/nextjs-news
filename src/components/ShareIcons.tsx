"use client";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegram,
  FaLink,
} from "react-icons/fa";

interface ShareIconsProps {
  title?: string;
  slug?: string;
}

const ShareIcons: React.FC<ShareIconsProps> = ({ title = "", slug }) => {
  const baseUrl = "https://kendarikota.go.id";
  // Kelas umum untuk ikon
  const classes =
    "rounded-full text-sm lg:text-lg w-7 h-7 lg:w-10 lg:h-10 transition cursor-pointer duration-300 ease-in-out flex justify-center items-center border border-gray-300 text-gray-700 hover:text-white hover:bg-sky-700 dark:text-gray-400 dark:border-gray-700 dark:hover:from-gray-800 dark:hover:to-gray-800";

  // Data ikon dengan react-icons
  const icons: { icon: React.ReactElement; url: string }[] = [
    {
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/${slug}`,
    },
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/?text=*${encodeURIComponent(
        title
      )}*%0A%0ABaca selengkapnya: ${baseUrl}/${slug}`,
    },
    {
      icon: <FaLinkedinIn />,
      url: `http://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}/${slug}&title=${encodeURIComponent(
        title
      )}&summary=${encodeURIComponent(title)}`,
    },
    {
      icon: <FaTelegram />,
      url: `https://t.me/share/url?url=**${encodeURIComponent(
        title
      )}**%0A%0ABaca selengkapnya: ${baseUrl}/${slug}`,
    },
  ];

  // Fungsi copy ke clipboard
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Link copied");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="flex items-center space-x-2">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {item.icon}
        </a>
      ))}
      <button
        onClick={() => copyText(`${baseUrl}/${slug}`)}
        className={classes}
      >
        <FaLink />
      </button>
    </div>
  );
};

export default ShareIcons;
