export const SITE_NAME =
  process.env.NODE_ENV === "production"
    ? "https://denos.vercel.app"
    : "http://localhost:3000";
