import About from "./components/about";
import Blogs from "./components/blogs";
import Header from "./components/header";
import Interests from "./components/interests";
import Projects from "./components/projects";


export default function Home() {
  return (
      <div className="flex justify-center lg:items-center min-h-screen w-full">
        <div className="w-full max-w-2xl m-2 p-2 lg:m-0 lg:p-0"> 
        <Header />
        <About />
        <Interests />
        <Projects />
        <Blogs/>
      </div>
      </div>
  );
}
