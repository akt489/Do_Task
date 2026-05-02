function Card({ title, description, image}) {
  return (
    <div style={styles.card}>
      {image && <img src={image}  style={styles.image} />}

      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}>{description}</p>

      <button style={styles.button}>View More</button>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    padding: "15px",
    margin: "10px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    margin: "10px 0 5px",
  },
  text: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default Card;
