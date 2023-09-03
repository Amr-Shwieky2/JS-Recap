let CLI = {
    ToDo : [],
    
    AddTasks : function(task,  complete = "No"){
        this.ToDo.push({ task, complete });
    },

    DisplayTasks : function(){
        console.log(this.ToDo);
    },
    
    DeleteTasks : function(task){
        const index = this.ToDo.findIndex(item => item.task === task);
        if(index != -1){
            this.ToDo.splice(index, 1);
        }
    },

    CompleteTasks : function(task){
        const taskCLT = this.ToDo.find(item => item.task === task);
        if(taskCLT){
            taskCLT.complete = "completed";
        }
    },

    SearchTasks: function(keyword){
        const matchingTasks =  this.ToDo.filter(item => item.task.includes(keyword))
        return matchingTasks
    }
};

CLI.AddTasks("Task 1");
CLI.AddTasks("Task 2");
CLI.DisplayTasks();

CLI.CompleteTasks("Task 1");
// CLI.DisplayTasks();



CLI.AddTasks("Buy groceries");
CLI.AddTasks("Write code");
CLI.AddTasks("Read a book");
CLI.AddTasks("Buy milk");

const matchingTasks = CLI.SearchTasks("Buy");

// console.log(matchingTasks);

CLI.DeleteTasks("Task 2");
CLI.DisplayTasks();
