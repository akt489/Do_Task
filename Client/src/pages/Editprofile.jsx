import React, { useState, useCallback } from "react";
import BackBtn from "../components/BackBtn";

const styles = {
    page: {
        minHeight: "100vh",
        background: "#eef1f6",
        fontFamily: "sans-serif",
        paddingBottom: "40px",
    },

    header: {
        height: "180px",
        background:
            "linear-gradient(135deg, #9fe66d, #22651c)",
        position: "relative",
    },

    profileCard: {
        maxWidth: "700px",
        margin: "-60px auto 0",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        padding: "80px 25px 25px",
        position: "relative",
    },

    avatar: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid white",
        position: "absolute",
        top: "-60px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ddd",
    },

    name: {
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "700",
        marginTop: "10px",
    },

    subtitle: {
        textAlign: "center",
        color: "#666",
        marginBottom: "20px",
    },

    section: {
        marginTop: "20px",
        padding: "15px",
        borderRadius: "12px",
        background: "#f7f8fa",
        border: "1px solid #e4e6eb",
    },

    label: {
        fontSize: "13px",
        color: "#666",
        marginBottom: "6px",
        display: "block",
    },

    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccd0d5",
        outline: "none",
        fontSize: "14px",
    },

    buttonRow: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
    },

    saveBtn: {
        flex: 1,
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "#1877f2",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
    },

    cancelBtn: {
        flex: 1,
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccd0d5",
        background: "#fff",
        cursor: "pointer",
    },

    message: {
        textAlign: "center",
        marginTop: "12px",
        color: "green",
    },

    error: {
        textAlign: "center",
        marginTop: "12px",
        color: "red",
    },
};

export default function EditProfilePage() {
    const [user, setUser] = useState({
        name: "Abraham Tilahun",
        username: "abraham_dev",
        bio: "Computer Science student | Building skills daily 🚀",
        avatar:
            "https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }, []);

    const validate = () => {
        if (!user.name.trim()) return "Name cannot be empty";
        if (!user.username.trim()) return "Username cannot be empty";
        return null;
    };

    const saveProfile = () => {
        setMessage("");
        setError("");

        const err = validate();
        if (err) return setError(err);

        setMessage("Profile updated successfully!");
        setTimeout(() => setMessage(""), 2000);
    };

    const resetProfile = () => {
        setUser({
            name: "Abraham Tilahun",
            username: "abraham_dev",
            bio: "Computer Science student | Building skills daily 🚀",
            avatar:
                "https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg",
        });
    };

    return (
        <div style={styles.page}>
            <BackBtn />

            {/* Blue Header (Facebook style) */}
            <div style={styles.header}></div>

            {/* Profile Card */}
            <div style={styles.profileCard}>
                <img
                    src={user.avatar}
                    alt="avatar"
                    style={styles.avatar}
                    onError={(e) => {
                        e.target.src =
                            "https://via.placeholder.com/120?text=User";
                    }}
                />

                <div style={styles.name}>{user.name}</div>
                <div style={styles.subtitle}>Edit your profile details</div>

                {/* Name */}
                <div style={styles.section}>
                    <label style={styles.label}>Full Name</label>
                    <input
                        style={styles.input}
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Username */}
                <div style={styles.section}>
                    <label style={styles.label}>Username</label>
                    <input
                        style={styles.input}
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>

                {/* Bio */}
                <div style={styles.section}>
                    <label style={styles.label}>Bio</label>
                    <input
                        style={styles.input}
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                    />
                </div>

                {/* Avatar */}
                <div style={styles.section}>
                    <label style={styles.label}>Profile Picture URL</label>
                    <input
                        style={styles.input}
                        name="avatar"
                        value={user.avatar}
                        onChange={handleChange}
                    />
                </div>

                {/* Buttons */}
                <div style={styles.buttonRow}>
                    <button style={styles.saveBtn} onClick={saveProfile}>
                        Save Changes
                    </button>

                    <button style={styles.cancelBtn} onClick={resetProfile}>
                        Reset
                    </button>
                </div>

                {/* Messages */}
                {message && <div style={styles.message}>{message}</div>}
                {error && <div style={styles.error}>{error}</div>}
            </div>
        </div>
    );
}