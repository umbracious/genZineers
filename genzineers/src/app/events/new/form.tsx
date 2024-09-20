"use client";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

export default function EventForm() {

    const prisma = new PrismaClient({ log: ["query"] });

    const [eventState, setEventState] = useState({
        eventId: 0,
        title: "",
        description: "",
        eventTime: "",
        price: 0,
    });

    const uploadEvent = async(e: any) => {
        e.preventDefault();
        const response = await fetch("/api/submitEvent", {
            method: "POST",
            body: JSON.stringify(eventState),
        });
        return response.json();
    }

    return(
        <div className="flex flex-col w-3/5 h-[90%] border-4 rounded-3xl border-white p-4 space-y-2">
            <form onSubmit={uploadEvent}>
            Title: <input id="title" onChange={(e)=> setEventState({ ...eventState, title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Time: <input id="time" type="date" onChange={(e)=> setEventState({ ...eventState, eventTime: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Description: <input id="description" onChange={(e)=> setEventState({ ...eventState, description: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
            Price: <input id="price" type="number" onChange={(e)=> setEventState({ ...eventState, price: Number(e.target.value)})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><br/><br/>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            
            </form>
        </div>
    );
}
// 
// 
// 
// 