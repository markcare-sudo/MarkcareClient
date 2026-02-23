import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  noIndex = false,
}) => {
  const location = useLocation();
  const baseUrl = "https://markcare.in";

  const pathnameParts = location.pathname.split("/");
  const canonicalPath =
    pathnameParts.length > 2 ? `/${pathnameParts.slice(2).join("/")}` : location.pathname;

  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow"}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;