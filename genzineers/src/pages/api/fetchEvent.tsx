const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req:any, res:any) {

    const { id } = JSON.parse(req.body);
    try {
            const event = await stripe.products.retrieve(id);            
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.status(200).send(event);
}