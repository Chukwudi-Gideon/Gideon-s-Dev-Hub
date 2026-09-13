import posthog from "posthog-js"

const isProductionDeployment = () => {
  if (typeof window === "undefined") return false;

  const hostname = window.location.hostname;
  const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");

  return process.env.NODE_ENV === "production" && !isLocalHost;
};

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (isProductionDeployment() && token && host) {
  posthog.init(token, {
    api_host: host,
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: false,
  });
} else {
  posthog.opt_out_capturing();
}
