import { Project, Experience, Skill, SocialLink } from "@/types";

export const personalInfo = {
  img:"/profile_image.jpg",
  name: "Vinit Saspara",
  title: "Full Stack Developer",
  email: "sasparavinit@gmail.com",
  phone: "+91 8238300674",
  location: "Anand, Gujarat",
  bio: "Passionate full-stack developer creating scalable web applications. I specialize in React, Node.js, and modern JavaScript frameworks. I love turning complex problems into simple, beautiful solutions that provide excellent user experiences. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vinitsaspara",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinit-saspara-997b91294/",
    icon: "linkedin",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Redux-Toolkit", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  // { name: "Python", category: "backend", level: "intermediate" },
  { name: "Express.js", category: "backend", level: "advanced" },

  // Database
  { name: "PostgreSQL", category: "database", level: "intermediate" },
  { name: "MongoDB", category: "database", level: "intermediate" },

  // Tools
  { name: "Git/Github", category: "tools", level: "advanced" },
  // { name: "Docker", category: "tools", level: "intermediate" },
  { name: "VS Code", category: "tools", level: "expert" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AgriRent – Farming Equipment Rental Platform",
    description:
      "AgriRent is a role-based farming equipment rental platform designed to simplify the process of renting agricultural machinery. Farmers can browse and book equipment at hourly rates, while different administrative levels (Admin, State, District, and Taluka employees) manage listings, availability, and payments. The platform features secure Stripe payment integration, a responsive user interface, and efficient data management using MongoDB. It helps reduce costs for farmers and maximizes equipment utilization for owners.",
    image: "/AgriRent2.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    githubUrl: "https://github.com/vinitsaspara/AgriRent",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "2",
    title: "University Examination Portal",
    description:
      "A web-based examination management system designed for universities to conduct, manage, and monitor exams digitally. The platform supports role-based access for administrators, faculty, and students, enabling tasks such as exam scheduling, question paper creation, online submissions, and automated result generation. Built with PostgreSQL for complex relational data handling, it ensures security, scalability, and a seamless user experience for all stakeholders.",
    image: "/Examination_portal.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma",
    ],
    githubUrl: "https://github.com/HarshDonda-23DIT010/Examination-portel",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "3",
    title: "Spoural Management System",
    description:
      "A role-based web application for managing university-level cultural and sports events. The system supports four user roles: Student, Student Coordinator, Faculty, and Admin. Students can register, view events, apply for participation, track application status, and access practice or final performance schedules. Student Coordinators manage student applications, approve or reject participants, and propose practice schedules to Faculty. Faculty can review selected students, download participant lists, and approve practice schedules. Admins have full control to add faculty/coordinators, and publish or update final schedules. This platform streamlines the entire event management process, ensuring clear communication and efficient coordination across all roles.",
    image: "/spoural.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    githubUrl: "https://github.com/vinitsaspara/spoural_managment_system",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "4",
    title: "Job Portal Application",
    description:
      "A full-stack MERN job portal platform connecting employers and job seekers, featuring role-based dashboards, job postings, application management, and advanced search with filters.",
    image: "/Job_portal.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/vinitsaspara/online_job_platform",
    liveUrl: "https://job-frontend-v64g.vercel.app/",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    startDate: "2022-01",
    endDate: undefined,
    description: [
      "Led development of user-facing features for a SaaS platform serving 10,000+ users",
      "Implemented responsive designs and improved page load times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "2",
    company: "Startup XYZ",
    position: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description: [
      "Built and maintained web applications using modern JavaScript frameworks",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Integrated third-party APIs and payment processing systems",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
];
