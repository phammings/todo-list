export default class Task {
    title!: string;
    desc !: string;
    dueDate !: Date;
    createdAt !: Date;
    isComplete !: boolean;
    priority !: string;
    
    constructor(title: string, desc: string, dueDate: Date, createdAt: Date, isComplete: boolean, priority: string) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.createdAt = createdAt;
        this.isComplete = isComplete;
        this.priority = priority;
    }
    

}
