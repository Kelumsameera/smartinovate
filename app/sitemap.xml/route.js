import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://smartinnovate.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/services/custom-software",
    "/services/web-development",
    "/services/mobile-apps",
    "/services/cloud-solutions",
    "/services/industrial-automation",
    "/services/iot-home-automation",
    "/services/consulting",
    "/projects",
    "/contact",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
