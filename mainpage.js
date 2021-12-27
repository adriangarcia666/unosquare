var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .setValue('@company', form.company)
      .setValue('@phone', form.phone)
      .setValue('@messenger', form.message)
      .click('@submit')
      .waitForElementVisible('@warning')
  }
};


var clickinMultiplePages = {
  blogUnosquare: function() {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    return this.waitForElementVisible('@blogMenu', 1000)
    .click('@blogMenu')
    .assert.containsText('@headerBlog',"DIGITAL TRANSFORMATION BLOG")
    .assert.urlEquals("https://blog.unosquare.com/")
    .waitForElementVisible('@recentPost')
    .waitForElementVisible('@popularPost')
    .setValue('@searchBlog',form.search1)
    .click('@find')
    .pause(2 * 1000)
    .setValue('@searchBlog',form.search2)
    .click('@find2')
    .pause(2 * 1000)
    .setValue('@searchBlog',form.search3)
    .click('@find2')
    .pause(2 * 1000)
    .click('@aboutMenu2')
    .pause(2 * 1000)
    .assert.containsText('@mario',"MARIO DI VECE")
    .assert.containsText('@giancarlo',"GIANCARLO DI VECE")
    .assert.containsText('@eduardo',"EDUARDO ARIAS")
    .assert.containsText('@ignacio',"IGNACIO MIRANDA")
    .assert.containsText('@diego',"DIEGO HUERTA")

    .pause(3 * 1000)
  }
};

function getData() {
  return require('C:/Users/adrian.garcia/unosquare/dataExternal/unosquareForm.json'); // Using the correct path is important
  };




module.exports = {
  
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, clickinMultiplePages],
    
  
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },

      carrerMenu:{
        selector:"#navbarSupportedContent > ul > li:nth-child(1) > a"
      },
      aboutMenu: {
        selector: "#navbarSupportedContent > ul > li:nth-child(7) > a"
      },
      aboutMenu2:{
        selector: "#navbarSupportedContent > ul > li:nth-child(6) > a"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      mission:{
        selector:"#about > div:nth-child(2) > h3"

      },
      blogMenu: {
        selector: "#navbarSupportedContent > ul > li:nth-child(8) > a"
      },
      image:{
        selector:"#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div"

      },
      contact:{
        selector: "#navbarSupportedContent > ul > li:nth-child(9) > a"
      },
      firstname:{
        selector: "#name-2a32df81-981f-4329-b943-9f2e76efe5f0"
      },
      email:{
        selector: "#email-2a32df81-981f-4329-b943-9f2e76efe5f0"
      },
      company:{
        selector: "#company-2a32df81-981f-4329-b943-9f2e76efe5f0"
      },
      phone:{
        selector: "#phone-2a32df81-981f-4329-b943-9f2e76efe5f0"
      },
      messenger:{
        selector: "#message-2a32df81-981f-4329-b943-9f2e76efe5f0"
      },
      personal: {
        selector: "#fullpage > div.section.fp-section.fp-table.active.fp-completely > div > div.module.d-none.d-lg-flex.flex-row.app-container.app-padding > div.col-6.evenly.align-items-center.flex-column > div:nth-child(1) > div > h3"
      },
      apply: {
        selector: "#apply-button"
      },
      search: {
        selector: "#__next > div.w-full.shadow-sm.lg\:hidden > div > div > div > input"
      },
      menu: {
        selector: "#fullpage > div.section.fp-section.fp-table.active.fp-completely > div > div > nav > div"
      },
      about2: {
        selector: "#nav-list > ul > li:nth-child(3) > a"
      },
      apply2: {
        selector: "#nav-list > ul > li:nth-child(9)"
      },
      app: {
        selector: "#fullpage > div.section.fp-section.fp-table.active.fp-completely > div > div > h2"
      },
      contact2: {
        selector: "#fullpage > div.section.fp-section.fp-table.active.fp-completely > div > footer > div > div > div.d-none.d-xl-block.col-xl-3 > div.calltoaction > a"
      },
      testimonial: {
        selector: "#testimonial > div > div > div.col-9.col-lg-11.mt-4 > p"
      },
      contact3: {
        selector: "body > footer > div.footer-content.container > div > div:nth-child(1) > div.calltoaction > a"
      },
      submit: {
        selector: "#hsForm_2a32df81-981f-4329-b943-9f2e76efe5f0 > div.hs_submit.hs-submit > div.actions > input"
      },
      warning: {
        selector: "#hsForm_2a32df81-981f-4329-b943-9f2e76efe5f0 > div.hs_name.hs-name.hs-fieldtype-text.field.hs-form-field > ul > li > label"
      },
      headerBlog:{
        selector: "#wrapper > header > div.breadcrumb-container > h1"
      },
      recentPost:{
        selector: "#side-bar-container > main > label:nth-child(2)"
      },
      popularPost: {
        selector: "#side-bar-container > main > label:nth-child(4)"
      },
      searchBlog: {
        selector: "#search-bar"
      },
      mario: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div > span.name"
      },
      giancarlo:{
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(2) > div"
      },
      eduardo:{
        selector:"#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(3) > div"
      },
      ignacio:{
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div"
      },
      diego: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(5) > div"
      },
      find: {
        selector: "#side-bar-container > form > button > img"
      },
      find2: {
        selector: "#wrapper > header > div.container-fluid.content-blog > div > div.col-lg-3 > form > button > img"
      }

    },
      
  
      



  }