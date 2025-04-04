"use client";

import { useState } from "react";

export default function EventInfoMobile({
  event,
}: {
  event: {
    name: string;
    default_price: number;
    metadata: { event_time: Date };
    description: string;
  };
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
  };

  const [page, setPage] = useState(0);
  return (
    <>
      <div className="w-screen h-screen pt-24 flex flex-col gap-3 md:hidden">
        <h1 className="w-full text-5xl text-center text-yellow-400 drop-shadow-glow">
          {event.name}
        </h1>
        <div className="flex flex-col w-screen px-4 py-2">
          <div className="flex justify-center w-full gap-3 text-xl">
            <button onClick={() => handleClick(0)}>
              <div
                className={`border-2  w-32 py-2 rounded-3xl text-center ${
                  page === 0
                    ? "border-yellow-600 bg-neutral-900 bg-opacity-80 text-yellow-600"
                    : ""
                }`}
              >
                Course
              </div>
            </button>
            <button onClick={() => handleClick(1)}>
              <div
                className={`border-2 w-32 py-2 rounded-3xl text-center ${
                  page === 1
                    ? "border-yellow-600 bg-neutral-900 bg-opacity-80 text-yellow-600"
                    : ""
                }`}
              >
                Tutor
              </div>
            </button>
          </div>
          <h1 className="text-2xl text-center pt-3 pb-1">Description</h1>
          <div className="text-xl text-neutral-400">
            {page === 0 && (
              <>
                This is a course description This is a course description This
                is a course description This is a course description This is a
                course description This is a course description This is a course
                description This is a course description This is a course
                description This is a course description This is a course
                description This is a course description This is a course
                description This is a course description{" "}
              </>
            )}
            {page === 1 && (
              <>
                This is a tutor description This is a tutor description This is
                a tutor description This is a tutor description This is a tutor
                description This is a tutor description This is a tutor
                description This is a tutor description This is a tutor
                description This is a tutor description This is a tutor
                description This is a tutor description This is a tutor
                description{" "}
              </>
            )}
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
