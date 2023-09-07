export default class Task {
        private _title: string;
        private _desc: string;
        private _dueDate: Date;
        private _createdAt: Date;
        private _isComplete: boolean;
        private _priority: string;
        private _note: string;
    
        constructor(
            title: string,
            desc: string,
            dueDate: Date,
            createdAt: Date,
            isComplete: boolean,
            priority: string,
            note: string
        ) {
            this._title = title;
            this._desc = desc;
            this._dueDate = dueDate;
            this._createdAt = createdAt;
            this._isComplete = isComplete;
            this._priority = priority;
            this._note = note;
        }
    
        // Getter and Setter for Title
        get title(): string {
            return this._title;
        }
        set title(value: string) {
            this._title = value;
        }
    
        // Getter and Setter for Description
        get desc(): string {
            return this._desc;
        }
        set desc(value: string) {
            this._desc = value;
        }
    
        // Getter and Setter for Due Date
        get dueDate(): Date {
            return this._dueDate;
        }
        set dueDate(value: Date) {
            this._dueDate = value;
        }
    
        // Getter and Setter for Created At
        get createdAt(): Date {
            return this._createdAt;
        }
        set createdAt(value: Date) {
            this._createdAt = value;
        }
    
        // Getter and Setter for Is Complete
        get isComplete(): boolean {
            return this._isComplete;
        }
        set isComplete(value: boolean) {
            this._isComplete = value;
        }
    
        // Getter and Setter for Priority
        get priority(): string {
            return this._priority;
        }
        set priority(value: string) {
            this._priority = value;
        }
    
        // Getter and Setter for Note
        get note(): string {
            return this._note;
        }
        set note(value: string) {
            this._note = value;
        }
    }
    
    

    
    


