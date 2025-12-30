import EventsDisplayBox from "@/components/eventsDisplayBox";

export const revalidate = 0;

export default function EventPage() {
    return(
    <main className="md:pt-16 max-md:pt-24 flex flex-col items-center justify-end space-y-4">
        <h1 className="md:text-5xl max-md:text-6xl  text-yellow-400 drop-shadow-glow">Courses</h1>
        <EventsDisplayBox/>
    </main>
    );
}