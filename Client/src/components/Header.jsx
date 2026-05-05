// components/Header.jsx
function Header() {
    const styles = {
        container: {
            width: "99%",
            margin: "20px auto",
            position: "fixed",
            top: "-20px",
            left: "-2px",
            padding: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            position: "fixed",
            zIndex: 1000,
        },
        header: {
            display: "flex",
            position: "fixed",
            width: "100%",
            top: "0",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px",
            backgroundColor: "#96bd6c",
            color: "white",
            position: "",
            top: "0",
            zIndex: "1000",
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
        <div style={styles.container}>
            <header style={styles.header}>
                <h2>GoTask</h2>

                <nav>
                    <ul style={styles.navList}>
                        <li><a style={styles.link} href="/profile"><img src="https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg?nii=t" style={styles.image} /></a></li>
                        <li><a style={styles.link} href="/">Logout</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
