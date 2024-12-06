import { Button } from "@/components/ui/button";
import dashboardPreview from "../../../assets/Screenshot 2024-12-03 at 13-57-15 Vite React TS.png";

const Hero = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 h-3/4 bg-gradient-to-br from-primary to-purple-900 md:h-1/2 drop-shadow-xl border-b-4 border-white/30">
      <div className="">
        <h1 className="text-primary-foreground text-6xl font-extrabold tracking-tight pt-12 mx-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-6xl">
          Effortless Trading, Powered by{" "}
          <span className="bg-gradient-to-tr from-slate-50 via-purple-500 to-primary bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Precision
          </span>
        </h1>
        <p className="mx-4 mt-12 text-2xl text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-xl lg:mt-8">
          Unlock the full potential of your trading journey by implementing
          backtested strategies that have been rigorously analysed to maximise
          performance.
        </p>
        <Button className="mx-4 my-12 text-xl border border-white/30 drop-shadow-xl">
          <a href="/access" className="">
            Get Started
          </a>
        </Button>
      </div>
      <img
        src={dashboardPreview}
        className="hidden xl:block w-3/4 m-auto rounded-md border-4 border-white/30 drop-shadow-xl object-cover object-fill"
      />
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="grid lg:grid-cols-2">
//       <div className="">
//         <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl mb-4">
//           Effortless Trading, Powered by Precision
//         </h1>
//         <p className="scroll-m-20 text-l tracking-tight lg:text-l mb-4">
//           Unlock the full potential of your trading journey by implementing
//           backtested strategies that have been rigorously analysed to maximise
//           performance. Whether you're a beginner or an experienced trader, our
//           platform empowers you to trade confidently, backed by data-driven
//           insights and automation designed to simplify and enhance your trading
//           experience.
//         </p>
//       </div>
//       <Button className="row-start-2 w-fit">
//         <a href="/access">Get Started</a>
//       </Button>
//       <img
//         src={dashboardPreview}
//         className="border rounded-xl drop-shadow-xl row-span-2 aspect-auto"
//       />
//     </div>
//   );
// };

// export default Hero;
