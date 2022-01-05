module.exports = {
    '@tags':['api2'],
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 8000
    },
    'API Testing - GET ejem1': function (browser) {
        var apiUrl = 'https://tle.ivanstanojevic.me/api/tle/25544'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.name, 'ISS (ZARYA)')
            browser.assert.equal(data.date, '2021-12-24T04:27:39+00:00')
            browser.assert.equal(data.satelliteId, '25544')
        })
    },
        'API Testing - GET ejem2': function (browser) {
            var apiUrl = 'https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY'
            browser.apiGet(apiUrl, function (response) {
                var data = JSON.parse(response.body)
                browser.assert.equal(response.statusCode, '200')
                browser.assert.equal(data.date, '2018-01-03T16:50:46.890000')
                browser.assert.equal(data.id, 'LANDSAT/LC08/C01/T1_SR/LC08_025039_20180103')
            })
    
    },
    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/login'
        var postData = {'email':'adrian.garcia@unosquare.com','pasword':'unosquare'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '400')
           browser.assert.equal(response.body.error, 'Missing password')
           
        })
    }






};

