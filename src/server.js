'use strict';
const express = require('express');
const stamper = require('../middlewares/stamper');
const app = express();
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');


app.get("/", (req, res) => {
    res.status(200).send('Heloo ');
});

app.get('/data', (req, res) => {
    // console.log('inside test calback');
    res.json(
        {
            id: 1,
            name: 'mohmad haimour',
            email: 'moahamdhaimour@gmail.com'
        }
    );

});

app.get('/test', stamper, (req, res) => {
    res.json(
        {
            id: 2,
            name: 'test',
            email: 'test@gmail.com',
            time: req.timeStamp
        }
    );

});

app.get('/bad', (req, res) => {
    let num = 10;

    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);
})


app.use('*', notFoundHandler);
app.use(errorHandler);



function start(port) {

    app.listen(port, () => {
        console.log(`i am listening on port ${port}`);
    });

}
module.exports = {
    app: app,
    start: start,
}