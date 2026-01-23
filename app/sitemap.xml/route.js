export async function GET() {
  const baseUrl = "https://smartinovate.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/projects",

    // services
    "/services/custom-software-development",
    "/services/web-development",
    "/services/mobile-app-development",
    "/services/industrial-automation",
    "/services/iot-home-automation",
    "/services/cloud-solutions",
    "/services/it-consulting",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
