import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testinomial from "./components/Testinomial";
import TrialCallout from "./components/TrialCallout";

function App() {
  return (
    <div className="w-full min-h-screen pb-5 bg-black ">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Services />
      <Testinomial />
      <Contact />
      <TrialCallout />
      <Footer />
    </div>
  );
}
export default App;
