import React, { useState } from "react";
import BackBtn from "../components/BackBtn";

export default function EditProfilePage() {
    // initial user data (pretend this comes from backend or profile page)
    const [user, setUser] = useState({
        name: "Abraham Tilahun",
        username: "abraham_dev",
        avatar: "https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const saveProfile = () => {
        setMessage("✅ Profile updated successfully!");

        // optional: clear message after 2s
        setTimeout(() => setMessage(""), 2000);
    };

    const styles = {
        page: {
            minHeight: "100vh",
            background: "#f5f7fb",
            padding: "30px",
            fontFamily: "sans-serif"
        },
        container: {
            maxWidth: "500px",
            margin: "auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
        },
        title: {
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px"
        },
        avatarPreview: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            margin: "0 auto 15px"
        },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc"
        },
        button: {
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
        },
        message: {
            textAlign: "center",
            marginTop: "10px",
            color: "green"
        }
    };

    return (
        <div style={styles.page}>
            <BackBtn />
            <div style={styles.container}>

                <div style={styles.title}>✏️ Edit Profile</div>

                {/* Avatar Preview */}
                <img
                    src={user.avatar}
                    alt="avatar"
                    style={styles.avatarPreview}
                />

                {/* Inputs */}
                <input
                    style={styles.input}
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <input
                    style={styles.input}
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Username"
                />

                <input
                    style={styles.input}
                    name="avatar"
                    value={user.avatar}
                    onChange={handleChange}
                    placeholder="Avatar URL"
                />

                {/* Save Button */}
                <button style={styles.button} onClick={saveProfile}>
                    Save Changes
                </button>

                {/* Success message */}
                {message && <div style={styles.message}>{message}</div>}

            </div>
        </div>
    );
}