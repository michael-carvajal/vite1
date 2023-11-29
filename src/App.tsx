import AboutUs from "./Components/AboutUs";
import Carousel from "./Components/Carousel";
import Featured from "./Components/Featured";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import Arrow from "./Components/Arrow";
import { Footer } from "./Footer";
function App() {

  return (
    <div className="">
      <Navbar />
      <Carousel />
      <AboutUs />
      <Featured />
      <Testimonials />
      <Footer />
      <ScrollToTop
        smooth={true}
        color="white"
        component={<Arrow  />}
        className="custom-scroll-top"
      />
    </div>
  );
}

export default App;
