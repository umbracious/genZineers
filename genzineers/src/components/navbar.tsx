import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import SignIn from "@/components/signIn";

export default function Navbar () {
    return (
        <nav className="bg-transparent w-full fixed top-0 left-0 right-0 z-50">
            <div className="text-white w-full flex flex-nowrap items-center justify-between px-8 py-2">
                <div>
                    <Link href="/">
                        <Image
                        src={Logo}
                        alt="GENZINEERS"
                        width={80}
                        height={16}
                        />
                    </Link>
                </div>
                
                <div className="flex space-x-4 text-white nowrap items-center mx-2 hover:text-slate-100">
                    <div><Link href="/events/">Events</Link></div>
                    <div><Link href="https://beacons.ai/thepotentialdropout">The Potential Dropout</Link></div>
                    <div><Link href="/contactus/">Contact Us</Link></div>
                </div>
                
                <div>
                    <SignIn/>
                </div>
            </div>
        </nav>
    );
}