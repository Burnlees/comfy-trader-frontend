import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MacdImage from "../../../assets/BTCUSDT.P_2024-11-18_20-15-56.png";
import { useNavigate } from "react-router-dom";

type StratBreakdownProps = {
  description: string;
  metrics: {
    "Sharpe Ratio": number;
    "Sortino Ratio": number;
    "Profit Factor": number;
    "Avg Bars Per Trade": number;
    "Percent Profitable": number;
  };
};

const StrategyBreakdown = ({ description, metrics }: StratBreakdownProps) => {
  const navigate = useNavigate();

  const handleClick = () => [navigate("/dashboard/settings")];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
      <section className="lg:col-span-2">
        <h2 className="font-semibold text-xl mb-4">Description</h2>
        <p>{description}</p>
        <Separator className="my-4"></Separator>
      </section>
      <section>
        <img src={MacdImage} alt="" className="rounded-xl drop-shadow-xl" />
      </section>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="font-semibold text-xl">Statistics</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4">
              {Object.entries(metrics).map(([key, value]) => {
                if (key === "Percent Profitable") {
                  return (
                    <li>
                      {key}: {value}%
                    </li>
                  );
                }
                return (
                  <li>
                    {key}: {value}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="grid grid-cols-2">
        <Button variant={"link"} className="w-fit">
          <a
            href="https://www.tradingview.com/script/Bg0HGDX6-Trend-Filtered-MACD-Strategy/"
            target="_blank"
          >
            Go to TradingView
          </a>
        </Button>
        <Button className="w-fit" onClick={handleClick}>
          Implement Strategy
        </Button>
      </section>
    </div>
  );
};

export default StrategyBreakdown;
