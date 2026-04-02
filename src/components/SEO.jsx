import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoKeywordMappings } from "@/utils/seoMapping";

const SEO = ({
  title,
  description,
  keywords = "Mark Care, markCare.in, Specialized Services, best home services near me, expert ac service, ro installation, elevator maintenance, solar installation, dg maintenance, tv installation, maintenance services in bangalore, maintenance services in chennai, markcare near me in delhi",
  author = "Mark Care",
  image = "/assets/Markcare Logo2.png",
  noIndex = false,
}) => {
  const location = useLocation();
  const baseUrl = "https://markcare.in";

  const pathnameParts = location.pathname.split("/");
  const canonicalPath =
    pathnameParts.length > 2 ? `/${pathnameParts.slice(2).join("/")}` : location.pathname;

  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const currentPath = location.pathname;
  let dynamicKeywordsList = seoKeywordMappings[currentPath];
  if (!dynamicKeywordsList && currentPath.endsWith('/') && currentPath.length > 1) {
    dynamicKeywordsList = seoKeywordMappings[currentPath.slice(0, -1)];
  }

  const finalKeywords = dynamicKeywordsList
    ? `${keywords}, ${dynamicKeywordsList.join(", ")}`
    : keywords;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />

      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />

      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow"}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={author} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@MarkCare" />
    </Helmet>
  );
};

export default SEO;