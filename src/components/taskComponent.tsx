import React, { useState } from "react";
import Task from "../models/Task";

interface taskInterface {
    task: Task;
    onDone: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskComponent: React.FC<taskInterface> = function ({ task, onDone, onDelete }) {
    const [isDone, setIsDone] = useState(false);

    const handleDone = () => {
        onDone(task.getId());
        setIsDone(true); // Cập nhật trạng thái khi hoàn thành
    }

    const handleDelete = () => {
        onDelete(task.getId());
    }

    return (
        <tr>
            <td style={{ backgroundColor: isDone ? 'lightgreen' : 'transparent' }}>
                {task.getId()}
            </td>
            <td style={{ backgroundColor: isDone ? 'lightgreen' : 'transparent' }}>
                {task.getTask()}
            </td>
            <td>
                <div>
                    <button onClick={handleDone}><i className="fa-solid fa-check"></i></button>
                    <button onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    );
}

export default TaskComponent;