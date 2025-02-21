import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";

import "swiper/css";
import "swiper/css/effect-fade";

const WORDPRESS_API_URL = "https://berita.kendarikota.go.id/wp-json/wp/v2";

async function getPosts(
  perPage: number = 2,
  categoryId?: number
): Promise<any[]> {
  try {
    const uri = categoryId
      ? `${WORDPRESS_API_URL}/posts?categories=${219}&per_page=${perPage}`
      : `${WORDPRESS_API_URL}/posts?per_page=${perPage}`;

    const response = await fetch(uri, {
      next: { revalidate: 60 * 60 * 3 },
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
  const posts = await getPosts(8);
  const penghargaan = await getPosts(8, 219);
  // console.log(posts);

  return (
    <>
      <Hero latestNews={posts} />
      <LatestNews latestNews={posts} penghargaanNews={penghargaan} />
    </>
  );
}
