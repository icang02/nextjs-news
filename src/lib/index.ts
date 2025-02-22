export const formatViews = (num: number) => {
  if (num >= 1000 && num < 1100) {
    return "1k";
  } else if (num >= 1100) {
    const formatted = num / 1000;
    const decimals = formatted % 1 === 0 ? 0 : 1;
    return formatted.toFixed(decimals) + "k";
  }
  return num.toString();
};

export function stripTags(html: any) {
  return html.replace(/<[^>]*>?/gm, "");
}
