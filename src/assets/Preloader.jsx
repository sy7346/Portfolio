import React from "react";

const Preloader = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Loading...</h2>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    color: "#fff",
  },
  text: {
    fontSize: "24px",
  },
};

export default Preloader;
