document.addEventListener("DOMContentLoaded", () => {
  // menambahkan format tahun yy-mm-ddd untuk createdAt
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const TaskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      createdAt: `${year}-${month}-${day}`,
    };

    const result = taskManager.saveTask(TaskData);

    if (result.success) {
    //   alert("berhasil tersimpan");
      return (window.location.href = "../tasks.html");
    } else {
      console.log("gagal save");
    }

    // console.log("berhasil submit");
  });
});
