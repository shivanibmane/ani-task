import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen pb-5 bg-black ">
      <Navbar />
      <Hero />
      <Logos />
    </div>
  );
}
export default App;
