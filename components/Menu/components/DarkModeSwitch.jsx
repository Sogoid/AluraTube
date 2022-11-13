import React from "react";
import { StyledSwitch } from "../components/compstyles/darkmodeswitchstyles";
import { ColorModeContext } from "./ColorMode";

export default function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input id="darkmode" type="checkbox" onChange={() => {
        contexto.toggleMode();
      }} />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span><span>☀️</span>
      </label>
    </StyledSwitch>
  )
}