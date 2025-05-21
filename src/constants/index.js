import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As an Accomplished Project Engineer at Wipro Technologies, I specialized in designing and optimizing scalable web applications using Java, Spring Boot, and RESTful APIs. I played a key role in enhancing system performance and driving user engagement by implementing efficient backend solutions. With strong proficiency in MySQL and PostgreSQL, I ensured robust, scalable database management, delivering high-quality solutions tailored to business needs. Additionally, I mentored junior engineers, fostering a collaborative learning environment to enhance team performance and project delivery.`;

export const ABOUT_TEXT = `I am a passionate Java Developer with several years of experience in building robust, scalable, and high-performance backend systems using Java and Spring Boot. My expertise lies in designing and developing enterprise-level applications, crafting RESTful APIs, and implementing Microservices architectures to deliver seamless user experiences. I specialize in leveraging Spring Boot to accelerate development processes, ensuring clean and maintainable code.

I thrive in collaborative environments, where I can innovate and solve complex problems, all while ensuring system reliability, scalability, and optimal performance. My experience spans both small-scale applications and large enterprise systems, where I’ve optimized backend services to handle thousands of concurrent requests without compromising efficiency.

As a lifelong learner, I am always exploring new techniques to enhance my skills in backend development and am keen to expand my knowledge in emerging technologies, including Machine Learning and Cloud Computing. My ultimate goal is to deliver high-quality, scalable software solutions that meet the ever-evolving needs of users and businesses.`;

export const HERO_NAME = `Surendar`;

export const EXPERIENCES = [
  {
    year: "2023 - 2025",
    role: "Java Developer",
    company: "Wipro Technologies.",
    description: `Developed and optimized scalable backend systems using Java, Spring Boot, and RESTful APIs. Integrated PostgreSQL and MySQL databases for high-performance data storage. Focused on security implementation with Spring Security and JWT.`,
    technologies: ["Java", "Spring Boot", "PostgreSQL","Microservices","Docker"]
  },
  {
    year: "2022 - 2023",
    role: "Project Engineer",
    company: "Wipro Technologies.",
    description: `Contributed to microservice-based architecture design and implementation. Developed and maintained APIs, worked on database optimization, and collaborated closely with cross-functional teams for seamless project delivery.`,
    technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL"]
  },
  {
    year: "2021 - 2022",
    role: "Project Intern",
    company: "Wipro Technologies.",
    description: `Collaborated on building backend service using Java and Springboot framework. Contributed to REST API development and database integration using PostgreSQL, gaining practical experience in real-world enterprise projects.`, 
    technologies: ["Java", "PostgreSQL", "SpringBoot", "REST"]
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Backend API",
    image: project1,
    description:
      "A scalable backend API built with Spring Boot supporting product listings, cart operations, and JWT-based user authentication.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "REST API"]
  },
  {
    title: "Task Management System",
    image: project2,
    description:
      "A backend service managing tasks and projects with secure login, CRUD operations, and user role-based access.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"]
  },
  {
  title: "Portfolio Website",
  image: project3,
  description:
    "A personal portfolio website built using React and Tailwind CSS to display dynamic content and a fully responsive UI.",
  technologies: ["HTML","Tailwind CSS","React", "JavaScript"]
  },
  // {
  //   title: "Blogging Platform Backend",
  //   image: project4,
  //   description:
  //     "A blogging platform backend with rich text post management, user authentication, and comment moderation.",
  //   technologies: ["Java", "Spring Boot", "OAuth2", "MySQL"]
  // }
];

export const CONTACT = {
  address: "Coimbatore, India",
  phoneNo: "+91 8189874244",
  email: "surendarraja024@gmail.com"
};
