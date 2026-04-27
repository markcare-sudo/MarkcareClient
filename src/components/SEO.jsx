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
  let dynamicSeoData = seoKeywordMappings[currentPath];
  if (!dynamicSeoData && currentPath.endsWith('/') && currentPath.length > 1) {
    dynamicSeoData = seoKeywordMappings[currentPath.slice(0, -1)];
  }

  const finalTitle = dynamicSeoData?.title || title || "Mark Care - Specialized Services";
  const finalDescription = dynamicSeoData?.description || description || "Mark Care offers specialized services for elevators, water treatment plants, sewage treatment plants, RO purifiers, and generators.";
  const finalKeywords = dynamicSeoData?.keywords
    ? `${keywords}, ${dynamicSeoData.keywords.join(", ")}`
    : keywords;

  return (
    <Helmet>
      <title>{finalTitle}</title>

      <link rel="canonical" href={canonicalUrl} />

      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />

      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow"}
      />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={author} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@MarkCare" />
    </Helmet>
  );
};

export default SEO;