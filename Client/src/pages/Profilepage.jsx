import React from "react";

export default function ProfilePage() {
    const user = {
        name: "Abraham Tilahun",
        username: "abraham_dev",
        avatar: "https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg?nii=t",
        stats: {
            tasksCompleted: 120,
            streak: 7,
            productivity: "85%"
        }
    };

    const styles = {
        container: {
            maxWidth: "900px",
            margin: "auto",
            padding: "20px",
            fontFamily: "sans-serif"
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
            border: "3px solid #4CAF50"
        },
        name: {
            fontSize: "22px",
            fontWeight: "bold"
        },
        username: {
            color: "gray"
        },
        statsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            marginTop: "20px"
        },
        statCard: {
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
        },
        statValue: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#4CAF50"
        },
        section: {
            marginTop: "30px"
        },
        sectionTitle: {
            fontSize: "18px",
            marginBottom: "10px",
            fontWeight: "600"
        },
        activityItem: {
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px",
            boxShadow: "0 1px 5px rgba(0,0,0,0.05)"
        }
    };

    return (
        <div style={styles.container}>
            {/* Profile Header */}
            <div style={styles.header}>
                <img src={user.avatar} alt="avatar" style={styles.avatar} />
                <div>
                    <div style={styles.name}>{user.name}</div>
                    <div style={styles.username}>@{user.username}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <div style={styles.statValue}>{user.stats.tasksCompleted}</div>
                    <div>Tasks Completed</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statValue}>{user.stats.streak}</div>
                    <div>Day Streak</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statValue}>{user.stats.productivity}</div>
                    <div>Productivity</div>
                </div>
            </div>

            {/* Recent Activity */}
            <div style={styles.section}>
                <div style={styles.sectionTitle}>Recent Activity</div>
                <div style={styles.activityItem}>Completed "Study C++"</div>
                <div style={styles.activityItem}>Completed "Workout"</div>
                <div style={styles.activityItem}>Added "Read Book"</div>
            </div>
        </div>
    );
}