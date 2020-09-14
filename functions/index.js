const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HREWkJliABagtgoymC6PCTq4mj4V2ShORNXAKBcmIx2CI8Pu46mz46Akg38zuSfkOnmT80cfEQnauGp3PUjFtxg00jhoR7uVL');

// Api

// App config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved for amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // payment created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// Listeners

exports.api = functions.https.onRequest(app);

// Endpoint for debugging
// http://localhost:5001/clone-ca2ec/us-central1/api