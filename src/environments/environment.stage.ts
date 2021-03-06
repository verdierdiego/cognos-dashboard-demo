// staging environment, make sure to use ddetest and stage1 bluemix library
export const environment = {
  production: true,
  cognos_api_js: 'https://ddetest-us-south.analytics.ibm.com/daas/CognosApi.js',
  cognos_root_url: 'https://ddetest-us-south.analytics.ibm.com/daas/',
  toaster_timer: 5000,
  segment_key: "${SEGMENT_KEY}",
  version: '1.0.0',
  bluemix_analytics_js: 'https://console.cdn.stage1.s-bluemix.net/analytics/build/bluemix-analytics.min.js'
};
