import React, { useState } from "react";
import Task from "../models/Task";
import TaskComponent from "./taskComponent";

const TaskTable: React.FC = function () {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const TaskUp = () => {
        const newTask = new Task(Date.now(), String(taskList.length + 1));
        setTaskList([...taskList, newTask]);
    }

    const onDone = (id: number) => {
        for (let i: number = 0; i < taskList.length; i++) {
            if (taskList[i].getId() === id) {
                taskList[i].setTask('Done');
            }
        }
        setTaskList([...taskList]);
    }

    const onDelete = (id: number) => {
        const updatedCountList = taskList.filter(task => {
            return task.getId() !== id;
        })
        setTaskList(updatedCountList);
    }

    return (
        <div className="counter container-lg">
            <button className="btn btn-primary" onClick={TaskUp}> Click me </button>
            <table className="table table-bordered table-striped mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Giá Trị</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // countList.map(count => (
                        //     <CountItem key={count.getId()} count={count} />
                        // ))
                        taskList.map(task => {
                            return <TaskComponent key={task.getId()} task={task} onDone={onDone} onDelete={onDelete} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable; 