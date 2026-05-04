import React, { useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

function Homepage() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Study C++", done: false },
        { id: 2, title: "Workout", done: false },
        { id: 3, title: "Read Book", done: false },
    ]);

    const [newTask, setNewTask] = useState("");

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completed = tasks.filter(t => t.done).length;
    const progress = Math.round((completed / tasks.length) * 100);

    const styles = {
        container: {
            padding: "25px",
            maxWidth: "850px",
            margin: "auto",
        },
        hero: {
            background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
        addInput: {
            width: "97%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "10px",
        },
        addBtn: {
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #4CAF50, #66BB6A)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "20px",
            fontWeight: "bold",
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        },
        deleteBtn: {
            marginLeft: "auto",
            background: "transparent",
            border: "none",
            color: "#E53935",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
        },
        progressBar: {
            height: "10px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "10px",
        },
        progressFill: {
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #4CAF50, #81C784)",
            transition: "0.3s ease",
        },
        viewBtn: {
            display: "inline-block",
            color: "#2E7D32",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "10px",
            fontWeight: "bold",
        },
        taskItem: {
            display: "flex",
            alignItems: "center",
            padding: "8px 0",
            borderBottom: "1px solid #eee",
        }
    };

    return (
        <div>
            <Header />

            <div style={styles.container}>

                {/* HERO SECTION */}
                <div style={styles.hero}>
                    <h2>Welcome back 👋</h2>
                    <p>You’ve completed {progress}% of your weekly tasks</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                    {tasks.map(task => (
                        <div
                            key={task.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                borderRadius: "8px",
                                backgroundColor: task.done ? "#f5f5f5" : "#fff",
                                border: "1px solid #eee",
                                transition: "0.2s ease"
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleTask(task.id)}
                            />

                            <span style={{
                                marginLeft: "10px",
                                textDecoration: task.done ? "line-through" : "none",
                                color: task.done ? "#999" : "#222",
                                fontWeight: "500"
                            }}>
                                {task.title}
                            </span>
                            <button style={styles.deleteBtn} onClick={() => deleteTask(task.id)}>del</button>
                        </div>
                    ))}

                </div>

                {/* ADD TASK */}
                <div style={{ marginTop: "20px" }}>
                    <input type="text" value={newTask} placeholder="New task..." style={styles.addInput} onChange={(e) => setNewTask(e.target.value)} />

                    <button style={styles.addBtn} onClick={() => {
                        if (newTask.trim() !== "") {
                            setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
                            setNewTask("");
                        }
                    }} >
                        + Add Task
                    </button>
                </div>

            </div>
        </div >
    );
}

export default Homepage;
