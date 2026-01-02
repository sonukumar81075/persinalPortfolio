import React from "react";
import projectsData from "../data/projects.json";

const cvData = {
    name: "Sonu Kumar Saini",
    role: "Mern Stack Developer",
    photo: "/images/right_image.png",
    logo: "/images/right_image.png",
    location: "Dausa - Rajasthan",
    contacts: {
        phone: "+91 80754 47771",
        email: "sonusaini8075@gmail.com",
        linkedin: "https://www.linkedin.com/in/sonu-kumar-saini-618a29261",
        github: "https://github.com/sonukumar8075",
        website: "https://github.com/sonukumar8075",
    },
    about:
        "Mern Stack Developer | 1.5 Years of Experience | building high-performance web applications. Skilled in React, Next.js, Node.js, Express, and MongoDB, with strong expertise in creating secure, scalable solutions and delivering intuitive digital experiences.",
    experience: [
        {
            role: "MERN Stack Developer",
            company: "kytech digital pvt. ltd",
            duration: "July 2024 – Present working",
            summary:
                "Developing scalable MERN applications and deploying dynamic portals with best practices. Leading code reviews, ensuring cross-browser compatibility and consistent user experience. Collaborated with design and backend teams to deliver products on time and within budget. Designed system architectures using Node.js, Next.js, and Express. Built APIs and backend services for authentication, payments, and integrations.",
        },
        {
            role: "Internship · MERN Stack Developer",
            company: "Aladdin digital solutions",
            duration: "April 2024 – June 2024",
            summary:
                "Built and maintained MERN stack applications. Created and integrated REST APIs, improving response times and reduced UI defects. Implemented secure user management and authentication. Worked on real-time data handling and payment gateway integration. Optimized database queries, improving performance. Tech: Next.js, Node.js, MongoDB, Express.",
        },
    ],
    projects: [
        {
            title: "Portal · inwood Product App",
            description:
                "Built a MERN stack e-commerce platform using Next.js. Created product catalog with filtering and searching. Implemented secure user authentication and admin dashboards. Integrated payment gateways and order tracking. Optimized SEO and performance for better visibility. Tech: Next.js, TypeScript, Tailwind CSS, Node.js, Express",
        },
        {
            title: "Nested Logistics · Inwood Product App",
            description:
                "Created a logistics management system for handling inventory and deliveries. Built admin dashboards to track shipments, manage orders, and generate reports. Implemented role-based access control for team members. Optimized database queries to handle high data volumes efficiently. Tech: React, JavaScript, Next.js, Node, Express",
        },
        {
            title: "Stop Delay App",
            description:
                "Built a React app for flight delay claims. Helps optimize risk management, enhancing call center efficiency. Handles big volumes of travel claims across multiple languages. Implemented conversion-focused design with strong CTAs. Tech: React, JavaScript, Tailwind CSS, Node, Express",
        },
    ],
    skills: {
        frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB"],
        tools: ["GitHub"],
    },
    education: [
        {
            degree: "Bachelor of Arts",
            school: "Maharaja Surajmal Brij University (MSBU)",
            location: "Bharatpur",
            year: "2023",
            percentage: "60%",
        },
        {
            degree: "RBSE | Senior Secondary School",
            school: "BBN.Sen.Sec.School, Ballabhgarh— 12th",
            location: "Alwar, Rajasthan",
            year: "2019",
            percentage: "81.80%",
        },
    ],
    languages: [
        { name: "Hindi", level: "Native" },
        { name: "English", level: "Conversational" },
    ],
    hobbies:
        "Cricket, Chess, Athletics; fitness-focused, continuous skill improvement.",
    cvLink: "/downloads/sonu-cv.pdf",
};

