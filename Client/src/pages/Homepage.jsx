import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Homepage() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Study C++", done: false },
        { id: 2, title: "Workout", done: false },
        { id: 3, title: "Read Book", done: false },
    ]);

    const [newTask, setNewTask] = useState("");
    const navigate = useNavigate();

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
            top: "120px",
            position: "relative",
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
        settinBtn: {
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        },
        settingImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
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

    const image = {
        setting: "data:image/png;base64,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"
    }
    return (
        <div>
            <Header />
            <Sidebar />

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
            <button style={styles.settinBtn}
                onClick={() => navigate("/settings")}>
                <img style={styles.settingImg} src={image.setting} />
            </button>
        </div >
    );
}

export default Homepage;
