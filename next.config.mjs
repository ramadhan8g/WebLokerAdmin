/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"vepalewmckbquscujiwb.supabase.co",
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
