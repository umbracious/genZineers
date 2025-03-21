export default function ProfilePage() {
    return(
    <>
    <div className="pt-20 pb-12 px-12 h-screen">
        <div className="flex h-full bg-neutral-950 bg-opacity-80 border-4 border-neutral-800">
    <div className="flex flex-col w-[15%] text-xl border-r-neutral-800 border-r-2">
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Overview</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Security</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Billing</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Links</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Privacy</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Education</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Events</div>
        <div className="flex border-b-neutral-800 border-b-2 px-4 py-2 h-12 items-center">Refer a friend</div>
    </div>
    <div className="flex flex-col w-[85%] py-3 px-5 gap-6">
        <div className="text-3xl">Overview</div>
        <div className="flex items-center gap-10">
        <div className="rounded-full bg-[url('../../public/background.png')] border-2 w-[128px] h-[128px] "></div>
        <div className="flex gap-2 items-center">Name: <input className="bg-transparent transition duration-200 border-b-[1px] h-fit focus:outline-none focus:border-b-2 focus:scale-105" value="Maki Neskovic"/></div>
        
        </div>
        <div className="flex items-center gap-2">Username: <input disabled className="border-b-neutral-500 border-b-2 text-neutral-500 bg-transparent" value="maky1x"/></div>
        <div className="flex gap-2 items-center">Description: <input className="bg-transparent border-b-2 focus:outline-none focus:scale-105 transition duration-200" value="This is a description"/></div>
    </div>
    </div>
    </div>
    </>
    );
}