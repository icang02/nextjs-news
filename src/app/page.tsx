import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";

const WORDPRESS_API_URL = "https://berita.kendarikota.go.id/wp-json/wp/v2";

async function getPosts(perPage: number = 2): Promise<any[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=${perPage}`
    );

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
  // console.log(posts);

  return (
    <>
      <Hero latestNews={posts} />
      <LatestNews latestNews={posts} />
    </>
  );
}
