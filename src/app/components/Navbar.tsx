import Image from "next/image"
import Link from "next/link"
import { navbarLinks } from "../content/navbar"

export default function Navbar() {

    return (
        <div className="h-32 w-full flex justify-between items-center">
            <div className="flex gap-5 items-center drop-shadow-xl shadow-white">
                <div className="h-10 w-10rounded-xl flex items-center justify-center">
                    <Link href={'/'}><span className="font-bold grotesk text-base-100 select-none">JH</span></Link>
                </div>
                {
                    navbarLinks.map((item, index) => {
                        console.log(item + " " + index)
                        return (
                            <div className="" key={index}><Link href={item.link}>{item.label}</Link></div>
                        )
                    })
                }
                {/* <div className=""><Link href={''}>Motorcycles</Link></div> */}
            </div>
            <div>
                <div className="h-12 w-12 hover:scale-150 hover:-translate-x-5 hover:translate-y-5 transition ease-in-out- rounded-full overflow-hidden">
                    <Link href={"https://github.com/jamesharrison0799"}>
                        <Image src={"https://github.com/jamesharrison0799.png"} alt={"sexy fella"} width={500} height={500} />
                    </Link>
                </div>
            </div>
        </div>
    )
}