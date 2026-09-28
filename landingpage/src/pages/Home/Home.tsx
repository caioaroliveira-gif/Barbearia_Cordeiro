import NavBar from "../../layout/NavBar";
import Booking from "../../sections/Booking";
import Environment from "../../sections/Environment";
import Features from "../../sections/Features";
import Footer from "../../sections/Footer";
import Hero from "../../sections/Hero";
import Location from "../../sections/Location";
import Service from "../../sections/Service";
import Team from "../../sections/Team";
import Testimonials from "../../sections/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Service />
      <Team />
      <Environment />
      <Testimonials />
      <Booking />
      <Location />
      <Footer />
    </>
  );
}
