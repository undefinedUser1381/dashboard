import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import logo1 from "../../assets/images/logos/brand-01.svg";
import logo2 from "../../assets/images/logos/brand-02.svg";
import logo3 from "../../assets/images/logos/brand-03.svg";
import logo4 from "../../assets/images/logos/brand-04.svg";
import logo5 from "../../assets/images/logos/brand-05.svg";

function TopChannel() {
  interface TableData {
    source: string;
    visitors: string;
    revenues: string;
    sales: string;
    conversion: string;
  }

  const invoices: TableData[] = [
    {
      source: logo1,
      visitors: "3.5K",
      revenues: "$250.00",
      sales: "Credit Card",
      conversion: "4.8%",
    },
    {
      source: logo2,
      visitors: "2.2K",
      revenues: "$150.00",
      sales: "PayPal",
      conversion: "4.8%",
    },
    {
      source: logo3,
      visitors: "2.1K",
      revenues: "$350.00",
      sales: "Bank Transfer",
      conversion: "4.8%",
    },
    {
      source: logo4,
      visitors: "1.5K",
      revenues: "$450.00",
      sales: "Credit Card",
      conversion: "4.8%",
    },
    {
      source: logo5,
      visitors: "3.5K",
      revenues: "$550.00",
      sales: "PayPal",
      conversion: "4.8%",
    },
  ];

  return (
    <div className="dark:bg-dark h-[100%] shadow-lg bg-[#FFFFFF] mt-8 w-full xl:w-[68%] xl:mt-6 p-5">
      <h3 className="font-medium text-[1rem] text-black mb-5 dark:text-white">
        Top Channels
      </h3>
      <div className="mt-3">
        <Table className="h-[16rem]">
          <TableHeader className="dark:bg-[#313D4A] bg-[#F7F9FC]">
            <TableRow className="border-none">
              <TableHead className="w-[100px] text-center">SOURCE</TableHead>
              <TableHead className="p-5 text-center">VISITORS</TableHead>
              <TableHead className="p-5 text-center">REVENUES</TableHead>
              <TableHead className="text-center">SALES</TableHead>
              <TableHead className="text-center">CONVERSION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                className="border-none font-normal text-white"
                key={invoice.source}
              >
                <TableCell className="text-center text-black dark:text-white font-normal p-6">
                  <div className="w-16 h-12">
                    <img src={invoice.source} className="w-full h-full" />
                  </div>
                </TableCell>
                <TableCell className="font-normal text-black dark:text-white p-6 text-center">
                  {invoice.visitors}
                </TableCell>
                <TableCell className="text-center text-green-400 font-normal p-6">
                  {invoice.revenues}
                </TableCell>
                <TableCell className="text-center text-black dark:text-white font-normal p-6">
                  {invoice.sales}
                </TableCell>
                <TableCell className="text-center text-blue-500 font-normal p-6">
                  {invoice.conversion}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TopChannel;
