import NavBar from "../../layout/NavBar";
import Environment from "../../sections/Environment";
import Features from "../../sections/Features";
import Hero from "../../sections/Hero";
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
    </>
  );
}
