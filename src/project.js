export class Project {
    constructor(name, id = crypto.randomUUID(), todos = [] ) {
        this.id =id;
        this.name= name;
        this.todos = todos;
    }
    addTodo (todo){
        this.todos.push(todo);
    }

    removeTodo(todoId){
        this.todos =  this.todos.filter((todo) => todo.id !== todo.Id);
    }

    findTodo(todoId){
      return this.todos.find((todo) => todo.id === todoId);
    }
}