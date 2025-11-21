import ReactGA from "react-ga4"

let isInitialized = false

export function initAnalytics(measurementId) {
  if (!measurementId) return

  ReactGA.initialize(measurementId)
  isInitialized = true
}

export function trackPageView(path) {
  if (!isInitialized) return

  ReactGA.send({ hitType: "pageview", page: path })
}

export function trackEvent({ category, action, label, value }) {
  if (!isInitialized) return

  ReactGA.event({ category, action, label, value })
}
