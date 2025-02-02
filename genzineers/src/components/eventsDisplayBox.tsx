import Link from "next/link";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function EventsDisplayBox() {

    // Get events from Stripe database
    const products = await stripe.products.list({
        active: true,
        expand: ['data.default_price']
    });

    return(
        <div className="flex flex-col w-3/5 h-[90%] border-2 rounded-xl border-neutral-800 p-4 space-y-2 bg-neutral-950 bg-opacity-60">
            {products.data.map((product: any) => (
                <Link href={`events/${product.id}`} key={product.id}>
                    <div className="w-full grid grid-cols-3 grid-rows-1 border-2 border-yellow-400 justify justify-items-center rounded-xl px-8 py-4">
                        <div className="justify-self-start">{product.name}</div>
                        <div>{product.metadata.event_time}</div>
                        <div className="justify-self-end">{product.default_price.unit_amount/100}$</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}