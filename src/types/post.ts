export interface Post {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: number[];
  better_featured_image: {
    source_url: string;
  };
  views: number;
  yoast_head_json: {
    author: string;
  };
  _embedded: {
    "wp:term": {
      name: string;
      slug: string;
    }[][];
  };
}
