export class Todo {
    id: number;
    text: string;
    completed: boolean;

    constructor(text: string){
        this.text = text;
        this.id = Math.floor(Math.random() * 500);;
        this.completed = false;
    }
}