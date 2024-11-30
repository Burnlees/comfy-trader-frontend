import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";

const Landing = () => {
  return (
    // <div className="grid grid-cols-1 mt-12 mx-4 gap-12">
    <div className="flex flex-col justify-between my-12 mx-4 gap-12 h-full">
      <Hero />
      <Features />
    </div>
  );
};

export default Landing;
