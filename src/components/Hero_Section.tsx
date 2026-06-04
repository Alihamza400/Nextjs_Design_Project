import Link from "next/link";
import {Spotlight} from "./ui/spotlight"
import {Button} from "./ui/moving-border"

export default function HeroSection(){
    return(
        <div className = "h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0 py-10 bg-slate-950 text-white">
            <Spotlight className="-top-24 left-1/2 -translate-x-1/2" fill="white" />
            <div className = "p-4 relative z-10 w-full md:w-1/2 text-center"
            >
                <h1 className="text-4xl font-bold items-center justify-content pb-10">Master The Programming</h1>
                <p className="text-lg leading-8 text-slate-200">
                  Enhance your coding skills with our comprehensive courses and hands-on projects. We provide the services of every type of development and we also provide the courses related to programming which include AI, Data Science, Machine Learning, and Blockchain. Learn with practical examples, build real applications, and grow your technical confidence one lesson at a time.
                </p>
                <div className="mt-8">
                  <Link href="/courses">
                    <Button className="bg-white text-black px-4 py-2 rounded-full ">Explore Courses</Button>
                  </Link>
                </div>
            </div>

            </div>
        
    )
}