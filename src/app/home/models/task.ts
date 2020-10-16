export class Task {
    id: number = Date.now();
    title: string;
    status = false;
    dueDate?: number; // ? = pour dire pas obligatoire
}
