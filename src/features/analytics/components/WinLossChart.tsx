import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EquityChartProps } from "../analyticsTypes";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { formatWinLossChartData } from "../analyticsUtils";
import { Progress } from "@/components/ui/progress";

const WinLossChart = ({ ledgerInfo }: EquityChartProps) => {
  const { isPending, error, data } = ledgerInfo;

  const chartConfig = {
    wins: {
      label: "Wins",
      color: "hsl(var(--chart-2))",
    },
    losses: {
      label: "Losses",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Win/Loss</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={formatWinLossChartData(data)}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="wins" fill="var(--color-wins)" radius={4} />
              <Bar dataKey="losses" fill="var(--color-losses)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WinLossChart;
