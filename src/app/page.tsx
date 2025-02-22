import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import { fields } from "@/types";
import { Post } from "@/types/post";

import "swiper/css";
import "swiper/css/effect-fade";

async function getPosts(
  perPage: number = 2,
  categoryId?: number
): Promise<any[]> {
  try {
    const uri = categoryId
      ? `${process.env.NEXT_PUBLIC_WP_API}/posts?categories=${categoryId}&per_page=${perPage}&_fields=${fields}&_embed`
      : `${process.env.NEXT_PUBLIC_WP_API}/posts?per_page=${perPage}&_fields=${fields}&_embed`;

    const response = await fetch(uri, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Home() {
  const posts: Post[] = await getPosts(8);
  const penghargaan: Post[] = await getPosts(8, 305);
  // console.log(posts[0]._embedded["wp:term"][0]);

  return (
    <>
      <Hero latestNews={posts} />
      <LatestNews latestNews={posts} penghargaanNews={penghargaan} />
    </>
  );
}
