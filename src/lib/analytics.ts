export const GA_MEASUREMENT_ID = "G-JWP1LEN89M";
export const CLARITY_PROJECT_ID = "xyn5xl9nb4";

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagEventParams) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) window.clarity("set", key, String(value));
      }
    }
  }
}
