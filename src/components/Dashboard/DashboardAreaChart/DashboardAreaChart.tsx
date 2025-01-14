import { Area, AreaChart, XAxis , YAxis} from "recharts"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

function DashboardAreaChart() {

    const chartData = [
        { month: "Oct", desktop: 226, mobile: 80 },
        { month: "Nov", desktop: 386, mobile: 90 },
        { month: "Dec", desktop: 186, mobile: 100 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#4E6C7F",
        },
        mobile: {
          label: "Mobile",
          color: "#5A76A7",
        },
      } satisfies ChartConfig

  return (
    <div className="dark:bg-dark shadow-lg bg-[#FFFFFF] mt-8 xl:mt-6 p-5 h-auto w-full">
       <div className="w-full flex-col sm:flex-row mb-8 gap-8 flex items-center justify-start">
          <div className="flex text-[0.9rem] gap-1 w-full sm:w-[10rem] flex-col">
            <h4 className="text-blue-600">Total Revenue</h4>
            <p className="text-[#AEB7B8] font-medium">2.04.2022 - 12.05.2022</p>
          </div>
          <div className="flex gap-1 text-[0.9rem] w-full sm:w-[10rem] flex-col">
            <h4 className="text-blue-400">Total Sales</h4>
            <p className="text-[#AEB7B8] font-medium">12.04.2022 - 12.05.2022</p>
          </div>
       </div>
       <div className="mt-3">
      <Card className="border-none w-full">
      <CardContent className="dark:bg-dark bg-[#FFFFFF] p-0">
        <ChartContainer className="h-[15rem] ml-[-2rem] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
          >
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
              direction={"rtl"}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              className="fill-blue-500 opacity-75"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              className="fill-dark dark:opacity-50"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card> 
   </div>
  </div>
  )
}

export default DashboardAreaChart