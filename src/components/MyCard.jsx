import React from "react";

export const MyCard = (props) => {
  const baseStyle = {
    height: props.height || 220,
    width: 320,
    border: "1px solid #e5e7eb",
    borderRadius: 20,
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    color: "white",
    padding: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s",
    cursor: "pointer",
  };
  return (
    <div style={props.style || baseStyle}>
      <div>
        <h2 style={{ margin: 0, fontSize: 28 }}>{props.title || "My Card"}</h2>

        <p
          style={{
            marginTop: 10,
            color: "#cbd5e1",
            lineHeight: 1.5,
          }}
        >
          {props.text || "This is a beautiful React card component with inline styling."}
        </p>
      </div>

      <button
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: 10,
          backgroundColor: "#38bdf8",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {props.buttonName || "Explore"}
      </button>
    </div>
  );
};
