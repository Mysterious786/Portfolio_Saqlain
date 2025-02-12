"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
    return (
        <section id="contacts" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 px-6 py-12">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 animate-fadeIn">Let&apos;s Connect</h1>
                <p className="text-lg text-gray-700 mt-2">Reach out to me through my social links below!</p>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full text-center mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">Saqlain Zarjis Ansari</h2>
                {/* <p className="text-lg text-gray-700 mt-1">
                    Email: 
                    <a href="mailto:saqlainzarjisansari@gmail.com" className="text-blue-500 hover:underline ml-1">
                        saqlainzarjisansari@gmail.com
                    </a>
                </p> */}
                <div className="flex justify-center mt-4 space-x-6 text-gray-700">
                    <a href="https://github.com/Mysterious786" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl hover:text-green-500 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/saqlain-zarjis-ansari" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-blue-500 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="mailto:saqlainzarjisansari@gmail.com">
                        <FaEnvelope className="text-3xl hover:text-gray-500 transition-transform transform hover:scale-110" />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full text-center mt-6">
                <p className="text-md text-gray-800 font-medium">2025 Saqlain Zarjis Ansari</p>
            </footer>
        </section>
    );
};

export default Contacts;
