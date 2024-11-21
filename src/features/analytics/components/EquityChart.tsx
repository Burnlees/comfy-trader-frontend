import { Progress } from "@/components/ui/progress";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { formatEquityChartData } from "../analyticsUtils";
import { EquityChartProps } from "../analyticsTypes";

const EquityChart = ({ ledgerInfo }: EquityChartProps) => {
  const { isPending, error, data } = ledgerInfo;
  const chartConfig = {
    usdt: {
      label: "USDT",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Equity Chart (USDT)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className=""
          >
            <LineChart
              accessibilityLayer
              data={formatEquityChartData(data)}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <XAxis
                type="category"
                allowDuplicatedCategory={true}
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickMargin={8}
              />
              <YAxis width={20} />
              <Line
                dataKey="balance"
                name="USDT"
                type="natural"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EquityChart;
