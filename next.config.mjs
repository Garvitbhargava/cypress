/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["evpyfkeikvbbhozgpdix.supabase.co"],
  },
};

export default nextConfig;
