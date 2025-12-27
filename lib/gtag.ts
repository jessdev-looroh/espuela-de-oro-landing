export const gaEvent = (name: string, params?: Record<string, any>) => {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.gtag?.("event", name, params);
};
