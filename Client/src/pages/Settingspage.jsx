import { useState } from "react";
import BackBtn from "../components/BackBtn";

function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [open, setOpen] = useState(false);

    const styles = {
        container: {
            padding: "20px",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "Arial",
        },
        section: {
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
            color: darkMode ? "white" : "black",
        },
        title: {
            fontSize: "20px",
            marginBottom: "10px",
        },
        row: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px 0",
        },
        button: {
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
    };

    return (
        <div>
            <BackBtn />
            <div style={styles.container}>
                <h1>Settings</h1>

                {/* Theme Settings */}
                <div style={styles.section}>
                    <div style={styles.title}>Appearance</div>

                    <div style={styles.row}>
                        <span>Dark Mode</span>
                        <button
                            style={{
                                ...styles.button,
                                backgroundColor: darkMode ? "#444" : "#ddd",
                                color: darkMode ? "white" : "black",
                            }}
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? "Disable" : "Enable"}
                        </button>
                    </div>
                </div>

                {/* Notification Settings */}
                <div style={styles.section}>
                    <div style={styles.title}>Notifications</div>

                    <div style={styles.row}>
                        <span>Enable Notifications</span>
                        <button
                            style={{
                                ...styles.button,
                                backgroundColor: notifications ? "green" : "gray",
                                color: "white",
                            }}
                            onClick={() => setNotifications(!notifications)}
                        >
                            {notifications ? "On" : "Off"}
                        </button>
                    </div>
                </div>

                {/* Account Settings */}
                <div style={styles.section}>
                    <div style={styles.title}>Account</div>

                    <div style={styles.row}>
                        <span>Change Password</span>
                        <button style={styles.button}>Edit</button>
                    </div>

                    <div style={styles.row}>
                        <span>Delete Account</span>
                        <button
                            style={{
                                ...styles.button,
                                backgroundColor: "red",
                                color: "white",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;