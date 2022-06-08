const axios = require('axios')
const cheerio = require('cheerio')

async function mySpider() {
    let resHtml = ``
    let titles = []
    await axios.get('http://www.fwwb.org.cn/public/index').then(res => {
        resHtml = res.data
        let $ = cheerio.load(resHtml)
        const lists = $('.news-title h3')
        for(let [key, value] in lists) {
            if(!isNaN(parseInt(key))) {
                titles.push(lists[key].children[0].data)
            }
        }
    })
    return titles
}


mySpider().then(res => {
    console.log(res)
})

