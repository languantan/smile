// ==UserScript==
// @name         Smidget Script
// @namespace    https://sgsmil.es
// @version      0.1
// @description  Add Smiley feedback to your website
// @author       Smidget Team
// @include      https://*.gov.sg/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

var smidgetScript = document.createElement('script');
smidgetScript.src = "https://s3-ap-southeast-1.amazonaws.com/smidget-staging/main.js";
smidgetScript.type="text/javascript";
document.body.append(smidgetScript);
