export interface BreadcrumbItem {
  title: string;
  url?: string;
}

// CONSTANT
export const fields =
  "&_embed=wp:term&fields=_embedded.wp_term,id,date,slug,link,title,content,excerpt,categories,better_featured_image.source_url,views,yoast_head_json.author";
