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
  const posts = await getPosts();

  return (
    <div className="w-full px-3 py-6 max-w-6xl mx-auto">
      <ul className="list-disc">
        {posts.map((item) => (
          <li key={item.id}>
            <a target="_blank" href={item.link} className="hover:underline">
              {item.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
