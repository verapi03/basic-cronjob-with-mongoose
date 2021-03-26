# basic-cronjob-with-mongoose

This project consist of a small cron job that performs web scraping every 4 hours to extract recent news headlines and store them in MongoDB.

The cron job is developed using the node-cron module, a tiny task scheduler in pure JavaScript for node.js based on GNU crontab. Other tools used are Axios, Cheerio and Mongoose.

Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. By using this API client I obtain BBC news portal markup from https://www.bbc.com/news.

Cheerio module is a fast, flexible & lean implementation of core jQuery designed specifically for the server. Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure. Using this module I search for and extract the news headlines from the BBC HTML.

Once I get the news headlines, they get saved in MongoDB using Mongoose.

The following diagram shows the architecture of the project.

![Untitled Diagram](https://user-images.githubusercontent.com/14207804/112695767-a6b0d000-8e52-11eb-8990-af4b6c4833d6.png)

This project uses MongoDB Atlas as its batabase, so in order to see ir working, upon cloning it and having installed its dependencies, inside the file .env you need to change the variables <username>, <password> and <databaseName> according to your own MongoDB Atlas credentials.
