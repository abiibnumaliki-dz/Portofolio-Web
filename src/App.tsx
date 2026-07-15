import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Skills from "./components/layout/Skills";

function App() {
  return(
    <div className="bg-[#F7F1E8] dark:bg-[#111827] transition-colors duration-500">
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    </>
    </div>
  );
}

export default App;