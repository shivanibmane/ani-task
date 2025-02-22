import Features from "./components/Features";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen pb-5 bg-black ">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
    </div>
  );
}
export default App;
