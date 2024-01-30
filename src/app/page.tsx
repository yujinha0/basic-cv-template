import BlogPostList from "./components/BlogPostList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import * as Resume from './components/Resume'

function HeroContent() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-base-100">{`Hello, I'm ${Resume.bio.title}`}</h1>
      <p className="text-xl text-neutral text-wrap">{Resume.bio.tagline}</p>
    </div>
  )
}

function Blog() {
  return (
    <div className="flex flex-col items-center justify-start gap-12 pt-16">

      <BlogPostList title={"Post One"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post Two"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post Three"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />

      <div className="w-full">
        <span className="text-base-100 hover:text-secondary">More Articles</span>
      </div>

    </div>

  )
}

export default function Home() {
  return (
          <>
          <HeroContent />
          <Resume.Section />
          {/* <Blog /> */}
          </>
  );
}
