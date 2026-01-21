/** @type {import('next-seo').DefaultSeoProps} */
const nextSeoConfig = {
  title: "Smart Innovate - Smart Solutions in Web, Software & IoT",
  description:
    "Smart Innovate provides web development, IoT solutions, and business automation in Sri Lanka.",
  openGraph: {
    type: "website",
    url: "https://www.smartinovate.com",
    title: "Smart Innovate - Smart Solutions",
    description:
      "Smart Innovate provides web development, IoT solutions, and business automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Innovate",
      },
    ],
  },
  twitter: {
    handle: "@smartinovate",
    site: "@smartinovate",
    cardType: "summary_large_image",
  },
};

module.exports = nextSeoConfig;
