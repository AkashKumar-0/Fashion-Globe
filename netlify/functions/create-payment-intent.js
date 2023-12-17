// const { clear } = require('@testing-library/user-event/dist/clear');

require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

exports.handler = async (e) => {
  try {
    const { amount } = JSON.parse(e.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error }, 'from  payment intent');

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
