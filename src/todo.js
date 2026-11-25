export class Todo {
    constructor({
        id = crypto.randomUUID(),
        title, 
        description = "", 
        dueDate = null, 
        priority = "low", 
        completed = false,
        notes = "", 
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.notes = notes;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }

    updateDetails({title, description, dueDate, priority, completed, notes}){
        if(title !== undefined) this.title = title;
        if(description !== undefined) this.description = description;
        if(dueDate !== undefined) this.dueDate = dueDate;
        if(priority !== undefined) this.priority = priority;
        if(completed !== undefined) this.completed = completed;
        if(notes !== undefined) this.notes = notes;
    }
}