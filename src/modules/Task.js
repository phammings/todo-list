export default class Task {
    constructor(title, desc, dueDate, createdAt, isComplete, priority, note) {
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._createdAt = createdAt;
        this._isComplete = isComplete;
        this._priority = priority;
        this._note = note;
    }
    // Getter and Setter for Title
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    // Getter and Setter for Description
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    // Getter and Setter for Due Date
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    // Getter and Setter for Created At
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    // Getter and Setter for Is Complete
    get isComplete() {
        return this._isComplete;
    }
    set isComplete(value) {
        this._isComplete = value;
    }
    // Getter and Setter for Priority
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    // Getter and Setter for Note
    get note() {
        return this._note;
    }
    set note(value) {
        this._note = value;
    }
}
