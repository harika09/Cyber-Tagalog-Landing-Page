import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Features from "./Components/Features/Features";
import Retailer from "./Components/Retailer/Retailer";
import Success from "./Components/Success/Success";
import Faq from "./Components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Retailer />
      <Success />
      <Faq />
    </div>
  );
}

export default App;
