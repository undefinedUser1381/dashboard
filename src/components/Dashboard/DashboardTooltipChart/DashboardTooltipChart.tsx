import { Bar, BarChart, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function DashboardTooltipChart() {
  const chartData = [
    { date: "2024-07-15", running: 450, swimming: 300 },
    { date: "2024-07-16", running: 380, swimming: 420 },
    { date: "2024-07-17", running: 520, swimming: 120 },
    { date: "2024-07-18", running: 140, swimming: 550 },
    { date: "2024-07-19", running: 600, swimming: 350 },
    { date: "2024-07-20", running: 480, swimming: 400 },
  ];
  const chartConfig = {
    running: {
      label: "Running",
      color: "hsl(var(--chart-1))",
    },
    swimming: {
      label: "Swimming",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <div className="dark:bg-dark shadow-lg bg-[#FFFFFF] h-[auto] xl:h-[22.2rem] mt-8 w-full xl:w-[58%] xl:mt-6 p-5">
      <div className="mb-2">
        <h3 className="font-medium mb-2 text-black dark:text-white">
          Profit this week
        </h3>
        <div className="flex items-center justify-start gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <p className="text-gray-400 dark:text-white font-medium">Sales</p>
          <div className="flex items-center justify-start gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <p className="text-gray-400 dark:text-white font-medium">Revenue</p>
          </div>
        </div>
      </div>
      <div>
        <Card className="border-0 h-auto">
          <CardContent className="dark:bg-dark h-[100%] bg-[#FFFFFF] p-0">
            <ChartContainer
              config={chartConfig}
              className="mt-10 w-full h-[14rem]"
            >
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    });
                  }}
                />
                <Bar
                  dataKey="running"
                  stackId="a"
                  className="fill-blue-300"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="swimming"
                  stackId="a"
                  className="fill-blue-500"
                  radius={[4, 4, 0, 0]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={false}
                  defaultIndex={1}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardTooltipChart;
