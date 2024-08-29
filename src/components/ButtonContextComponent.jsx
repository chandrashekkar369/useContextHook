import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function ButtonContextComponent() {
  const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);
  return (
    <div>
      <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
    </div>
  );
}
