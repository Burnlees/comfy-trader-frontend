import { useEffect, useState } from "react";
import { getUserBalances } from "../analyticsService";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

type PortfolioData = {
  ticker: string;
  volume: number;
  fill: string;
}[];

const PortfolioPieChart = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | undefined>(
    undefined
  );
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const fetchedData = await getUserBalances();

        const formattedData = Object.keys(fetchedData)
          .filter((v) => parseFloat(fetchedData[v]) !== 0)
          .map((asset, index) => {
            const assetObj = { ticker: "", volume: 0, fill: "" };
            assetObj.ticker = asset;
            assetObj.volume = parseFloat(fetchedData[asset]);
            assetObj.fill = `hsl(var(--chart-${index + 1}))`;
            return assetObj;
          });

        setPortfolioData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPortfolioData();
  }, []);

  useEffect(() => {
    const result: { [key: string]: any } = {} satisfies ChartConfig;

    portfolioData?.forEach((asset, index) => {
      const key: string = asset.ticker;

      if (key) {
        result[key] = { label: key, color: `hsl(var(--chart-${index + 1}))` };
      }
    });
    setChartConfig(result);
  }, [portfolioData]);

  return (
    <div className="">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Portfolio Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={portfolioData}
                dataKey="volume"
                nameKey="ticker"
                innerRadius={70}
                strokeWidth={1}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            $
                            {portfolioData?.reduce((accumulator, asset) => {
                              return Math.round(accumulator + asset.volume);
                            }, 0)}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Total Value
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default PortfolioPieChart;
