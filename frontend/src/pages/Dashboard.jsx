import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      alert("Please login first");
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", form);
      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (error) {
      alert("Could not add task");
    }
  };

  const toggleComplete = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      completed: !task.completed
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <form onSubmit={addTask}>
        <input
          name="title"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Task description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task" key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              Status:{" "}
              <b>{task.completed ? "Completed" : "Pending"}</b>
            </p>

            <button onClick={() => toggleComplete(task)}>
              {task.completed ? "Mark Pending" : "Mark Completed"}
            </button>

            <button className="delete-btn" onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
