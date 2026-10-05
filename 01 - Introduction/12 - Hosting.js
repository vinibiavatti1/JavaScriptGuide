/**
 * Hosting
 *
 * Hosting a Node.js application should be simple, low-cost, and quick to set up. Platforms
 * generally split into automated cloud services (PaaS) or custom cloud servers (VPS).
 *
 * Deployment Strategies:
 * - PaaS (Platform as a Service): You push your code to GitHub, connect your repository to the
 *   host, and it automatically builds, deploys, configures HTTPS, and runs your app. Zero server
 *   maintenance required.
 * - VPS (Virtual Private Server): You rent a small Linux server (e.g., $4-$6/mo) and manually
 *   install Node.js, Git, PM2 (process manager), and Nginx (reverse proxy). Requires server
 *   configuration, but gives total control and fixed predictable costs.
 * - Enterprise / IaaS (AWS, GCP, Azure): High-end infrastructure designed for complex microservices
 *   and large teams. Usually used for big and scalable projects.
 *
 * Hosting Platforms:
 * - Render (PaaS): The modern free alternative to Heroku. Deploys directly from GitHub, offers
 *   automated SSL, and includes a free tier (spins down after 15 minutes of inactivity).
 * - Railway (PaaS): Excellent developer experience with instant deployments and built-in databases
 *   (PostgreSQL, Redis). Generous trial usage with predictable pay-as-you-go pricing.
 * - Vercel / Netlify (Serverless): Best for fullstack Node.js apps (Next.js, Nuxt) or API endpoints
 *   running as serverless functions. Extremely fast and free for personal projects.
 * - DigitalOcean / Hetzner (VPS): Ideal if you need to host multiple Node.js apps, databases, and
 *   cron jobs on a single cheap $4-$6/mo Linux virtual machine without free-tier limitations.
 */
