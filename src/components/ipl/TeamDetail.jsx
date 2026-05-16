import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {

    //url id -->fetch -->
    //<Route path="/teamdetail/:id" element = {<TeamDetail/>}></Route>
    const id = useParams().id; //1

  const teamList = [
    {
      id: 1,
      name: "CSK",
      fullName: "Chennai Super Kings",
      trophiesWon: 5,
      captain: "Ruturaj Gaikwad",
      coach: "Stephen Fleming",
      homeGround: "M. A. Chidambaram Stadium, Chennai",
      primaryColor: "Yellow",
      secondaryColor: "Blue",
    },
    {
      id: 2,
      name: "GT",
      fullName: "Gujarat Titans",
      trophiesWon: 1,
      captain: "Shubman Gill",
      coach: "Ashish Nehra",
      homeGround: "Narendra Modi Stadium, Ahmedabad",
      primaryColor: "Navy Blue",
      secondaryColor: "Gold",
    },
    {
      id: 3,
      name: "DC",
      fullName: "Delhi Capitals",
      trophiesWon: 0,
      captain: "Rishabh Pant",
      coach: "Ricky Ponting",
      homeGround: "Arun Jaitley Stadium, Delhi",
      primaryColor: "Blue",
      secondaryColor: "Red",
    },
    {
      id: 4,
      name: "PBKS",
      fullName: "Punjab Kings",
      trophiesWon: 0,
      captain: "Shikhar Dhawan",
      coach: "Trevor Bayliss",
      homeGround: "PCA Stadium, Mohali",
      primaryColor: "Red",
      secondaryColor: "Silver",
    },
    {
      id: 5,
      name: "RR",
      fullName: "Rajasthan Royals",
      trophiesWon: 1,
      captain: "Sanju Samson",
      coach: "Kumar Sangakkara",
      homeGround: "Sawai Mansingh Stadium, Jaipur",
      primaryColor: "Pink",
      secondaryColor: "Blue",
    },
    {
      id: 6,
      name: "SRH",
      fullName: "Sunrisers Hyderabad",
      trophiesWon: 1,
      captain: "Pat Cummins",
      coach: "Daniel Vettori",
      homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
      primaryColor: "Orange",
      secondaryColor: "Black",
    },
    {
      id: 7,
      name: "LSG",
      fullName: "Lucknow Super Giants",
      trophiesWon: 0,
      captain: "KL Rahul",
      coach: "Justin Langer",
      homeGround: "Ekana Cricket Stadium, Lucknow",
      primaryColor: "Sky Blue",
      secondaryColor: "Orange",
    },
    {
      id: 8,
      name: "MI",
      fullName: "Mumbai Indians",
      trophiesWon: 5,
      captain: "Hardik Pandya",
      coach: "Mark Boucher",
      homeGround: "Wankhede Stadium, Mumbai",
      primaryColor: "Blue",
      secondaryColor: "Gold",
    },
    {
      id: 9,
      name: "KKR",
      fullName: "Kolkata Knight Riders",
      trophiesWon: 3,
      captain: "Shreyas Iyer",
      coach: "Chandrakant Pandit",
      homeGround: "Eden Gardens, Kolkata",
      primaryColor: "Purple",
      secondaryColor: "Gold",
    },
    {
      id: 10,
      name: "RCB",
      fullName: "Royal Challengers Bengaluru",
      trophiesWon: 0,
      captain: "Faf du Plessis",
      coach: "Andy Flower",
      homeGround: "M. Chinnaswamy Stadium, Bengaluru",
      primaryColor: "Red",
      secondaryColor: "Black",
    },
  ];

  const foundTeam = teamList.find((t)=>t.id == id)
  console.log("found team....",foundTeam);
  


  return (
    <div style={{ textAlign: "center",color:foundTeam.primaryColor.toLowerCase() }}>
      <h1>TEAM DETAIL - {id}</h1>
      <h2>Team Name = {foundTeam.fullName}</h2>
      <h2>Trophies = {foundTeam.trophiesWon}</h2>
      <h3>Captain = {foundTeam.captain}</h3>
      <h3>Coach = {foundTeam.coach}</h3>
      <h3>HG = {foundTeam.homeGround}</h3>
    </div>
  );
};
