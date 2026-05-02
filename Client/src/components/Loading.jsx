import React from "react";

const Loading = ({ size = 40, color = "#3498db", text = "Loading..." }) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.spinner,
          width: size,
          height: size,
          borderColor: `${color}33`,
          borderTopColor: color,
        }}
      />
      {text && <p style={styles.text}>{text}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  spinner: {
    border: "4px solid",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
};

export default Loading;
