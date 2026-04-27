import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { seoKeywordMappings } from "./src/utils/seoMapping.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://markcare.in";

const staticRoutes = [
  "/",
  "/about-us",
  "/contact-us",
  "/projects",
  "/gallery",
  "/blogs"
];

const dynamicRoutes = Object.keys(seoKeywordMappings);

const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];

const generateSitemap = () => {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach((route) => {
    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>${DOMAIN}${route}</loc>\n`;
    sitemapContent += `    <changefreq>weekly</changefreq>\n`;
    sitemapContent += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    sitemapContent += `  </url>\n`;
  });

  sitemapContent += `</urlset>\n`;

  const publicPath = path.join(__dirname, "public");
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }

  // Also write to dist if it exists, so both dev and build are covered
  fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemapContent, "utf8");
  
  const distPath = path.join(__dirname, "dist");
  if (fs.existsSync(distPath)) {
    fs.writeFileSync(path.join(distPath, "sitemap.xml"), sitemapContent, "utf8");
  }

  console.log("Sitemap successfully generated at public/sitemap.xml");
};

generateSitemap();
