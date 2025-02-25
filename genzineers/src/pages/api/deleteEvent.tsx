const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
    const { eventId } = JSON.parse(req.body);
    try {
            const deleted = await stripe.products.del(eventId);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.status(200).send("Success");
}