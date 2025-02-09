import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Alert} from "@heroui/alert";
import { AppDispatch, RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { Puff } from "react-loader-spinner";
import { useEffect } from "react";
import { deleteMember, getUsers } from "@/stores/features/users";

function UserBox() {
  const loading = useSelector((state: RootState) => state.users.isLoading);
  const dispatch: AppDispatch = useDispatch();
  const members = useSelector((state: RootState) => state.users.usersData);

  useEffect(() => {
    dispatch(getUsers("members"));
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5 flex items-center justify-center">
        <Puff
          visible={true}
          height="40"
          width="40"
          color="#3B82F6"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      {!members.length ? (
       <Alert color="danger" title="No members exit !"/>
      ) : (
        <div className="mt-2 overflow-hidden dark:border-gray-600 shadow-lg">
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
              {members.map((memebr, i) => (
                <TableRow
                  className="border child:px-4 child:py-5 border-gray-300 dark:border-gray-600"
                  key={memebr.id}
                >
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="text-left">{memebr.name}</TableCell>
                  <TableCell className="text-left">{memebr.email}</TableCell>
                  <TableCell className="text-left w-[130px]">
                    {memebr.phone}
                  </TableCell>
                  <TableCell className="text-center w-[120px]">
                    {memebr.wallet === "0" ? (
                      <div className="text-left w-[5rem] text-red-500 font-medium">
                        No Balance
                      </div>
                    ) : (
                      <div className="text-left text-green-500 font-medium">
                        {memebr.wallet}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-left">{memebr.date}</TableCell>
                  <TableCell className="text-left w-[60px]">
                    {memebr.role === "USER" ? (
                      <span className="font-Kalame text-green-400">User</span>
                    ) : (
                      <span className="font-Kalame text-red-500">Admin</span>
                    )}
                  </TableCell>
                  <TableCell className="text-left flex items-center justify-center gap-3 child:cursor-pointer">
                    <BsPencil className="text-yellow-500" />
                    <RiDeleteBin6Line onClick={() => dispatch(deleteMember(memebr.id))} className="text-red-500 cursor-pointer" />
                    <MdOutlineMoreHoriz className="text-blue-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}

export default UserBox