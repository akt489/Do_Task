import React, { useState } from "react";
import BackBtn from "../components/BackBtn";

function TasksPage() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const addTask = () => {
        if (!input.trim()) return;

        const newTask = {
            id: Date.now(),
            text: input,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInput("");
    };

    // ❌ Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // ✔️ Toggle Complete
    const toggleTask = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    // ✏️ Start Edit
    const startEdit = (task) => {
        setEditId(task.id);
        setEditText(task.text);
    };

    // 💾 Save Edit
    const saveEdit = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id
                    ? { ...task, text: editText }
                    : task
            )
        );
        setEditId(null);
        setEditText("");
    };

    // 🔍 Filter tasks
    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "done") return task.completed;
        return true;
    });

    const styles = {
        page: {
            minHeight: "100vh",
            background: "#f5f7fb",
            padding: "30px",
            fontFamily: "sans-serif"
        },
        container: {
            maxWidth: "700px",
            margin: "auto"
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px"
        },
        inputBox: {
            display: "flex",
            gap: "10px",
            marginBottom: "20px"
        },
        input: {
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
        },
        button: {
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
        },
        filters: {
            display: "flex",
            gap: "10px",
            marginBottom: "20px"
        },
        filterBtn: {
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer"
        },
        task: {
            background: "white",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
        },
        left: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
        },
        text: (completed) => ({
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "gray" : "black"
        }),
        actionBtn: {
            marginLeft: "8px",
            cursor: "pointer",
            border: "none",
            background: "transparent"
        }
    };

    return (
        <div style={styles.page}>
            <BackBtn />
            <div style={styles.container}>

                <div style={styles.title}>📋 Tasks</div>

                {/* Input */}
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        value={input}
                        placeholder="Add new task..."
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button style={styles.button} onClick={addTask}>
                        Add
                    </button>
                </div>

                {/* Filters */}
                <div style={styles.filters}>
                    <button onClick={() => setFilter("all")} style={styles.filterBtn}>All</button>
                    <button onClick={() => setFilter("active")} style={styles.filterBtn}>Active</button>
                    <button onClick={() => setFilter("done")} style={styles.filterBtn}>Done</button>
                </div>

                {/* Task List */}
                {filteredTasks.map(task => (
                    <div key={task.id} style={styles.task}>

                        <div style={styles.left}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />

                            {editId === task.id ? (
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <span style={styles.text(task.completed)}>
                                    {task.text}
                                </span>
                            )}
                        </div>

                        <div>
                            {editId === task.id ? (
                                <button
                                    style={styles.actionBtn}
                                    onClick={() => saveEdit(task.id)}
                                >
                                    💾
                                </button>
                            ) : (
                                <button
                                    style={styles.actionBtn}
                                    onClick={() => startEdit(task)}
                                >
                                    ✏️
                                </button>
                            )}

                            <button
                                style={styles.actionBtn}
                                onClick={() => deleteTask(task.id)}
                            >
                                ❌
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default TasksPage;