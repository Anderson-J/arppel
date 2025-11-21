import { useEffect } from "react"
import { initAnalytics, trackPageView, trackEvent } from "@/lib/analytics"

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function useAnalyticsPageView(pathname) {
  useEffect(() => {
    initAnalytics(GA_MEASUREMENT_ID)
    trackPageView(pathname)
  }, [pathname])
}

export function useCtaTracking(label) {
  function onClick() {
    trackEvent({
      category: "CTA",
      action: "click",
      label,
    })
  }

  return { onClick }
}

export function trackFormSubmit(formId) {
  trackEvent({
    category: "Form",
    action: "submit",
    label: formId,
  })
}
