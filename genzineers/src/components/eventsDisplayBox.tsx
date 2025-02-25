import Link from "next/link";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function EventsDisplayBox() {
  // Get events from Stripe database
  const products = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
  });

  const getMonthName = (month: any) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month];
  }

  return (
    <div className="flex flex-col md:w-3/5 h-[90%] border-2 rounded-xl border-neutral-800 p-4 space-y-2 bg-neutral-950 bg-opacity-60 max-md:w-[90%] 
    max-md:text-2xl md:text-xl">
      {products.data.map((product: any) => (
        <Link href={`events/${product.id}`} key={product.id}>
          <div className="w-full flex border-2 border-yellow-400 rounded-xl md:px-8 max-md:px-4 md:py-4 max-md:py-2 items-center">
            <div className="max-md:w-3/6 md:w-1/3 text-left ">{product.name}</div>
            <div className="max-md:w-2/6 md:w-1/3 text-center">{`${new Date(product.metadata.event_time).getDate()}. ${getMonthName(new Date(product.metadata.event_time).getMonth())} ${new Date(product.metadata.event_time).getFullYear()}`}</div>
            <div className="max-md:w-1/6 md:w-1/3 text-right ">
              {product.default_price.unit_amount / 100}$
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
