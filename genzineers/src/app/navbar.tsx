import Link from "next/link";

export default function Navbar () {
    return (
        <nav className="bg-transparent w-full fixed top-0 left-0 right-0 z-50">
            <div className="text-white w-full flex flex-nowrap items-center justify-between px-8 py-2">
                <div><Link href="/">GenZineers</Link></div>
                
                <div className="flex space-x-4 text-white nowrap items-center mx-2">
                    <div className="hover:text-slate-100"><Link href="/events/">Events</Link></div>
                    <div className="hover:text-slate-100"><Link href="https://beacons.ai/thepotentialdropout">The Potential Dropout</Link></div>
                </div>

                <div className="flex space-x-4 items-center">
                    <Link href="#"><button className="bg-gradient-to-b from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-2 py-1 rounded shadow-md">Sign up</button></Link>
                    <Link href="#" className="text-white hover:text-slate-100 hover:underline underline-offset-2">Log in</Link>
                </div>
            </div>
        </nav>
    );
}