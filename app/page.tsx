
import Navbar from "./Navbar/page";
import About from "./About/page";
import Projects from "./Projects/page";
import Achievements from "./Achievements/page";
import Contacts from "./Contacts/page";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contacts/>
    </div>
  );
}
