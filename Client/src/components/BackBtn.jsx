function BackBtn(image) {
    const images = {
        back: "data:image/jpeg;base64,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"
    }
    const styles = {
        container: {
            position: "fixed",
            top: "30px",
            left: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    }
    return (
        <button style={styles.container}
            onClick={() => window.history.back()}
        >
            <img src={images.back} style={styles.image} />
        </button>
    );
}

export default BackBtn;