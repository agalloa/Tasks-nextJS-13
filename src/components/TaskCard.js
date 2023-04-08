import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

//Component
import { useTask } from "@/context/TasksContext";

export const TaskCard = ({ task }) => {
  const router = useRouter();

  const { deleteTask } = useTask();
  return (
    <div
      className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2 "
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <p>{task.title}</p>
        <button
        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            const alertDeleteTask = window.confirm(
              "Are you sure you want to delete this task"
            );
            if (alertDeleteTask) {
              deleteTask(task.id);
              toast.success("Task deleted successfully");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
};
