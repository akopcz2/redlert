const express = require('express');
const app = express();
let port = 5700;
app.get('/', (req, res) => {
    res.status(404).send('NOPE');
});
app.listen(port, () => console.log(`App Working on port ${port}`))