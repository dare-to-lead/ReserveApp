import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroImage from "./components/HeroImage";
import Cards from "./components/card/Cards";
import ReviewCards from "./components/card/ReviewCards";
import Footer from "./components/footer/Footer";
// import TripFindingForm from "./components/form/TripFindingForm";

function App() {
  return (
    <div className="App">
      <div
        className="w-100 h-100 d-flex "
        style={{ backgroundColor: "rgb(202, 112, 7)" }}>
        <HeroImage />
        <Navbar />
      </div>
      <Cards />
      <ReviewCards />
      <Footer />
    </div>
  );
}

export default App;
