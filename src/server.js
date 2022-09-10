'use strict';
const express = require('express');
const stamper = require('../middlewares/stamper');
const app = express();
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');

const initialState =
    [
        {
            id: 1,
            name: 'MacBook-new',
            category: 'electronics',
            price: "800",
            inStock: 5,
            inCart: 1,
            image: 'https://i.picsum.photos/id/48/5184/3456.jpg?hmac=CqGbzLpjn6uemZM1G8hAgGDefnyntx41HEPKtlK4CDA',
        },
        {
            id: 2,
            name: 'LapTop hp',
            category: 'electronics',
            price: '800',
            inStock: 3,
            inCart: 1,
            image: 'https://picsum.photos/id/180/2400/1600',
        },
        {
            id: 3,
            name: 'Camera',
            category: 'electronics',
            price: 99.00,
            inStock: 6,
            inCart: 1,
            image: 'https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU',
        },
        {
            id: 4,
            name: 'Ipod',
            category: 'electronics',
            price: 299.00,
            inStock: 8,
            inCart: 1,
            image: 'https://i.picsum.photos/id/367/4928/3264.jpg?hmac=H-2OwMlcYm0a--Jd2qaZkXgFZFRxYyGrkrYjupP8Sro',
        },
        {
            id: 5,
            name: 'Joystick',
            category: 'electronics',
            price: 69.00,
            inStock: 12,
            inCart: 1,
            image: 'https://i.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM',
        },
        {
            id: 6,
            name: 'Phone',
            category: 'electronics',
            price: 999.00,
            inStock: 15,
            inCart: 1,
            image: 'https://i.picsum.photos/id/816/5760/3840.jpg?hmac=GGGDK83mK-OK5SsyNiB45tGIw09LTRaz41c-lmyltDs',
        },
        {
            id: 8,
            name: 'Burger',
            category: 'food',
            price: 6.39,
            inStock: 90,
            inCart: 1,
            image: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
        },
        {
            id: 9,
            name: 'Pizza',
            category: 'food',
            price: 5.00,
            inStock: 20,
            inCart: 1,
            image: 'https://images6.alphacoders.com/738/thumb-1920-738359.jpg',
        },
        {
            id: 5,
            name: 'Robian with Rice',
            category: 'food',
            price: 6.50,
            inStock: 50,
            inCart: 1,
            image: 'https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000',
        },
        {
            id: 1,
            name: 'Pasta',
            category: 'food',
            price: 2.39,
            inStock: 33,
            inCart: 1,
            image: 'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
        },
        {
            id: 2,
            name: 'Chicken',
            category: 'food',
            price: 3.99,
            inStock: 90,
            inCart: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NMRD1rufN1GQi_x_dZrB-h-8OcOldgnrbA&usqp=CAU',
        },
    ];
app.get("/", (req, res) => {
    res.status(200).send(initialState);
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