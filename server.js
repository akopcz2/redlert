require('dotenv').config();
const puppeteer = require('puppeteer');
const express = require('express');
const axios = require('axios');
const host = process.env.HOST;
const port = process.env.PORT;
const app = express();
let screenShot = require('./util');

app.get('/', (req, res) => {
    axios.get(`${host}`)
    .then((response) => {
        let responseCode = response.status;
        let date = new Date().getTime();
        if(responseCode != 200){
            screenShot.takeScreenshot(host,data);
            res.send('The website is down')
        } else if (responseCode == 200){
            res.sendStatus(responseCode);
        }
    }).catch((err) => {
        let date = new Date().getTime();
        let errorResponseCode = err.response.status;
        screenShot.takeScreenshot(host,date);
        res.send('The website is down')
    });
});

app.listen(port, () => console.log(`App Working on port ${port}`))