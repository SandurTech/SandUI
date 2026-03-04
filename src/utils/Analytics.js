/**
 * SandUI Analytics Utility
 *
 * Placeholder module for integrating analytics services.
 * Paste your GA4 and Microsoft Clarity tracking codes below.
 *
 * Usage:
 *   import { initAnalytics } from './utils/Analytics';
 *   initAnalytics();  // Call once in your app entry point.
 */

/**
 * Initializes Google Analytics 4.
 * Replace 'G-XXXXXXXXXX' with your GA4 Measurement ID.
 */
export function initGA4() {
  const GA_ID = 'G-XXXXXXXXXX'; // <-- Replace with your GA4 ID

  if (typeof window === 'undefined' || GA_ID === 'G-XXXXXXXXXX') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID);
}

/**
 * Initializes Microsoft Clarity.
 * Replace 'xxxxxxxxxx' with your Clarity Project ID.
 */
export function initClarity() {
  const CLARITY_ID = 'vqejz5qd92'; // <-- Replace with your Clarity ID

  if (typeof window === 'undefined' || CLARITY_ID === 'xxxxxxxxxx') return;

  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
}

/**
 * Initializes all analytics services.
 * Call this once in your app entry point.
 */
export function initAnalytics() {
  initGA4();
  initClarity();
}