// components/Header.jsx
function Header() {
    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px",
            backgroundColor: "#222",
            color: "white",
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
            <h2>MyWebsite</h2>

            <nav>
                <ul style={styles.navList}>
                    <li><a style={styles.link} href="/">Home</a></li>
                    <li><a style={styles.link} href="/about">About</a></li>
                    <li><a style={styles.link} href="/services">Services</a></li>
                    <li><a style={styles.link} href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
