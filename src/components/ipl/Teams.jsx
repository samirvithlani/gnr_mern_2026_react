import React from "react";
import { Link } from "react-router-dom";
import { MyCard } from "../MyCard";

export const Teams = () => {
  const teamList = [
    { id: 1, name: "CSK" },
    { id: 2, name: "GT" },
    { id: 3, name: "DC" },
    { id: 4, name: "PBKS" },
    { id: 5, name: "RR" },
    { id: 6, name: "SRH" },
    { id: 7, name: "LSG" },
    { id: 8, name: "MI" },
    { id: 9, name: "KKR" },
    { id: 10, name: "RCB" },
  ];
  const baseStyle = {
    height: 250,
    width: 330,
    border: "1px solid #0953e7",
    borderRadius: 20,
    background: "linear-gradient(135deg, #aff311, #0f172a)",
    color: "white",
    padding: 20,
    boxShadow: "0 10px 25px rgba(230, 42, 42, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s",
    cursor: "pointer",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <MyCard style={baseStyle} title={"Product"} buttonName = {"Detail"} text={"hi this is team card"}></MyCard>
      <h1>TEAMS</h1>
      <ol>
        {teamList.map((t) => {
          return (
            <li>
              <Link to={`/teamdetail/${t.id}`}>{t.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
