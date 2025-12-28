import project1 from "../assets/images/project-placeholder-1.svg";
import project2 from "../assets/images/project-placeholder-2.svg";
import project3 from "../assets/images/project-placeholder-3.svg";

const projectsData = [
    {
        id: 1,
        title: "Banking Dashboard Website",
        description:
            "Responsive banking dashboard website built using React with secure UI patterns and clean component structure.",
        tech: ["React", "JavaScript", "CSS"],
        image: project1,
        live: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Financial Services Website",
        description:
            "Corporate financial services website developed using React with reusable components and optimized performance.",
        tech: ["React", "Vite", "CSS"],
        image: project2,
        live: "#",
        github: "#",
    },
    {
        id: 3,
        title: "API Integrated Website",
        description:
            "React-based website integrating REST APIs to fetch and display dynamic financial data with proper error handling.",
        tech: ["React", "API", "JavaScript"],
        image: project3,
        live: "#",
        github: "#",
    },
];

export default projectsData;