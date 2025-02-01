import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Home() {
  return (
    <main className="px-5 h-screen flex flex-col items-center justify-center space-y-2 ">
      
      
      <div>
        <Image
          src={Logo}
          alt="GENZINEERS"
          width={700}
        />
      </div>

      <div className="text-center antialiased text-3xl font-extrabold text-white flex items-center flex-col justify-center py-4 gap-3">
        <div>Exciting STEM crash courses by geniuses that you love and who love you back</div>
        <div>along with cool special events for engineering students.</div>
      </div>
      
      
      <div>
        <button className="text-5xl text-white antialiased hover:text-gray-200 py-5 px-14 bg-yellow-400 hover:bg-yellow-600 rounded-full max-md:hidden"><Link href="/events/">EVENTS AND COURSES</Link></button>
      </div>   

      <div>
        <button className="text-5xl text-white antialiased hover:text-gray-200 py-5 px-14 bg-yellow-400 hover:bg-yellow-600 rounded-full md:hidden"><Link href="/events/">EVENTS</Link></button>
      </div>      
    
    </main>
);
}
/*

TODO

- Design on mobile
  - Add padding to front page so the text doesn't overlap with the header
  - Add a logo in the header along with a burger menu for all the header buttons
  - Adjust font size on mobile
  - Render different text on the button
  - Decide on a grid/list view for all events 
  - Completely redesign event view page
  - Adjust the new event page a bit
  - Convert all into rem/em/% units

- Design on PC
  - Adjust paddings accordingly on all pages
  - Resize all text so it doesn't look out of place
  - (Maybe)Switch the shades of the colors a bit so it isn't too blinding
  - Switch around the positions of elements in event view page
  - Make better looking input type tags (especially for new event page)

- Make the website a bit faster performance-wise

  */