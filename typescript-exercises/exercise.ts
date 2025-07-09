// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string; 
    description: string; 
    dueDate: Date;
}

enum Priority {
    LOW, 
    MEDIUM,
    HIGH
}

interface TaskPriority extends Task {
    priority: Priority;
}
// Create your task below:

const task: TaskPriority = {
    priority: Priority.LOW,
    id: 1,
    title: "Hi",
    description: "hi",
    dueDate: new Date()
};

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);