module.exports ={
'@tags':['asserts'],

'Demo test unosquare2': browser =>{
browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.not.elementPresent('.not_present') // previously .assert.elementNotPresent()
        //.assert.not.visible('not_visible') // previously .assert.hidden()
        .assert.not.urlContains('http://')
        .assert.not.title('google')
        .assert.urlEquals('https://www.unosquare.com/')
        .assert.attributeContains("li a[href = '/PracticeAreas']", 'class', 'nav')
        .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
        .assert.containsText("li a[href = '/Industries']","INDUSTRIES")
        .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px')
        .end();




    }


};