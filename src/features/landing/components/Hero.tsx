import { Button } from "@/components/ui/button";

type HeroProps = {
  heading: string;
  description: string;
};

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="">
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Effortless Trading, Powered by Precision
        </h1>
        <p className="scroll-m-20 text-l tracking-tight lg:text-l mb-4">
          Unlock the full potential of your trading journey by implementing
          backtested strategies that have been rigorously analysed to maximise
          performance. Whether you're a beginner or an experienced trader, our
          platform empowers you to trade confidently, backed by data-driven
          insights and automation designed to simplify and enhance your trading
          experience.
        </p>
      </div>
        <Button className="row-start-2 w-fit">
          <a href="/access">Get Started</a>
        </Button>
    </div>
  );
};

export default Hero;
