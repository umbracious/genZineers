"use client";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";

export default function EditForm(){
    const prisma = new PrismaClient();

    const [eventState, setEventState] = useState({
        eventId: 0,
        title: "",
        description: "",
        eventTime: "",
        price: 0,
    });
    useEffect(() => {
        const fetchData = async() => {
            const eventData = { id: Number(window.location.pathname.split("/")[2]) };
            try{
            const response = await fetch(`/api/fetchEvent`, {
                method: "POST",
                body: JSON.stringify(eventData),
            });
            const data = await response.json();
            setEventState(data);
        } catch (err) {
            console.error(err);
        }
    }
    fetchData();
    }, []);

    const updateEvent = async(e: any) => {
        e.preventDefault();
        const response = await fetch("/api/updateEvent", {
            method: "POST",
            body: JSON.stringify(eventState),
        });
        return response.json();
    }

    const deleteEvent = async(e:any) => {
        e.preventDefault();
        const response = await fetch("/api/deleteEvent", {
            method: "POST",
            body: JSON.stringify(eventState),
        });
        return response.json();
    }

    return(
    <div className="flex flex-col w-3/5 h-[90%] border-4 rounded-3xl border-white p-4 space-y-2">
    <form onSubmit={updateEvent}>
    Title: <input id="title" value={eventState.title} onChange={(e)=> setEventState({ ...eventState, title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
    Time: <input id="time" value={eventState.eventTime.split("T")[0]} onChange={(e)=> setEventState({ ...eventState, eventTime: e.target.value })} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
    Description: <input id="description" value={eventState.description} onChange={(e)=> setEventState({ ...eventState, description: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br/><br/>
    Price: <input id="price" type="number" value={eventState.price} onChange={(e)=> setEventState({ ...eventState, price: Number(e.target.value) })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><br/><br/>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    <form onSubmit={deleteEvent}>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
    </form>
    </div>
    )
}