import Events from "./events";

export default function EventPage() {
    return(
    <main className="h-screen flex flex-col items-center justify-end space-y-4">
        <h1 className="text-5xl text-yellow-400 drop-shadow-glow">Courses</h1>
        <Events/>
    </main>
    );
}