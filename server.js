require('dotenv').config();
const puppeteer = require('puppeteer');
const express = require('express');
const axios = require('axios');
const host = process.env.HOST;
const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    axios.get(`${host}`)
    .then((response) => {
        let responseCode = response.status;
        let date = new Date();
        if(responseCode != 200){
            (async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(`${host}`);
                await page.screenshot({path: `${date}.png`});
                await browser.close();
              })();
            res.send('The website is down')
        } else if (responseCode == 200){
            res.sendStatus(responseCode);
        }
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(port, () => console.log(`App Working on port ${port}`))