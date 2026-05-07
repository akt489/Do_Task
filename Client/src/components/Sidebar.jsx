import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, TrendingUp, CheckSquare, LogOut, Menu, X } from "lucide-react";

function Sidebar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const styles = {
        toggleBtn: {
            position: "fixed",
            top: open ? "20px" : "100px",
            left: "20px",
            zIndex: 1001,
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "var(--shadow-sm)",
            transition: "all var(--transition-fast)",
            color: "var(--text-primary)",
        },
        sidebar: {
            position: "fixed",
            top: 0,
            left: open ? 0 : "calc(var(--sidebar-width) * -1)",
            width: "var(--sidebar-width)",
            height: "100vh",
            background: "var(--bg-secondary)",
            borderRight: "1px solid var(--border-color)",
            paddingTop: "80px",
            transition: "left var(--transition-normal)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            boxShadow: open ? "var(--shadow-lg)" : "none",
        },
        navList: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "20px",
            flex: 1,
        },
        link: (active) => ({
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            color: active ? "var(--accent-primary)" : "var(--text-secondary)",
            textDecoration: "none",
            borderRadius: "var(--radius-sm)",
            background: active ? "var(--accent-light)" : "transparent",
            fontWeight: active ? "600" : "500",
            transition: "all var(--transition-fast)",
        }),
        logoutContainer: {
            padding: "20px",
            borderTop: "1px solid var(--border-color)",
        },
        logoutBtn: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            padding: "12px 16px",
            background: "var(--danger-light)",
            color: "var(--danger)",
            border: "none",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all var(--transition-fast)",
            textDecoration: "none"
        }
    };

    return (
        <>

            <button
                style={styles.toggleBtn}
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>


            {/* Overlay for mobile/when sidebar is open */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.2)",
                        backdropFilter: "blur(4px)",
                        zIndex: 999,
                        animation: "fadeIn 0.3s ease-out"
                    }}
                />
            )}

            <div style={styles.sidebar}>
                <nav style={styles.navList}>
                    <Link to="/home" style={styles.link(isActive("/home"))} onClick={() => setOpen(false)}>
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                    <Link to="/profile" style={styles.link(isActive("/profile"))} onClick={() => setOpen(false)}>
                        <User size={20} />
                        Profile
                    </Link>
                    <Link to="/progress" style={styles.link(isActive("/progress"))} onClick={() => setOpen(false)}>
                        <TrendingUp size={20} />
                        Progress
                    </Link>
                    <Link to="/tasks" style={styles.link(isActive("/tasks"))} onClick={() => setOpen(false)}>
                        <CheckSquare size={20} />
                        Tasks
                    </Link>
                    <Link to="/habits" style={styles.link(isActive("/habits"))} onClick={() => setOpen(false)}>
                        <CheckSquare size={20} />
                        Habits
                    </Link>
                </nav>

                <div style={styles.logoutContainer}>
                    <Link to="/" style={styles.logoutBtn} onClick={() => setOpen(false)}>
                        <LogOut size={20} />
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
