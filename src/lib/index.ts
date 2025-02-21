export const formatViews = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k";
  }
  return num.toString();
};

export function stripTags(html: any) {
  return html.replace(/<[^>]*>?/gm, "");
}
