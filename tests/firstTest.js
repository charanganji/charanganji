module.exports = {
    'my first test'(browser){
        browser
        .url("https://news.ycombinator.com/")
        .waitForElementVisible('.hname')
        .assert.containsText(".hnname","Hacker News")

    }
}