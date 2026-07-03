const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "Homepage";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : "",
  images: { unoptimized: true },
};

export default nextConfig;
