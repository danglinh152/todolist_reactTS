class Task {
    private id: number;
    private task: string;

    public constructor(id: number, task: string) {
        this.id = id;
        this.task = task;
    }

    public getId() {
        return this.id;
    }

    public getTask() {
        return this.task;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setTask(task: string) {
        this.task = task;
    }
}

export default Task;