import Breadcrumb from "@/components/Breadcrumb";
import ShareIcons from "@/components/ShareIcons";
import { formatViews } from "@/lib";
import { fields } from "@/types";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { FaCalendarAlt } from "react-icons/fa";
import { FaEye, FaShareNodes } from "react-icons/fa6";

type Params = Promise<{ slug: string }>;
type BreadcrumbItem = {
  title: string;
  url?: string;
};

interface ShareIconsProps {
  post: Post;
}

async function getSinglePost(slug: string): Promise<Post | null> {
  try {
    const uri = `${process.env.NEXT_PUBLIC_WP_API}/posts?slug=${slug}&_fields=${fields}&_embed&per_page=1`;

    const response = await fetch(uri, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    return posts[0];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  const breadcrumbData: BreadcrumbItem[] = [
    { title: "Berita", url: "/kategori" },
    { title: post?.title.rendered ?? "" },
  ];

  return (
    <div className="py-6 pb-8 lg:py-8 lg:pb-10 px-4 lg:px-0 dark:bg-dark-primary transition-all ease-in-out duration-300">
      <div className="container max-w-6xl mx-auto">
        {/* Left Grid */}
        <div className="grid grid-cols-6 gap-8 lg:gap-11">
          <div className="col-span-6 lg:col-span-4">
            <Breadcrumb data={breadcrumbData} />
            <h6 className="leading-tight lg:leading-snug mb-3 lg:mb-5 text-lg lg:text-3xl font-semibold dark:text-gray-200">
              {post?.title.rendered}
            </h6>
            <ShareIcons title={post?.title.rendered} slug={post?.slug} />

            {/* Info author dan kategori */}
            <div className="flex items-center space-x-1.5 mt-5 text-gray-700 dark:text-gray-300 text-xs">
              <span>
                by{" "}
                <Link
                  href="#"
                  className="hover:underline hover:text-accent-dark font-semibold"
                >
                  {post?.yoast_head_json.author.toUpperCase()}
                </Link>
              </span>
              <span>in</span>
              <span>
                {post?._embedded["wp:term"][0].map((item, index) => (
                  <Link
                    key={index}
                    href={`/category/${item.slug}`}
                    className="font-medium border dark:border-gray-700 hover:underline text-gray-200 px-3 py-0.5 rounded text-[10px] bg-sky-700 dark:bg-dark-secondary transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </span>
            </div>

            {/* Image */}
            <div className="mt-7 lg:mt-12">
              <img
                src={post?.better_featured_image.source_url || ""}
                alt="img"
                className="border dark:border-transparent w-full"
              />
            </div>

            {/* Date, views, shares */}
            <div className="dark:text-gray-400 text-gray-500 mt-5 flex items-center space-x-3 lg:space-x-3 text-xs lg:text-sm">
              <p className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                <span>
                  {new Date(post?.date ?? "").toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <span className="w-[1px] h-[15px] lg:h-[17px] bg-gray-300"></span>
              <p className="flex items-center">
                <FaEye className="mr-1" />
                &nbsp;{formatViews(post?.views ?? 0)} Views
              </p>
              <span className="w-[1px] h-[17px] bg-gray-300"></span>
              <p className="flex items-center">
                <FaShareNodes className="mr-1" />
                &nbsp;{102} Shares
              </p>
            </div>

            <hr className="mt-2 lg:mt-3 mb-5 border-gray-200 dark:border-gray-700" />

            {/* Content news */}
            <div className="lg:mt-9 mb-8 lg:mb-10 prose prose-sm dark:prose-invert">
              {parse(post?.content.rendered ?? "")}
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
