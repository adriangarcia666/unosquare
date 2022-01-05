module.exports ={
    '@tags':['pull_request'],
    
    


    'Demo pull request': browser =>{
        
        const Guide = "#navigation > ul > li:nth-child(2) > a"
        const Search = "#docsearch > button > span.DocSearch-Button-Container > span"
        const Word = "Asserts"
        const Search2 = "#docsearch-input"
        const Option1 = "#docsearch-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span.DocSearch-Hit-title"
        const Api_com = "#api-container > div.background > div > div > div.col-md-3 > div > ul > li:nth-child(4) > button > a"
        const Blog = "#navbartop > ul > li:nth-child(5) > a"
        const Read = "body > footer > div > div:nth-child(1) > div.col-md-6 > div > div > p"
        const Txt = "Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors."

        browser
        .windowMaximize()
        .url('https://nightwatchjs.org/')
        .waitForElementVisible('body')
        .click(Guide)
        .click(Search)
        .pause(1 * 1000)
        .setValue(Search2, Word)
        .click(Option1)
        .pause(3 * 1000)
        .assert.containsText(Api_com,"API Commands")
        .pause(3 * 1000)
        .click(Blog)
        .assert.containsText(Read, Txt)
        .end();
        



        
    
    }

};