const CV = () => {
    const projectItems = projectsData?.items || [];
    return (
        <div className="min-h-screen bg-[#212428] px-4 py-24 flex justify-center">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden print:max-w-full print:shadow-none">
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b-[0.5px] border-[#1f2a3d] bg-[#2C3545]">
                    <div className="flex items-center justify-center py-6 px-6">
                        {/* Outer Ring */}
                        <div className="w-24 h-24 rounded-full  flex items-center justify-center">
                            {/* Inner Image Wrapper */}
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                                {cvData.logo ? (
                                    <img
                                        src={cvData.logo}
                                        alt="Logo"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-[#1f2a3d] uppercase tracking-wide">
                                        Logo
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-6 px-6 text-[#1f2a3d] bg-white">
                        <h1 className="text-3xl font-bold tracking-wide uppercase text-center">
                            {cvData.name}
                        </h1>
                        <p className="text-sm font-semibold tracking-widest mt-1 uppercase text-center">
                            {cvData.role}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 bg-[#2c3545] text-white p-6 space-y-6">
                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                About Me
                            </h3>
                            <p className="text-xs leading-5 text-gray-200">{cvData.about}</p>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Contact
                            </h3>
                            <ul className="text-xs leading-5 text-gray-200 space-y-1">
                                <li>{cvData.contacts.phone}</li>
                                <li>{cvData.contacts.email}</li>
                                <li>
                                    <a
                                        href={cvData.contacts.linkedin}
                                        className="hover:text-yellow-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={cvData.contacts.github}
                                        className="hover:text-yellow-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>{cvData.location}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Skills
                            </h3>
                            <ul className="text-xs leading-5 text-gray-200 space-y-1">
                                <li>Frontend: {cvData.skills.frontend.join(", ")}</li>
                                <li>Backend: {cvData.skills.backend.join(", ")}</li>
                                <li>Database: {cvData.skills.database.join(", ")}</li>
                                <li>Tools: {cvData.skills.tools.join(", ")}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Language
                            </h3>
                            <ul className="text-xs leading-5 text-gray-200 space-y-1">
                                {cvData.languages.map((lang) => (
                                    <li key={lang.name}>
                                        {lang.name} · {lang.level}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="md:col-span-2 p-6 space-y-6">
                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 text-[#1f2a3d]">
                                Work Experience
                            </h3>
                            <div className="space-y-4">
                                {cvData.experience.map((exp) => (
                                    <div key={exp.role} className="border-b border-gray-200 pb-3">
                                        <div className="flex justify-between text-xs text-gray-600">
                                            <span className="font-semibold text-[#1f2a3d]">
                                                {exp.role}
                                            </span>
                                            <span>{exp.duration}</span>
                                        </div>
                                        <p className="text-xs text-gray-700">{exp.company}</p>
                                        <p className="text-xs text-gray-600 mt-1 leading-5">
                                            {exp.summary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 text-[#1f2a3d]">
                                Projects
                            </h3>
                            <div className="space-y-4">
                                {projectItems.map((proj) => (
                                    <div
                                        key={proj.id}
                                        className="border-b border-gray-200 pb-3 space-y-1"
                                    >
                                        {proj.projectUrl ? (
                                            <a
                                                href={proj.projectUrl}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="text-xs font-semibold text-[#1f2a3d] hover:underline"
                                            >
                                                {proj.title}
                                            </a>
                                        ) : (
                                            <p className="text-xs font-semibold text-[#1f2a3d]">
                                                {proj.title}
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-600 leading-5">
                                            {proj.description}
                                        </p>
                                        {proj.techStack && (
                                            <div className="flex flex-wrap gap-2 text-[11px] text-[#1f2a3d]">
                                                {proj.techStack.map((tech, idx) => {
                                                    const techName =
                                                        typeof tech === "string" ? tech : tech.name;
                                                    const techUrl =
                                                        typeof tech === "string" ? null : tech.url;
                                                    return techUrl ? (
                                                        <a
                                                            key={`${proj.id}-tech-${idx}`}
                                                            href={techUrl}
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            className="hover:underline"
                                                        >
                                                            {techName}
                                                        </a>
                                                    ) : (
                                                        <span key={`${proj.id}-tech-${idx}`}>
                                                            {techName}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 text-[#1f2a3d]">
                                Education
                            </h3>
                            <div className="space-y-3">
                                {cvData.education.map((edu) => (
                                    <div
                                        key={edu.degree + edu.school}
                                        className="border-b border-gray-200 pb-2"
                                    >
                                        <div className="flex justify-between text-xs text-gray-600">
                                            <span className="font-semibold text-[#1f2a3d]">
                                                {edu.degree}
                                            </span>
                                            {edu.year && <span>{edu.year}</span>}
                                        </div>
                                        <p className="text-xs text-gray-700">{edu.school}</p>
                                        {edu.location && (
                                            <p className="text-xs text-gray-600">{edu.location}</p>
                                        )}
                                        {edu.percentage && (
                                            <p className="text-xs text-gray-600">
                                                Percentage: {edu.percentage}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* <section>
              <h3 className="text-sm font-bold tracking-wide uppercase mb-3 text-[#1f2a3d]">References</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div>
                  <p className="font-semibold text-[#1f2a3d]">Harumi Kobayashi</p>
                  <p>Salford & Co. | CIO</p>
                  <p>Phone: +56 458-21520</p>
                  <p>Email: hello@reallygreatsite.com</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1f2a3d]">Bailey Dupont</p>
                  <p>Arowwai Industries | CEO</p>
                  <p>Phone: +56 458-21520</p>
                  <p>Email: hello@reallygreatsite.com</p>
                </div>
              </div>
            </section> */}

                        <div className="pt-2">
                            <a
                                href={cvData.cvLink}
                                download
                                className="inline-flex border border-[#1f2a3d] text-[#1f2a3d] px-4 py-2 rounded-md hover:bg-[#1f2a3d] hover:text-white transition text-sm font-semibold"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
