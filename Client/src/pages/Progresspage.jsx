import React from "react";
import BackBtn from "../components/BackBtn";

export default function ProgressPage() {
    const data = {
        weekCompleted: 12,
        previousWeek: 10,
        completionRate: 78,
        streak: 7,
        weeklyData: [3, 5, 2, 6, 4, 8, 7] // Mon–Sun
    };

    const change = data.weekCompleted - data.previousWeek;
    const percentChange = ((change / data.previousWeek) * 100).toFixed(1);

    const styles = {
        page: {
            minHeight: "100vh",
            background: "#f5f7fb",
            padding: "30px",
            fontFamily: "sans-serif"
        },
        container: {
            maxWidth: "900px",
            margin: "auto"
        },
        header: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "25px"
        },
        card: {
            background: "#fff",
            padding: "20px",
            borderRadius: "14px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
        },
        bigNumber: {
            fontSize: "26px",
            fontWeight: "bold",
            color: "#4CAF50"
        },
        label: {
            color: "#666",
            marginTop: "5px"
        },
        chart: {
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
            height: "200px",
            padding: "20px",
            background: "#fff",
            borderRadius: "14px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
        },
        bar: {
            flex: 1,
            background: "#4CAF50",
            borderRadius: "6px 6px 0 0",
            transition: "0.3s"
        },
        dayLabel: {
            textAlign: "center",
            fontSize: "12px",
            marginTop: "5px",
            color: "#777"
        },
        summary: {
            marginTop: "20px",
            padding: "20px",
            background: "#fff",
            borderRadius: "14px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
        },
        highlight: {
            color: "#4CAF50",
            fontWeight: "bold"
        }
    };

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const maxValue = Math.max(...data.weeklyData);

    return (
        <div style={styles.page}>
            <BackBtn />
            <div style={styles.container}>

                {/* Title */}
                <div style={styles.header}>📊 Progress & Analytics</div>

                {/* Stats */}
                <div style={styles.grid}>
                    <div style={styles.card}>
                        <div style={styles.bigNumber}>
                            {data.weekCompleted}
                        </div>
                        <div style={styles.label}>Tasks Completed (This Week)</div>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.bigNumber}>
                            {data.completionRate}%
                        </div>
                        <div style={styles.label}>Completion Rate</div>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.bigNumber}>
                            🔥 {data.streak}
                        </div>
                        <div style={styles.label}>Day Streak</div>
                    </div>
                </div>

                {/* Chart */}
                <div style={styles.chart}>
                    {data.weeklyData.map((value, index) => (
                        <div key={index} style={{ flex: 1 }}>
                            <div style={{ ...styles.bar, height: `${(value / maxValue) * 100}%` }}></div>
                            <div style={styles.dayLabel}>{days[index]}</div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={styles.summary}>
                    You completed{" "}
                    <span style={styles.highlight}>
                        {data.weekCompleted} tasks
                    </span>{" "}
                    this week (
                    <span style={styles.highlight}>
                        {change > 0 ? "+" : ""}
                        {percentChange}%
                    </span>
                    {" "}compared to last week).
                </div>

            </div>
        </div>
    );
}