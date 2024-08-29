import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function TextContextComponent() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h2
        style={{
          fontSize: theme === "light" ? "40px" : "70px",
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        Incredible INDIA
      </h2>
    </div>
  );
}
