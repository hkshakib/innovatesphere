import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import ProblemSolving from "./pages/ProblemSolving";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Summery from "./pages/Summery";

function App() {
  return (
    <div className="w-full-screen bg-[#F8EDFF] font-inter flex flex-col gap-4">
      <Navbar />
      <section
        id="home"
        className="flex pt-[50px] items-center justify-center relative"
      >
        <Home />
      </section>
      <section
        id="summery"
        className="flex pt-[50px] items-center justify-center relative"
      >
        <Summery />
      </section>
      <section
        id="skills"
        className="flex pt-[50px] pb-20 items-center justify-center relative"
      >
        <Skills />
      </section>

      <section id="experience" className="flex flex-col pt-[50px] relative">
        <Experiences />
      </section>
      <section
        id="projects"
        className="flex flex-col pt-[50px] pb-20 items-center justify-center relative"
      >
        <div className="flex pb-10">
          <span className="flex font-mono text-[35px] font-bold">Projects</span>
        </div>
        <Projects />
      </section>
      <section id="problemsolving" className="flex flex-col pt-[50px] relative">
        <ProblemSolving />
      </section>
      <section id="education" className="flex flex-col pt-[50px] relative">
        <Education />
      </section>

      <section
        id="footer"
        className="flex pt-[50px] items-center justify-center relative"
      >
        <Footer />
      </section>
    </div>
  );
}

export default App;
