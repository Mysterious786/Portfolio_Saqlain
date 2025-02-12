"use client";
import { useState, SetStateAction } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("about");

    // Function to handle section click
    const handleSetActive = (section: SetStateAction<string>) => {
        setActiveSection(section);
    };

    return (
        <div className="w-full h-16 bg-white px-8 flex items-center justify-between shadow-md fixed top-0 left-0 z-50">
            {/* Name */}
            <span className="text-2xl font-semibold text-gray-700">Saqlain Zarjis Ansari</span>

            {/* Social Links in Center */}
            <div className="flex space-x-6 text-gray-700">
                <a href="https://github.com/Mysterious786" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl hover:text-green-500 transition duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/saqlain-zarjis-ansari" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-200" />
                </a>
            </div>

            {/* Sections */}
            <ul className="flex space-x-8 text-gray-700">
                {["about", "projects", "Coding Profile", "contacts"].map((section) => (
                    <li key={section} className={`cursor-pointer transition duration-200 hover:-translate-y-1 
                        ${activeSection === section ? "text-green-500 font-semibold underline underline-offset-4" : "hover:text-green-500"}`}
                    >
                        <a href={`#${section}`} onClick={() => handleSetActive(section)}>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
