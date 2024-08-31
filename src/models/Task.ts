class Task {
    private id: string;
    private task: string;

    public constructor(id: string, task: string) {
        this.id = id;
        this.task = task;
    }

    public getId() {
        return this.id;
    }

    public getTask() {
        return this.task;
    }

    public setId(id: string) {
        this.id = id;
    }

    public setTask(task: string) {
        this.task = task;
    }
}

export default Task;