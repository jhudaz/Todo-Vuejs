const vue = new Vue({
  el: "#app",
  data: {
    title: "TODO's",
    tasks: [],
    newTask: "",
  },
  methods: {
    addTask() {
      this.tasks.push({
        name: this.newTask,
        state: false,
      });
      this.newTask = "";
      this.storage();
    },
    editTask(index) {
      this.tasks[index].state = true;
      this.storage();
    },
    deleteTask(index) {
      console.log("delte");
      this.tasks.splice(index, 1);
      this.storage();
    },
    storage() {
      localStorage.setItem('todo-vue', JSON.stringify(this.tasks))
    }
  },
  created(){
    let data = JSON.parse(localStorage.getItem('todo-vue'))
     if (data === null) {
       this.tasks = [];
     } else {
       this.tasks = data;
     }
  }
});
