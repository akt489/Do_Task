// components/Header.jsx
function Header() {
    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px",
            backgroundColor: "#96bd6c",
            color: "white",
        },
        image: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
        },
        navList: {
            display: "flex",
            listStyle: "none",
            gap: "20px",
        },
        link: {
            color: "white",
            textDecoration: "none",
        },
    };

    return (
        <header style={styles.header}>
            <h2>GoTask</h2>

            <nav>
                <ul style={styles.navList}>
                    <li><a style={styles.link} href="/profile"><img src="#" style={styles.image} /></a></li>
                    <li><a style={styles.link} href="/">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
