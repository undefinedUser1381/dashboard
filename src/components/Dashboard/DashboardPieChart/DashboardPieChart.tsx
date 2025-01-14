import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function DashboardPieChart() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#93C5FD",
    },
    safari: {
      label: "Safari",
      color: "#3B82F6",
    },
    firefox: {
      label: "Firefox",
      color: "#1e40af",
    },
    other: {
      label: "Other",
      color: "#1d4ed8",
    },
  } satisfies ChartConfig;

  return (
    <div className="dark:bg-dark shadow-lg bg-[#FFFFFF] h-[auto] xl:h-[22.2rem] mt-8 w-full xl:w-[40%] xl:mt-6 p-5">
      <h3 className="text-black font-medium dark:text-white">
        Visitors Analytics
      </h3>
      <div>
        <Card className="flex flex-col border-0 h-auto">
          <CardContent className="dark:bg-dark h-[100%] bg-[#FFFFFF] p-0">
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
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center gap-2 justify-between">
          <div className="flex w-[50%] flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <p className="text-black dark:text-white font-medium text-[0.8rem]">Desktop</p>
            </div>
            <p className="font-medium text-black dark:text-white text-[0.8rem]">65%</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <p className="text-black dark:text-white font-medium text-[0.8rem]">Chorme</p>
            </div>
            <p className="font-medium text-black dark:text-white text-[0.8rem]">45%</p>
          </div>
          </div>
          <div className="flex w-[50%] flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <p className="text-black dark:text-white font-medium text-[0.8rem]">Tablet</p>
            </div>
            <p className="font-medium text-black dark:text-white text-[0.8rem]">33%</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1">
            <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
            <p className="text-black dark:text-white font-medium text-[0.8rem]">Chorme</p>
            </div>
            <p className="font-medium text-black dark:text-white text-[0.8rem]">65%</p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default DashboardPieChart;
