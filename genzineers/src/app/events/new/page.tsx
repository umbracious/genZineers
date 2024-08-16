import EventForm from "./form";

export default function NewEventPage() {
    return(
    <main className="h-screen flex flex-col items-center justify-end space-y-4">
        <h1 className="text-5xl text-yellow-400 drop-shadow-glow">Add a new event</h1>
        <EventForm/>
    </main>
    );
}