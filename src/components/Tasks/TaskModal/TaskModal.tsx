import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useSelector , useDispatch } from "react-redux"
import { RootState , AppDispatch} from "@/stores/store"
import { Button } from "@heroui/button";
import { closeModal } from "@/stores/features/taskmodal";

function TaskModal() {

  const isOpenModal = useSelector((state : RootState) => state.taskModal.isOpenModal)
  const dispatch : AppDispatch = useDispatch()

  return (
    <Modal isOpen={isOpenModal} className="bg-[#24303F] text-white" size={"xl"}>
      <ModalContent>
          <ModalHeader onClick={() => dispatch(closeModal())} className="flex flex-col gap-1">Add Task</ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <input className="w-full p-2 outline-none border focus:border-blue-500 transition-all bg-transparent" placeholder="Task ..." type="text" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => dispatch(closeModal())} className="rounded-none bg-red-600 text-white">
              Close
            </Button>
            <Button className="rounded-none bg-blue-600 text-white">
              Add
            </Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TaskModal;
