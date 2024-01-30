type BlogPostListTypes = {
    title:string,
    desc:string,
    date:string
}

export default function BlogPostList({title,desc,date} : BlogPostListTypes)  {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-base-100">{title}</h1>
                    <p className=" text-text text-md text-neutral">{desc}</p>
                </div>
                <span className=" text-neutral opacity-70 pt-2">{date}</span>
            </div>

        </div>
    )
}