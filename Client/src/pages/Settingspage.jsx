import { useState } from "react";
import BackBtn from "../components/BackBtn";

export default function Settings() {
    const [settings, setSettings] = useState({
        darkMode: false,
        notifications: true,
        emailUpdates: false,
        twoFactor: false,
    });

    const toggle = (key) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [passwordMsg, setPasswordMsg] = useState("");

    const handlePasswordChange = (e) => {
        setPasswords((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const savePassword = () => {
        setPasswordMsg("");

        if (!passwords.oldPassword || !passwords.newPassword) {
            return setPasswordMsg("❌ All fields are required");
        }

        if (passwords.newPassword.length < 6) {
            return setPasswordMsg("❌ Password must be at least 6 characters");
        }

        if (passwords.newPassword !== passwords.confirmPassword) {
            return setPasswordMsg("❌ Passwords do not match");
        }

        setPasswordMsg("✅ Password updated successfully!");

        setTimeout(() => {
            setShowPasswordModal(false);
            setPasswords({
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
            setPasswordMsg("");
        }, 1200);
    };

    const styles = {
        page: {
            minHeight: "100vh",
            background: settings.darkMode ? "#121212" : "#f4f6fb",
            color: settings.darkMode ? "white" : "#111",
            fontFamily: "Arial",
            padding: "20px",
        },

        container: {
            maxWidth: "800px",
            margin: "auto",
        },

        header: {
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
        },

        section: {
            background: settings.darkMode ? "#1e1e1e" : "white",
            borderRadius: "14px",
            padding: "18px",
            marginBottom: "15px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        },

        sectionTitle: {
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "12px",
            color: settings.darkMode ? "#ddd" : "#333",
        },

        row: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
        },

        lastRow: {
            borderBottom: "none",
        },

        label: {
            fontSize: "14px",
        },

        switch: (active) => ({
            width: "44px",
            height: "24px",
            borderRadius: "50px",
            background: active ? "#4CAF50" : "#ccc",
            position: "relative",
            cursor: "pointer",
            transition: "0.3s",
        }),

        circle: (active) => ({
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "white",
            position: "absolute",
            top: "3px",
            left: active ? "23px" : "3px",
            transition: "0.3s",
        }),

        dangerBtn: {
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            background: "#ff4d4d",
            color: "white",
            cursor: "pointer",
        },
    };

    const modal = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        },

        box: {
            width: "350px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        },

        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
        },

        btnRow: {
            display: "flex",
            gap: "10px",
        },

        saveBtn: {
            flex: 1,
            padding: "8px",
            background: "#1877f2",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
        },

        cancelBtn: {
            flex: 1,
            padding: "8px",
            background: "#ddd",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
        },

        msg: {
            fontSize: "13px",
            color: "green",
            marginBottom: "10px",
        },
    };

    return (
        <div style={styles.page}>
            <BackBtn />

            <div style={styles.container}>
                <div style={styles.header}>Settings</div>

                {/* APPEARANCE */}
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Appearance</div>

                    <div style={styles.row}>
                        <span style={styles.label}>Dark Mode</span>
                        <div
                            style={styles.switch(settings.darkMode)}
                            onClick={() => toggle("darkMode")}
                        >
                            <div style={styles.circle(settings.darkMode)} />
                        </div>
                    </div>
                </div>

                {/* NOTIFICATIONS */}
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Notifications</div>

                    <div style={styles.row}>
                        <span style={styles.label}>Push Notifications</span>
                        <div
                            style={styles.switch(settings.notifications)}
                            onClick={() => toggle("notifications")}
                        >
                            <div style={styles.circle(settings.notifications)} />
                        </div>
                    </div>

                    <div style={{ ...styles.row, ...styles.lastRow }}>
                        <span style={styles.label}>Email Updates</span>
                        <div
                            style={styles.switch(settings.emailUpdates)}
                            onClick={() => toggle("emailUpdates")}
                        >
                            <div style={styles.circle(settings.emailUpdates)} />
                        </div>
                    </div>
                </div>

                {/* SECURITY */}
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Security</div>

                    <div style={styles.row}>
                        <span style={styles.label}>Two-Factor Authentication</span>
                        <div
                            style={styles.switch(settings.twoFactor)}
                            onClick={() => toggle("twoFactor")}
                        >
                            <div style={styles.circle(settings.twoFactor)} />
                        </div>
                    </div>
                </div>

                {/* ACCOUNT */}
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Account</div>
                    <div style={styles.row}>
                        <span style={styles.label}>Change Password</span>
                        <button
                            style={{ padding: "6px 12px" }}
                            onClick={() => setShowPasswordModal(true)}
                        >
                            Edit
                        </button>
                    </div>

                    <div style={{ ...styles.row, ...styles.lastRow }}>
                        <span style={styles.label}>Delete Account</span>
                        <button style={styles.dangerBtn}>Delete</button>
                    </div>
                </div>
            </div>

            {showPasswordModal && (
                <div style={modal.overlay}>
                    <div style={modal.box}>
                        <h3>Change Password</h3>

                        <input
                            type="password"
                            name="oldPassword"
                            placeholder="Old Password"
                            value={passwords.oldPassword}
                            onChange={handlePasswordChange}
                            style={modal.input}
                        />

                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                            style={modal.input}
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange}
                            style={modal.input}
                        />

                        {passwordMsg && <p style={modal.msg}>{passwordMsg}</p>}

                        <div style={modal.btnRow}>
                            <button style={modal.saveBtn} onClick={savePassword}>
                                Save
                            </button>

                            <button
                                style={modal.cancelBtn}
                                onClick={() => setShowPasswordModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}