import {StickyScroll} from "./ui/sticky-scroll-reveal";
export default function WhyChooseUs(){
   const content = [
  {
    title: "Blockchain Engineering",
    description:
      "Gain comprehensive expertise in blockchain technology, distributed ledger systems, consensus mechanisms, smart contract development, tokenization, decentralized finance (DeFi), and Web3 ecosystems. Learn how to design, develop, deploy, and secure blockchain applications while understanding real-world use cases across finance, healthcare, supply chain management, digital identity, and enterprise solutions.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Explore the exciting world of Artificial Intelligence by learning how intelligent systems perceive, reason, learn, and make decisions. Study machine learning, deep learning, natural language processing, computer vision, generative AI, AI agents, and large language models. Develop practical skills to build AI-powered applications that solve real-world problems across industries.",
  },
  {
    title: "Cloud Computing",
    description:
      "Master modern cloud technologies and infrastructure management by learning cloud architecture, virtualization, containerization, serverless computing, networking, storage systems, and cloud security. Gain hands-on experience with industry-leading cloud platforms and understand how organizations deploy, scale, and manage applications efficiently in distributed cloud environments.",
  },
  {
    title: "Data Science",
    description:
      "Learn how to extract valuable insights from large and complex datasets using statistical analysis, data visualization, predictive modeling, and business intelligence techniques. Develop expertise in data collection, cleaning, transformation, exploratory analysis, and advanced analytics while utilizing modern tools and frameworks to support data-driven decision-making.",
  },
  {
    title: "Web Development",
    description:
      "Build professional, responsive, and scalable web applications using modern frontend and backend technologies. Learn HTML, CSS, JavaScript, React, Next.js, APIs, databases, authentication systems, and deployment strategies. Gain practical experience through real-world projects that prepare you to develop high-performance applications for businesses and consumers.",
  },
  {
    title: "DevOps and Security",
    description:
      "Develop expertise in modern software delivery practices by learning continuous integration and deployment (CI/CD), infrastructure as code, container orchestration, cloud operations, monitoring, and automation. Strengthen your cybersecurity knowledge with secure development practices, vulnerability assessment, risk management, identity and access management, and system hardening techniques.",
  },
  {
    title: "Frontend Design",
    description:
      "Create visually appealing, user-friendly, and highly interactive digital experiences by mastering UI/UX design principles, responsive layouts, design systems, accessibility standards, and frontend technologies. Learn how to transform ideas into intuitive interfaces that enhance user engagement while maintaining consistency, performance, and usability across devices.",
  },
  {
    title: "Machine Learning",
    description:
      "Discover how intelligent systems learn from data to make predictions, identify patterns, and automate decision-making processes. Study supervised learning, unsupervised learning, reinforcement learning, deep learning, neural networks, model optimization, and deployment strategies. Apply machine learning techniques to solve real-world challenges in business, healthcare, finance, and technology.",
  },
];
    return (
        <div >
           <StickyScroll content={content}></StickyScroll>
        </div>

    )
}