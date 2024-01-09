import todo from "./components/todo.js";

const { createApp, ref } = Vue;
const app = Vue.createApp({
  name: "Todos",
  setup() {
    const todos = ref([]);
    const newTodo = ref({
      title: "",
      finished: false,
    });

    const showNotification = ref(false);
    const showError = ref(false);

    // ---- Mettre la valeur dans le localStorage ----//
    if (localStorage.todos) {
      todos.value = JSON.parse(localStorage.todos);
    }
    // ---- Ajouter une tâche ----//
    const addTask = () => {
      if (!newTodo.value.title.trim()) {
        //alert("Entrez une Tâche");
        showError.value = true;
        setTimeout(() => {
          showError.value = false;
        }, 1000);
        return;
      } else {
        todos.value.push({ ...newTodo.value });
        localStorage.todos = JSON.stringify(todos.value);
        newTodo.value.title = "";
      }
    };

    // ---- Notification A terminé/A faire ----//
    const taskFinished = (todo) => {
      todo.finished = !todo.finished;
      localStorage.todos = JSON.stringify(todos.value);
    };
    // ---- supprimé une tâche ----//
    const deleteTask = (index) => {
      todos.value.splice(index, 1);
      localStorage.todos = JSON.stringify(todos.value);

      // Afficher la notification
      showNotification.value = true;

      // Masquer la notification après un certain délai (par exemple, 3 secondes)
      setTimeout(() => {
        showNotification.value = false;
      }, 1000);
    };
    return {
      todos,
      newTodo,
      addTask,
      taskFinished,
      deleteTask,
      showNotification,
      showError,
    }; //fin return
  }, //fin setup
  components: {
    todo,
  },
});
app.mount("#app");
