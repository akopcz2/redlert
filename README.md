# REDLERT
Redlert module is meant to be used to monitor the uptime of desired host(s).
If the host is down, you will get a Alert, as well as a screenshot and timestamp of occurence.

## Initial Steps
Create a .env file in your root directory like the following
``` html
PORT= Desired Port number of process
HOST= Desired Host to watch for uptime
INTERVAL=60000 ( Defaults to crawl every minute)
```

## How to start
```js
npm run start
```
This will start the server and the crawler 

