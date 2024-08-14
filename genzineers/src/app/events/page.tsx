import Events from "./events";

export default function EventPage() {
    return(
    <main className="bg-black h-screen text-white flex flex-col items-center justify-end space-y-4">
        <h1 className="text-5xl">Courses</h1>
        <Events/>
    </main>
    );
}