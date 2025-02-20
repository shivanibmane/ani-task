import Hero from "./components/Hero";
import Logo from "./components/logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen pb-5 bg-black ">
      <Navbar />
      <Hero />
      <Logo />
    </div>
  );
}

export default App;
