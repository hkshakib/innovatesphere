import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
        className="flex pt-[50px] items-center justify-center relative"
      >
        <Skills />
      </section>
      <section
        id="home"
        className="flex pt-[50px] items-center justify-center relative"
      ></section>
    </div>
  );
}

export default App;
