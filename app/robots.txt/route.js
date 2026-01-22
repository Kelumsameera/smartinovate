import { NextResponse } from "next/server";

export async function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://smartinnovate.com/sitemap.xml
`;

  return new NextResponse(robots.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
