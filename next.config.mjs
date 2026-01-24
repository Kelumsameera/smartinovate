/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "woinupcbvkriufpyhwtm.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "lankahost.net",
      },
      {
        protocol: "https",
        hostname: "www.payhere.lk",
      },
      {
        protocol: "https",
        hostname: "www.payhere.lk",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
      },
      {
        protocol: "https",
        hostname: "www.github.com",
      },
      {
        protocol: "https",
        hostname: "www.whatsapp.com",
      },
      {
        protocol: "https",
        hostname: "www.cloudflare.com",
      },
      {
        protocol: "https",
        hostname: "www.paypal.com",
      },
      
    ],

  },
};

export default nextConfig;
