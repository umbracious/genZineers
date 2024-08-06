import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-2 bg-cover bg-[url('https://girlknowstech.com/wp-content/uploads/2020/01/allowed-cheat-sheet-ex4.png')] bg-neutral-800 bg-blend-overlay bg-origin-border bg-top">
      
      
      <div>
        <Image
          src={Logo}
          alt="GENZINEERS"
          width={1300}
          height={300}
        />
      </div>

      <div className="antialiased text-4xl font-extrabold text-white flex items-center flex-col justify-center py-4">
        <div>Exciting STEM crash courses by geniuses that you love and who love you back.</div>
        <div>And cool special events for engineering students.</div>
      </div>
      
      
      <div>
        <button className="text-6xl text-white antialiased hover:text-gray-200 p-8 bg-yellow-400 hover:bg-yellow-600 rounded-full"><Link href="/events/">ALL EVENTS AND CRASH COURSES</Link></button>
      </div>        

      <div className="flex items-center max-w-lg mx-auto">
          <input type="text" id="voice-search" className="font-medium text-xl bg-transparent border border-white border-4 text-white block w-full ps-10 p-1.5 placeholder-slate-200" placeholder="Search for a course..." required />
      </div>
    
    </main>
  );
}
