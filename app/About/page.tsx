import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="relative w-full min-h-screen flex items-center justify-center px-6">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/bg1.jpg" // Ensure this is inside `public/`
                    alt="Background"
                    fill
                    className="object-cover opacity-20 animate-pulse"
                    priority
                />
            </div>

            {/* Foreground Content (Text + Image) */}
            <div className="relative z-10 bg-gray-900 bg-opacity-80 p-10 md:p-20 rounded-xl shadow-xl text-white max-w-6xl flex flex-row items-center gap-8 group">
                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-5xl font-bold mb-4 transition-all duration-300 group-hover:text-yellow-400">
                        Hi, I'm <span className="group-hover:text-blue-400">Saqlain</span>!
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        <span className="transition-all duration-300 group-hover:text-red-400">
                            I am a passionate Software developer and Competitive programmer.
                        </span>
                        <br />
                        <span className="transition-all duration-300 group-hover:text-green-400">
                            I love solving problems and building efficient solutions.
                        </span>
                        <br />
                        <span className="transition-all duration-300 group-hover:text-purple-400">
                            Welcome to my portfolio!
                        </span>
                    </p>
                </div>

                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                    <Image 
                        src="/pfp.jpg" // Ensure `profile.jpg` is in `public/`
                        alt="Profile"
                        width={160} 
                        height={160} 
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
