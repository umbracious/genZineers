const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import EventInfo from "@/components/eventInfo";

export default async function EventDescriptionPage({params}: {params: {eventID: string}; }) {
  const event = await stripe.products.retrieve(params.eventID);
    return(
    <>
        <EventInfo event={event}/>
    </>
    );
}