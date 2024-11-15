import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto mt-12 mx-4 gap-12">
        <Hero />
        <Features />
    </div>
  );
};

export default Landing;
