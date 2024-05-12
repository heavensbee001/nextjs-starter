import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.cloud.google.com", "storage.googleapis.com"],
    formats: ["image/avif"],
  },
};

export default withNextIntl(nextConfig);
