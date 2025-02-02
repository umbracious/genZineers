const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
    const { title, eventTime, description, price} = JSON.parse(req.body);

    try {
        const product = await stripe.products.create({
            name: title,
            description: description,
            default_price_data: {
                unit_amount: price,
                currency: 'usd'
            },
            metadata: {
                event_time: eventTime
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
    res.status(200).send("Success");
}