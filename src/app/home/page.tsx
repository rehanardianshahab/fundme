import Hero from "@/app/home/components/Hero";
import Project from "@/app/home/components/Project";
import Testimonial from "@/app/home/components/Testimonial";
import Portofolio from "@/app/home/components/Portofolio";
import Benefits from "@/app/home/components/Benefits";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Project />
      <Testimonial />
      <Portofolio />
      <Benefits />
    </>
  );
}
