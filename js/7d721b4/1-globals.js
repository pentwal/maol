Sydney.globals={htmlEl:null,$htmlEl:null,overthrowIsEnabled:null,scrollingIsPolyfilled:null,isTouchDevice:null,cssTransitionsEnabled:null,mobileBreakpoint:600,language:null,heavyAnimationsEnabled:null,forceScrollPolyfill:!1,getTimestamp:function(){return Math.round(+new Date/1E3)},updateBrowserTitle:function(a){document.title=a},getBrowserLanguage:function(){var a="";navigator.language?a=navigator.language:window.navigator.language&&(a=window.navigator.language);return-1!==a.indexOf("sv")||-1!==a.indexOf("SE")?
"swedish":"default"},init:function(){delete Hammer.defaults.stop_browser_behavior.userSelect;this.language=this.getBrowserLanguage();this.$htmlEl=$(this.htmlEl=document.getElementsByTagName("html")[0]);this.scrollingIsPolyfilled="polyfilled"===overthrow.support;this.isTouchDevice="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;this.cssTransitionsEnabled=$("html").hasClass("csstransitions");this.heavyAnimationsEnabled=!0;this.forceScrollPolyfill=!1}};
