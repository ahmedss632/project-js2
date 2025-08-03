  let tasks = [
    { title: 'Go for a Walk', time: '10:37AM, 17/04/2024', done: true },
    { title: 'Read a Book', time: '08:28AM, 18/04/2024', done: true },
    { title: 'Try a New Recipe', time: '05:07PM, 18/04/2024', done: false },
    { title: 'Practice Meditation or Mindfulness', time: '05:54PM, 18/04/2024', done: false },
  ];

  function renderTasks() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      taskList.innerHTML += `
    
     <div class="task-item">
          <div>
            <strong>${task.title}</strong><br>
            <small>${task.time}</small>
          </div>
          <button class="btn btn-sm ${task.done ? 'btn-success' : 'btn-outline-secondary'}" onclick="toggleTask(${index})">
            ${task.done ? '✓' : ''}
          </button>
        </div>
        
      `;
    });
  }

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const title = taskInput.value.trim();
    if (title) {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", " + now.toLocaleDateString();
      tasks.push({ title, time, done: false });
      taskInput.value = "";
      renderTasks();
    }
  }

  function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
  }

  renderTasks();