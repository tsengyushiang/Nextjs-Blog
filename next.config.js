/** @type {import('next').NextConfig} */

let nextConfig = {
  reactStrictMode: true,
  env: {
    TIME: new Date(),
  },
}
if (process.env.NODE_ENV == 'production') {
  const githubPagesConfig = (github_repo_name) => {
    return {
      assetPrefix: `/${github_repo_name}`,
      basePath: `/${github_repo_name}`,
      images: {
        loader: "akamai",
        path: `/${github_repo_name}`
      }
    }
  }
  nextConfig = {
    ...nextConfig,
    ...githubPagesConfig("Nextjs-Blog")
  }
}
module.exports = nextConfig
