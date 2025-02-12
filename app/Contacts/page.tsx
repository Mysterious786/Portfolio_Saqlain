"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("✅ Message sent!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("❌ Failed to send message");
        }
    };

    return (
        <section id="contacts" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 px-6 py-16">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-6xl font-extrabold text-gray-900 animate-fadeIn">Let's Connect</h1>
                <p className="text-xl text-gray-700 mt-4">Feel free to drop a message and I'll get back to you!</p>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center animate-slideUp">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            rows={5}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full py-3 text-lg font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-200 shadow-lg"
                    >
                        Send Message
                    </button>
                    <p className="text-md text-gray-600 mt-3">{status}</p>
                </form>
            </div>

            {/* Footer */}
            <footer className="w-full flex flex-col items-center mt-12">
                <div className="flex space-x-8 text-gray-700">
                    <a href="https://github.com/Mysterious786" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-4xl hover:text-green-500 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/saqlain-zarjis-ansari" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl hover:text-blue-500 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="mailto:saqlainzarjisansari@gmail.com">
                        <FaEnvelope className="text-4xl hover:text-gray-500 transition-transform transform hover:scale-110" />
                    </a>
                </div>
                <p className="text-lg text-gray-800 mt-4 font-medium">© 2025 Saqlain Zarjis Ansari</p>
            </footer>
        </section>
    );
};

export default Contacts;
