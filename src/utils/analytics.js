// some utitlity functions for google analytics
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

// Common event names
export const EventNames = {
  SECTION_VIEW: 'section_view',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  TOOL_CARD_HOVER: 'tool_card_hover',
  SCROLL_DEPTH: 'scroll_depth'
};

// Track scroll depth (in this case, the scroll depth of about, tools, documentation and contact section but might chagne later on.. )
export const trackScrollDepth = () => {
  const scrollDepths = [25, 50, 75, 100];
  let trackedDepths = new Set();

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackEvent(EventNames.SCROLL_DEPTH, {
          depth: depth,
          page_path: window.location.pathname
        });
      }
    });
  });
};

// Track section visibility (like how much of the section is visible)
export const trackSectionVisibility = (sectionId) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trackEvent(EventNames.SECTION_VIEW, {
            section_id: sectionId,
            section_name: entry.target.querySelector('h2')?.textContent || sectionId
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const section = document.getElementById(sectionId);
  if (section) {
    observer.observe(section);
  }
}; 