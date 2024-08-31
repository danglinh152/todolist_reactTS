import React, { useState } from "react";
import Task from "../models/Task";
import TaskComponent from "./taskComponent";

const TaskTable: React.FC = function () {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState<string>('');

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    }

    const TaskUp = () => {
        if (taskInput.trim() !== "") {
            const newTask = new Task(Date(), taskInput);
            setTaskList([...taskList, newTask]);
            setTaskInput('');
        }
    }


    const onDone = (id: string) => {
        for (let i: number = 0; i < taskList.length; i++) {
            if (taskList[i].getId() === id) {
                taskList[i].setTask('Done');
            }
        }
        setTaskList([...taskList]);
    }

    const onDelete = (id: string) => {
        const updatedCountList = taskList.filter(task => {
            return task.getId() !== id;
        })
        setTaskList(updatedCountList);
    }

    return (
        <div className="counter container-lg">
            <input type="text" name="" id="" className="form-control" placeholder="Nhập công việc" value={taskInput} onChange={handleTaskInputChange} />
            <button className="btn btn-primary mt-3" onClick={TaskUp} > Add task </button>
            <table className="table table-bordered table-striped mt-3">
                <thead>
                    <tr>
                        <th className="col-lg-4">ID</th>
                        <th className="col-lg-6">Giá Trị</th>
                        <th className="col-lg-2"></th>
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