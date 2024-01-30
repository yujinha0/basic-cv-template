import { ReactNode } from "react";
import { resume } from "../content/resume";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";


const bio = {
    title: resume.title,
    tagline: resume.tagline,
    address: resume.address,
    postcode: resume.postcode
}


function Experience() {

    const experience = resume.experience

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-base-100 font-bold text-xl">Experience</h1>
            <div className="flex flex-col gap-5">
                {experience.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="flex flex-col pb-2">
                                <h2 className="text-base-100 font-bold text-lg">{`${item.company} -  ${item.title}`}</h2>
                                <span>{`${item.time.start.month} ${item.time.start.year} - ${item.time.end.month} ${item.time.end.year}`}</span>
                            </div>
                            <ul className=''>
                                {item.details.map((item, index) => {
                                    return (
                                        <li key={index} className='list-disc list-inside'>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}



function Education() {

    const education = resume.education

    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-base-100 font-bold text-xl">Education</h1>
                <div className="flex flex-col gap-5">
                    {education.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex-col pb-2">
                                    <h2 className="text-base-100 font-bold text-lg">{`${item.establishment} ${item.subject != null ? " - " + item.subject : ""}`}</h2>
                                    <span>{`${item.time.start.year} - ${item.time.end.year}`}</span>
                                </div>
                                <ul className=''>
                                    {item.details.map((item, index) => {
                                        return (
                                            <li key={index} className='list-disc list-inside'>{item}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

type ListItem = {
    label: string;
    link: string | null;
};

type ListSectionProps = {
    list: ListItem[];
    label: string;
};
function ListSection({ list, label }: ListSectionProps) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-base-100 font-bold text-xl">{label}</h2>
            <ul className="flex flex-col gap-2">
                {list.map((item, index) => {
                    if (item.link != null) {
                        return (
                            <Link href={item.link} key={index}>
                                <div className="w-full flex hover:scale-105 group">
                                    <div className="w-4/5">{item.label}</div>
                                    <div className="w-1/5">
                                        <div className="flex items-center justify-center h-full opacity-15 group-hover:opacity-100">
                                            <BsBoxArrowUpRight />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    } else {
                        return (
                            <li key={index} className=' '>{item.label}</li>
                        )
                    }

                })}
            </ul>
        </div>
    )
}




function Section() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-wrap md:flex-nowrap w-full h-fit justify-between gap-16">
                <div className="md:w-3/5 ">
                    <Experience />
                </div>
                <div className="md:w-2/5 flex flex-col gap-10">
                    <ListSection list={resume.skills} label="Skills" />
                    <ListSection list={resume.interests} label="Interests" />
                    <ListSection list={resume.certificates} label="Certificates" />
                </div>
            </div>
            <Education />
            <div>
            </div>
        </div>
    )
}

export { bio, Experience, Education, Section }