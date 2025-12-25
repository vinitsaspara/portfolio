import { Project, Experience, Skill, SocialLink, Achievement, CodingProfile } from "@/types";

export const personalInfo = {
  image: "/pic4.jpeg",
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
    image: "/Spoural.png",
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
    title: "Chatify – Real-Time Chat App",
    description:
      "Built a real-time chat application using React, Node.js, Socket.IO, and MongoDB with secure authentication, online user status, and media sharing. Features include one-to-one messaging, JWT authentication, image sharing, message timestamps, and responsive UI for seamless communication.",
    image: "/Chatify.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/vinitsaspara/chatify_client",
    liveUrl: "https://chatify-client.vercel.app/",
    featured: true,
  },
  {
    id: "5",
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
    company: "Appifly Infotech",
    position: "Full Stack Development Intern",
    startDate: "2025-05",
    endDate: "2025-06",
    description: [
      "Worked as a Full Stack Development Intern on real-world web projects",
      "Learned and applied frontend and backend development concepts",
      "Contributed to full stack projects under senior developer guidance",
      "Gained hands-on experience in building, debugging, and improving web applications",
      "Followed professional coding standards and company guidelines",
      "Improved understanding of project workflow, teamwork, and industry practices",
    ],
    technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
    certificate: "/Appifly_Certificate.pdf",
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Full Stack Development Internship",
    organization: "Appifly Infotech",
    date: "June 2025",
    description:
      "Successfully completed a 1-month Full Stack Development Internship, working on real-world web projects and learning industry best practices.",
    certificate: "/Appifly_Certificate.pdf",
    category: "certification",
  },
  {
    id: "2",
    title: "Software Engineering Specialization",
    organization: "Coursera",
    date: "September 2025",
    description:
      "Completed a 3-course program covering UML modeling, software design, implementation, testing, and project management with real-world case studies.",
    certificate: "/SE_Certificate.pdf",
    category: "course",
  },
  {
    id: "3",
    title: "CodeChef Starters 218 (Rated) – Global Rank 539",
    organization: "CodeChef",
    date: "December 2025",
    description:
      "Achieved Global Rank 539 with a score of 500, demonstrating strong problem-solving and competitive programming skills in an IOI-style contest.",
    certificate: "/CodeChef_Rank_539.png",
    category: "award",
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    id: "1",
    platform: "LeetCode",
    username: "5sm8S9vq5f",
    profileUrl: "https://leetcode.com/u/5sm8S9vq5f/",
    stats: {
      problemsSolved: 460,
      rating: 1439,
      globalRank: 203816,
      contestsAttended: 7,
    },
    color: "from-orange-500 to-yellow-500",
    icon: "leetcode",
  },
  {
    id: "2",
    platform: "CodeChef",
    username: "vinit9399",
    profileUrl: "https://www.codechef.com/users/vinit9399",
    stats: {
      rating: 1382,
      maxRating: 1382,
      globalRank: 539,
      contestsAttended: 11,
    },
    color: "from-amber-600 to-orange-700",
    icon: "codechef",
  },
];
