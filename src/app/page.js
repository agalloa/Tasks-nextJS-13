"use client";

import { TaskCard } from "@/components/TaskCard";
import { useTask } from "@/context/TasksContext"

const Page = () => {

  const {tasks} = useTask();

  return (
    <div className="flex justify-center">
      <div className="w-7/12  ">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default Page