import Link from "next/link";
import Image from "next/image";
import Tiktok from "../../../public/tiktok.svg"
import Instagram from "../../../public/instagram.svg"
import YouTube from "../../../public/youtube.svg"
import Twitter from "../../../public/twitter.svg"
import LinkedIn from "../../../public/linkedin.svg"
import Beacons from "../../../public/beacons.png"

export default function ContactUs() {
    return(
    <main className="w-screen flex flex-col items-center justify-center space-y-16">
        <div className="flex flex-col items-center space-y-8">
            <div className="text-yellow-400 text-5xl drop-shadow-glow">CONTACT US</div>
        
            <div className="text-2xl">genzineers@gmail.com</div>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
            <div className="text-yellow-400 text-5xl drop-shadow-glow">NEED HELP FOR ANYTHING?</div>

            <div className="text-2xl">genzineers.help@gmail.com</div>
        </div>

        <div className="flex flex-col items-center space-y-8">
            <div className="text-yellow-400 text-5xl drop-shadow-glow">
               ALL OUR PAGES 
            </div>
            <div className="text-2xl">
                @genzineers on all social media, or click on the icons below
            </div>
            <div>
                <div className="flex flex-wrap items-center justify-center space-x-4 drop-shadow-glow">
                    <div>
                        <Link href="https://www.tiktok.com/@genzineers">
                            <Image
                                src={Tiktok}
                                alt="Tiktok icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.instagram.com/genzineers/">
                            <Image
                                src={Instagram}
                                alt="Instagram icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.youtube.com/@genzineers">
                            <Image
                                src={YouTube}
                                alt="YouTube icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://x.com/genzineers/">
                            <Image
                                src={Twitter}
                                alt="Twitter icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/company/genzineers/about/">
                            <Image
                                src={LinkedIn}
                                alt="LinkedIn icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>

                    <div>
                        <Link href="https://beacons.ai/genzineers">
                            <Image
                                src={Beacons}
                                alt="Beacons icon"
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}