import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
    </div>
  );
}

export default App;
