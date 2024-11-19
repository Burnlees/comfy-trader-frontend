import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StrategyBreakdown from "@/features/strategies/components/StrategyBreakdown";
import { STRATEGIES } from "@/constants";

const Strategies = () => {
  return (
    <div>
      <Accordion type="multiple">
        {Object.entries(STRATEGIES).map(([key, value]) => {
          const name = value.name;
          const description = value.description;
          const metrics = value.backtestMetrics;
          return (
            <AccordionItem value={key}>
              <AccordionTrigger className="text-xl">{name}</AccordionTrigger>
              <AccordionContent>
                <StrategyBreakdown
                  description={description}
                  metrics={metrics}
                ></StrategyBreakdown>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Strategies;
