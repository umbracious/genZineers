"use client";
import { PrismaClient } from "@prisma/client";

export default function EventForm() {

    const prisma = new PrismaClient({ log: ["query"] });

    const uploadEvent = async(e: any) => {
        // try {
        //     const event = await prisma.event.create({
        //         data:{
        //             title: title,
        //             eventTime: time,
        //             description: description,
        //             price: price,
        //         }
        //     })
        // } catch (err) {
        //     console.error(err);
        // }
        e.preventDefault();
        const data = {
            title: (document.getElementById('title') as HTMLInputElement).value,
            eventTime: (document.getElementById('time') as HTMLInputElement).value,
            description: (document.getElementById('description') as HTMLInputElement).value,
            price: (document.getElementById('price') as HTMLInputElement).value,
        }
        const response = await fetch("/api/submitEvent", {
            method: "POST",
            body: JSON.stringify(data),
        });
        return response.json();
    }

    return(
        <div className="flex flex-col w-3/5 h-[90%] border-4 rounded-3xl border-white p-4 space-y-2">
            <form onSubmit={uploadEvent}>
            Title: <input id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Time: <input id="time" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Description: <input id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Price: <input id="price" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><br/><br/>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            
            </form>
        </div>
    );
}