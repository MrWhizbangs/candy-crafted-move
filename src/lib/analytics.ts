// Google Analytics 4 integration
// Only loads when VITE_GA_MEASUREMENT_ID is set AND hostname matches production

// Declare gtag types
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

let isInitialized = false;

/**
 * Initialize Google Analytics 4
 * Only loads if:
 * 1. VITE_GA_MEASUREMENT_ID is set
 * 2. Current hostname matches VITE_PRODUCTION_HOSTNAME
 */
export const initGA = (): boolean => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const productionHostname = import.meta.env.VITE_PRODUCTION_HOSTNAME;

  // Don't initialize if already done
  if (isInitialized) {
    console.log('[Analytics] Already initialized');
    return true;
  }

  // Don't initialize if no measurement ID
  if (!measurementId || !productionHostname) {
    console.log('[Analytics] Disabled - no configuration found');
    return false;
  }

  // Check hostname (only load on production domain)
  const currentHostname = window.location.hostname;
  if (currentHostname !== productionHostname) {
    console.log(
      `[Analytics] Disabled - hostname "${currentHostname}" does not match "${productionHostname}"`
    );
    return false;
  }

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize GA4
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false, // We'll handle page views manually with React Router
    });

    isInitialized = true;
    console.log('[Analytics] Initialized successfully');
    return true;
  } catch (error) {
    console.error('[Analytics] Initialization failed:', error);
    return false;
  }
};

/**
 * Track a page view
 * @param path - The page path (e.g., '/locations/burlington')
 */
export const trackPageView = (path: string): void => {
  if (!isInitialized || !window.gtag) {
    return;
  }

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;

  window.gtag('config', measurementId, {
    page_path: path,
  });

  console.log('[Analytics] Page view:', path);
};

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'contact_form_submit')
 * @param eventParams - Optional event parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: GtagEventParams
): void => {
  if (!isInitialized || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, eventParams);
  console.log('[Analytics] Event:', eventName, eventParams);
};

/**
 * Check if analytics is initialized and active
 */
export const isAnalyticsActive = (): boolean => {
  return isInitialized;
};

// Export types for use in other files
export type { GtagEventParams };
