import { Separator } from "@/components/ui/separator";
import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";

const Landing = () => {
  return (
    <div className="h-full max-w-full">
      <Hero />
      <Features />
    </div>
  );
};

export default Landing;
