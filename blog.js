module.exports = {
    '@tags':['blog'],

    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();
  
      browser.windowMaximize()
    unosquare
      .navigate()
      .blogUnosquare();
      
     
      browser.end();
    }
  };