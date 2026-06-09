/**
 * GOOGLE APPS SCRIPT WEB APP INTEGRATION CONFIGURATION
 * 
 * Your React form is now integrated directly with your custom Google Apps Script Web App URL.
 * When a lead is submitted, the React application sends a clean JSON payload directly to the URL below.
 */

export const GOOGLE_FORM_CONFIG = {
  // Your Google Apps Script Web App deployment URL
  FORM_ACTION_URL: "https://script.google.com/macros/s/AKfycbzjlvjHjui8_V48m-3ZCla931XyI6vlXZpBAwZZpdKe_Xw_Ssw85-QlrD9R_fqoQyEd/exec",
  
  // Flag indicating we are using the direct Apps Script Web App instead of standard Google Forms
  IS_WEB_APP: true
};
