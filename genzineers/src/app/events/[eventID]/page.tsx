const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function EventDescriptionPage({
  params,
}: {
  params: { eventID: string };
}) {
  const event = await stripe.products.retrieve(params.eventID);

  const getMonthName = (month: any) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  };

  return (
    <>
      {/* PC VERSION OF THE PAGE */}
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-3 pt-5 max-md:hidden">
        <h1 className="w-full text-5xl text-center text-yellow-400 drop-shadow-glow">
          {event.name}
        </h1>

        <div className="h-5/6 w-full flex gap-5 px-5">
          <div className="w-3/4 border-yellow-500 border-2 rounded-xl p-3">
            <div className="text-4xl w-full flex justify-center">
              Course Description
            </div>
            <div className="flex flex-col h-[95%] gap-4">
              <div className="flex gap-3 px-2 h-[90%] ">
                <div className="flex w-full h-full">Description and intro</div>
              </div>
              <div>
                {" "}
                {/* DIV FOR STRIPE STUFF */}
                <div className="flex flex-row-reverse">
                  <form action="/api/checkout_sessions" method="post">
                    <input
                      type="hidden"
                      name="price"
                      value={event.default_price}
                    />
                    <button className="text-3xl text-white antialiased py-2 px-10 bg-yellow-500 hover:bg-yellow-600 rounded-3xl max-md:hidden">
                      BOOK NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/4 border-yellow-500 border-2 rounded-xl p-3 gap-2">
            <div className="text-4xl w-full flex justify-center">
              Tutor Description
            </div>
            <div>Description and intro</div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION OF THE PAGE */}
      <div className="w-screen h-screen pt-24 flex flex-col gap-3 md:hidden">
        <h1 className="w-full text-5xl text-center text-yellow-400 drop-shadow-glow">
          {event.name}
        </h1>
        <div className="flex flex-col w-screen px-4 py-2">
          <div className="flex justify-center w-full gap-3 text-xl">
            <div className="border-2 border-yellow-600 w-32 py-2 rounded-3xl text-center bg-neutral-900 bg-opacity-80 text-yellow-600">
              Course
            </div>
            <div className="border-2 w-32 py-2 rounded-3xl text-center">
              Tutor
            </div>
          </div>
          <h1 className="text-2xl text-center pt-3 pb-1">Description</h1>
          <div className="text-xl text-neutral-400">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in elit pretium, lobortis neque eu, finibus purus. Vestibulum
            facilisis eros velit, ac facilisis metus facilisis quis. Duis
            dignissim, eros eu accumsan faucibus, velit dui commodo mauris, at
            lacinia ex ante quis metus. Cras quis tincidunt dui. Fusce vitae
            aliquam velit. Proin ac justo tristique nunc sodales pharetra tempus
            quis velit. In ultrices ullamcorper enim, non tempor nunc pretium
            eu. Nam bibendum gravida feugiat. Nullam eu dui elit. Nam
            scelerisque dui vel laoreet pellentesque. Suspendisse potenti.
            Phasellus sit amet purus tortor. Donec quis tempus erat, et viverra
            ante. Morbi malesuada gravida consequat. Etiam gravida vel sem sed
            molestie. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Ut porttitor, diam eget molestie gravida, turpis neque
            mollis lectus, et imperdiet leo urna quis ipsum. In convallis
            efficitur turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus iaculis nulla at ante commodo, et fermentum augue
            pretium. Sed fermentum ipsum eget tellus laoreet efficitur. Nam
            aliquet sem at ex mollis, sit amet venenatis nunc mattis. Vivamus
            mattis tempor finibus. Mauris ut venenatis turpis. Sed in dui
            pulvinar, consectetur augue id, eleifend ante. Nam semper porttitor
            orci et faucibus.{" "}
          </div>
          <div className="flex flex-col text-3xl py-2 items-center gap-3">
            <div>Price: $20 {/* change this to connect to stripe db */}</div>
            <div>
              Date:{" "}
              {`${new Date(
                event.metadata.event_time
              ).getDate()}. ${getMonthName(
                new Date(event.metadata.event_time).getMonth()
              )} ${new Date(event.metadata.event_time).getFullYear()}`}
            </div>
            <form action="/api/checkout_sessions" method="post">
              <input type="hidden" name="price" value={event.default_price} />
              <button className="px-20 py-3 bg-yellow-600 rounded-xl">
                ENROLL
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
