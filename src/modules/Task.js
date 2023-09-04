export default class Task {
    constructor(title, desc, dueDate, createdAt, isComplete, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.createdAt = createdAt;
        this.isComplete = isComplete;
        this.priority = priority;
    }
}
