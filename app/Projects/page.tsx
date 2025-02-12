import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Deep Facial Recognition",
        description: "A deep learning-based facial recognition model using Siamese networks.",
        image: "/project1.jpg",
        github: "https://github.com/Mysterious786/DeepFacialRecognition",
        live: null,
    },
    {
        title: "Crown Clothing",
        description: "An e-commerce clothing store built with React, Redux, and Firebase.",
        image: "/project2.jpg",
        github: "https://github.com/Mysterious786/CrownClothing",
        live: "https://crown-clothing.vercel.app/",
    },
    {
        title: "Weather App",
        description: "A real-time weather forecast application using OpenWeather API.",
        image: "/project3.jpg",
        github: "https://github.com/Mysterious786/WeatherApp",
        live: "https://weatherapp.vercel.app/",
    },
    
    
    {
        title: "Campground Project",
        description: "A full-stack MERN application for booking and reviewing campgrounds.",
        image: "/project6.jpg",
        github: "https://github.com/Mysterious786/Campground",
        live: null,
    },
    {
        title: "Chatty App",
        description: "A real-time chat application built with MERN stack and WebSockets.",
        image: "/project7.jpg",
        github: "https://github.com/Mysterious786/ChattyApp",
        live: "https://lnkd.in/gPnyGjsE",
    },
    {
        title: "Chat to PDF",
        description: "Converts chat conversations into a downloadable PDF format.",
        image: "/project8.jpg",
        github: "https://github.com/Mysterious786/ChatToPDF",
        live: "https://lnkd.in/gv4k7U4F",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-12">Projects</h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-700">{project.title}</h2>
                                <p className="text-gray-600 mt-2">{project.description}</p>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-4">
                                    {/* GitHub Button */}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
                                        <FaGithub /> GitHub
                                    </a>

                                    {/* Live Demo Button */}
                                    {project.live ? (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    ) : (
                                        <button disabled
                                            className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed">
                                            <FaExternalLinkAlt /> No Live Demo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
