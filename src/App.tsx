import AboutUs from "./Components/AboutUs";
import Carousel from "./Components/Carousel";
import Featured from "./Components/Featured";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import Arrow from "./Components/Arrow.svg";
function App() {

  return (
    <div className="">
      <Navbar />
      <Carousel />
      <AboutUs />
      <Featured />
      <Testimonials />
      <ScrollToTop
        smooth
        color="white"
        component={<Arrow  />}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          borderRadius: "25%",
          backgroundColor: "#FF4500", // Use your preferred orange color
          padding: "8px",
          fontSize: "12px",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
        // other props...
      />
    </div>
  );
}

export default App;
