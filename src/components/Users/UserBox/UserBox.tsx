import UserImg from "../../../assets/images/profile/cover-01.webp"
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { User } from "@/interfaces/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function UserBox() {
  const users : User[] = [
    {
      id : "1",
      row: "1",
      userName: "Ali",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "66,000",
      date: "1403/6/5",
      role: "Admin",
    },
    {
      id: "2",
      row: "2",
      userName: "Hossein",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "0",
      date: "1403/6/5",
      role: "User",
    },
    {
      id: "3",
      row: "3",
      userName: "Ali",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "0",
      date: "1403/6/5",
      role: "User",
    },
    {
      id: "4",
      row: "4",
      userName: "Mammad",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "89,900",
      date: "1403/6/5",
      role: "User",
    },
    {
      id: "5",
      row: "5",
      userName: "Ali",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "235,000",
      date: "1403/6/5",
      role: "User",
    },
    {
      id: "6",
      row: "6",
      userName: "Hassan",
      email: "ali@gmail.com",
      phone: "0976778987",
      wallet: "235,000",
      date: "1403/6/5",
      role: "User",
    },
  ];


  return (
    <div className="border mt-2 overflow-hidden dark:border-gray-600 shadow-lg">
    <Table className="overflow-scroll font-medium lg:overflow-hidden border dark:border-gray-700">
      <TableHeader className="bg-white text-black dark:bg-[#24303F] dark:text-white">
        <TableRow className="font-Kalame text-[0.9rem] border-gray-300 dark:border-gray-600 *:p-4 lg:text-[1rem]">
          <TableHead className="text-[1rem] w-[80px] text-center">
             Row
          </TableHead>
          <TableHead className="text-left">User</TableHead>
          <TableHead className="text-left">Email</TableHead>
          <TableHead className="text-left">Phone</TableHead>
          <TableHead className="text-left">Wallet</TableHead>
          <TableHead className="text-left">Date</TableHead>
          <TableHead className="text-left">Role</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white text-black font-Kalame text-center dark:bg-[#24303F] dark:text-white">
        {users.map((invoice) => (
          <TableRow
            className="border child:px-4 child:py-5 border-gray-300 dark:border-gray-600"
            key={invoice.row}
          >
            <TableCell className="font-medium">{invoice.row}</TableCell>
            <TableCell className="text-left">{invoice.userName}</TableCell>
            <TableCell className="text-left">{invoice.email}</TableCell>
            <TableCell className="text-left w-[130px]">
              {invoice.phone}
            </TableCell>
            <TableCell className="text-center w-[120px]">
              {invoice.wallet === "0" ? (
                <div className="text-left w-[5rem] text-red-500 font-medium">
                  No Balance
                </div>
              ) : (
                <div className="text-left text-green-500 font-medium">
                  {invoice.wallet}
                </div>
              )}
            </TableCell>
            <TableCell className="text-left">{invoice.date}</TableCell>
            <TableCell className="text-left w-[60px]">
              {invoice.role === "User" ? (
                <span className="font-Kalame text-green-400">User</span>
              ) : (
                <span className="font-Kalame text-red-500">Admin</span>
              )}
            </TableCell>
            <TableCell className="text-left flex items-center justify-center gap-3 child:cursor-pointer">
              <BsPencil className="text-yellow-500"/>
              <RiDeleteBin6Line className="text-red-500"/>
              <MdOutlineMoreHoriz className="text-blue-500"/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default UserBox
