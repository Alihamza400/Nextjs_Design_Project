"use client";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";
import gridBackgroundDemo from "./grid-background-demo";
export default function TestimonialsCard(){
    const testimonials = [
  {
    quote:
      "The Blockchain Engineering program provided me with hands-on experience in smart contract development, decentralized applications, and Web3 technologies. The practical projects and industry-focused curriculum gave me the confidence to build secure blockchain solutions and pursue a career in the rapidly evolving blockchain ecosystem.",
    name: "Ahmed Khan",
    title: "Blockchain Engineer",
  },
  {
    quote:
      "The Artificial Intelligence course transformed my understanding of intelligent systems. From machine learning fundamentals to advanced generative AI applications, the course delivered a perfect balance of theory and practical implementation that helped me build real-world AI solutions.",
    name: "Sarah Johnson",
    title: "AI Research Associate",
  },
  {
    quote:
      "The Cloud Computing program helped me master cloud architecture, deployment strategies, containerization, and infrastructure management. The hands-on labs and real-world scenarios prepared me to confidently work with enterprise-grade cloud environments.",
    name: "Muhammad Ali",
    title: "Cloud Solutions Architect",
  },
  {
    quote:
      "Through the Data Science course, I learned how to transform raw data into meaningful insights. The comprehensive coverage of analytics, visualization, and predictive modeling enabled me to solve complex business problems using data-driven approaches.",
    name: "Emily Roberts",
    title: "Data Scientist",
  },
  {
    quote:
      "The Web Development program provided a complete roadmap from frontend fundamentals to full-stack application development. Building real-world projects with modern frameworks significantly improved my development skills and professional portfolio.",
    name: "David Wilson",
    title: "Full Stack Developer",
  },
  {
    quote:
      "The DevOps and Security course equipped me with practical knowledge of CI/CD pipelines, infrastructure automation, monitoring, and cybersecurity best practices. It helped me understand how to build secure and scalable software delivery processes.",
    name: "Fatima Noor",
    title: "DevOps Engineer",
  },
  {
    quote:
      "The Frontend Design program taught me how to create visually appealing and highly intuitive user experiences. Learning modern UI/UX principles and responsive design techniques allowed me to build interfaces that users genuinely enjoy interacting with.",
    name: "Sophia Martinez",
    title: "UI/UX Designer",
  },
  {
    quote:
      "The Machine Learning course provided an excellent foundation in predictive modeling, neural networks, and deep learning. The practical exercises and real-world case studies helped me apply machine learning techniques to solve challenging business problems.",
    name: "James Anderson",
    title: "Machine Learning Engineer",
  },
];
   return(
       <div  className = "h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0 py-10 bg-slate-950 text-white"> 
        <div>
            <h2 className = "text-3xl font-bold text-center my-8 text-white">Hear Our Harmony,Voices of Success</h2>
        <InfiniteMovingCards items = {testimonials} direction = "right" speed = "slow" >
       
        </InfiniteMovingCards>
         <gridBackgroundDemo/>
        </div>
       </div>
   )
}
   