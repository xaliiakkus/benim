import "./App.css";
import Services from "./Components/Aboutus";
import {
  Navbar,
  Welcome,
  Footer,
  Transctions,
  Skills,
} from "./Components/index";

function App() {
  return (
    <div className="w-full ">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Skills />
      </div>

      <Services />
      <Transctions />
      <Footer />
    </div>
  );
}

export default App;
