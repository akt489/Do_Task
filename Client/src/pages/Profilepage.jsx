import React from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";

export default function ProfilePage() {
    const user = {
        name: "Abraham Tilahun",
        username: "abraham_dev",
        avatar: "https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg",
        stats: {
            tasksCompleted: 120,
            streak: 7,
            productivity: "85%"
        }
    };

    const navigate = useNavigate();

    const styles = {
        page: {
            minHeight: "100vh",
            background: "#f5f7fb",
            padding: "30px 15px",
            fontFamily: "sans-serif"
        },
        container: {
            maxWidth: "900px",
            margin: "auto"
        },
        card: {
            background: "#fff",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
        },
        header: {
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px"
        },
        avatar: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #4CAF50",
        },
        name: {
            fontSize: "24px",
            fontWeight: "700"
        },
        username: {
            color: "#777"
        },
        editBtn: {
            marginLeft: "auto",
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "#fff",
            cursor: "pointer"
        },
        statsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
            marginTop: "20px"
        },
        statCard: {
            background: "#f9fafc",
            padding: "18px",
            borderRadius: "12px",
            textAlign: "center",
            transition: "0.2s"
        },
        statValue: {
            fontSize: "22px",
            fontWeight: "bold",
            color: "#4CAF50"
        },
        section: {
            marginTop: "30px"
        },
        sectionTitle: {
            fontSize: "18px",
            marginBottom: "12px",
            fontWeight: "600"
        },
        activityItem: {
            background: "#fff",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        badge: {
            fontSize: "12px",
            padding: "4px 8px",
            borderRadius: "6px",
            background: "#e8f5e9",
            color: "#4CAF50"
        }
    };

    return (
        <div style={styles.page}>
            <BackBtn />
            <div style={styles.container}>

                {/* Profile Card */}
                <div style={styles.card}>
                    <div style={styles.header}>
                        <img src={user.avatar} alt="avatar" style={styles.avatar} />
                        <div>
                            <div style={styles.name}>{user.name}</div>
                            <div style={styles.username}>@{user.username}</div>
                        </div>
                        <button style={styles.editBtn} onClick={() => navigate("/editpage")}>Edit</button>
                    </div>

                    {/* Stats */}
                    <div style={styles.statsGrid}>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>{user.stats.tasksCompleted}</div>
                            <div>Tasks</div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>{user.stats.streak}</div>
                            <div>Streak 🔥</div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>{user.stats.productivity}</div>
                            <div>Productivity</div>
                        </div>
                    </div>
                </div>

                {/* Activity Section */}
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Recent Activity</div>

                    <div style={styles.activityItem}>
                        Completed "Study C++"
                        <span style={styles.badge}>Done</span>
                    </div>

                    <div style={styles.activityItem}>
                        Completed "Workout"
                        <span style={styles.badge}>Done</span>
                    </div>

                    <div style={styles.activityItem}>
                        Added "Read Book"
                        <span style={styles.badge}>New</span>
                    </div>
                </div>

            </div>
        </div>
    );
}