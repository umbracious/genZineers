"use client"

import { useEffect, useState } from "react";

export default function EventInfo({
  event
}: {
  event: {name: string, default_price: number, metadata: {event_time: Date}, description: string}
}) {

  const getMonthName = (month: number) => {
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

  const handleClick = (id: number) => {
    setPage(id);
  }

  // useEffect(()=>{
  //   console.log(event);
  // }, [event])

  const [page, setPage] = useState(0);

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
                <div className="flex w-full h-full">{event.description}</div>
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
            <button onClick={()=>handleClick(0)}>
            <div className={`border-2  w-32 py-2 rounded-3xl text-center ${page === 0 ? "border-yellow-600 bg-neutral-900 bg-opacity-80 text-yellow-600" : ""}`}>
              Course
            </div>
            </button>
            <button onClick={()=>handleClick(1)}>
            <div className={`border-2 w-32 py-2 rounded-3xl text-center ${page === 1 ? "border-yellow-600 bg-neutral-900 bg-opacity-80 text-yellow-600" : ""}`}>
              Tutor
            </div>
            </button>
          </div>
          <h1 className="text-2xl text-center pt-3 pb-1">Description</h1>
          <div className="text-xl text-neutral-400">
            {page === 0 && <>This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description This is a course description </>}
            {page === 1 && <>This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description This is a tutor description </>}
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
              <button className="px-24 py-3 bg-yellow-600 rounded-xl">
                ENROLL
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
