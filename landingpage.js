var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', 'QA CoE course')
        .setValue('@phoneTextField', '3300000000')
        .setValue('@messageTextArea', 'This is a Random Text used in a Course')
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg')
    }
  };

  var clickinMultiplePages = {
    contactUnosquare: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@company', 'QA CoE course')
        .setValue('@phone', '3300000000')
        .setValue('@messenger', 'This is a Random Text used in a Course')
        .click('@submit')
        .waitForElementVisible('@warning')
        .pause(3 * 1000)
    }
  };


module.exports ={
    url: 'https://nightwatchjs.org/',
    commands: [validateContactUs, clickinMultiplePages],
    elements: {
        homeMenu: {
            selector : "#navigation > ul > li:nth-child(1) > a"
        },
        guideMenu: {
            selector : "#navigation > ul > li:nth-child(2) > a"
        },
        apiMenu: {
            selector : "#navigation > ul > li:nth-child(3) > a"
        },
        aboutMenu: {
            selector : "#navigation > ul > li:nth-child(4) > a"
        },
        blogMenu: {
            selector : "#navigation > ul > li:nth-child(5) > a"
        },
        note: {
            selector : "#top-section > div > div > div > div > div:nth-child(1) > p"
        },
        install: {
            selector : "#index-container > div.download > div > div > div > a.btn.btn-primary.btn-lg.btn-download"
        },
        search: {
            selector : "#docsearch > button > span.DocSearch-Button-Container > span"
        },
        search2: {
            selector : "#docsearch-input"
        },
        option1: {
            selector : "#docsearch-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span.DocSearch-Hit-title"
        },
        Api_com: {
            selector : "#api-container > div.background > div > div > div.col-md-3 > div > ul > li:nth-child(4) > button > a"
        },
        Read: {
            selector : "body > footer > div > div:nth-child(1) > div.col-md-6 > div > div > p"
        },
        what: {
            selector : "#guide-container > div.background > div > div > div.col-md-3.bs-sidebar.hidden-print > ul > li.active > ul > li:nth-child(1) > ul > li:nth-child(1) > a"
        }


    }


};