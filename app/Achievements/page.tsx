import Image from "next/image";

const achievements = [
    {
        title: "Codeforces",
        image: "/cf.png",
        link: "https://codeforces.com/profile/GOJO_GOKU_KURAMA"
    },
    {
        title: "CodeChef",
        image: "/cfc.jpeg",
        link: "https://www.codechef.com/users/saqlain786code"
    },
    {
        title: "LeetCode",
        image: "/lc.png",
        link: "https://leetcode.com/u/SZA786/"
    },
    {
        title: "AtCoder",
        image: "/atc.png",
        link: "https://atcoder.jp/users/Saqlain"
    },
    {
        title: "GeeksforGeeks",
        image: "/gfg.jpeg",
        link: "https://www.geeksforgeeks.org/user/saqlainzarjisansari/"
    },
    {
        title: "HackerRank",
        image: "/hck.png",
        link: "https://www.hackerrank.com/profile/saqlainzarjisan1"
    },
];

const Achievements = () => {
    return (
        <section id="Coding Profile" className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-12">Coding Profile</h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col items-center p-6">
                            <Image src={achievement.image} alt={achievement.title} width={100} height={100} className="object-contain mb-4" />
                            <h2 className="text-xl font-bold text-gray-700">{achievement.title}</h2>
                            <a 
                                href={achievement.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                            >
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
