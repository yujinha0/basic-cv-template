import Image from "next/image"
import { DiscordIcon, GithubMark } from "./SocialIcons"
import Link from "next/link"
import { resume } from "../content/resume"


function SocialIcons() {

    const socialLinks = resume.socialLinks

    return (
        <>

            {socialLinks.map((item, index) => {

                switch (item.label.toLowerCase()) {
                    case "github":
                        return (
                            <Link href={item.link} key={index}>
                                <GithubMark className="h-6 md:h-8 fill-white hover:fill-[#5865F2] shadow-2xl hover:shadow-white" />
                            </Link>
                        );
                    case "discord":
                        return (
                            <Link href={item.link} key={index}>
                                <DiscordIcon className="h-6 md:h-8 fill-white hover:fill-[#5865F2] shadow-2xl hover:shadow-white" />
                            </Link>
                        );
                    default:
                        return null; // Handle other social media platforms if needed
                }
            })}
        </>

    )
}

export default function Footer() {


    return (
        <div className="h-20 border-t-gray-200 border-t-2">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 py-6">
                    <SocialIcons />
                    <div className="relative">
                        <div className="dropdown">
                            <ul tabIndex={0} className=" absolute -translate-y-20 dropdown-content z-[1] p-2  shadow-2xl bg-base-300 rounded-box  w-24">
                                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="Light" /></li>
                                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
                            </ul>
                            {/* <div tabIndex={0} role="button" className="btn m-1">
                            Theme
                            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                        </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}