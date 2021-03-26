const mongoose = require('mongoose');
const {MONGO_URI} = require("./config"); 
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const {BreakingNew} = require("./models");
mongoose.connect(MONGO_URI, {useNewUrlParser:true});

cron.schedule("*/5 * * * *", async () => {
    const html = await axios.get("https://www.bbc.com/news/");
    const $ = cheerio.load(html.data);
    const titles = $(".gs-c-promo-heading");
    let breakingNews = [];
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element).children().text(),
            link: $(element).attr("href")
        };
        breakingNews.push(breakingNew);
    });
    BreakingNew.create(breakingNews);
    console.log("Cron job executed!");
});