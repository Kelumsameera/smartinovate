export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://smartinovate.com/sitemap.xml
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
