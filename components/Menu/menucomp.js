import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";
import * as React from "react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { StyledMenu } from "../Menu/components/compstyles/menucompstyles";

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (
        <StyledMenu>
            <div >
                <h2 >{config.namelogo}</h2>
                <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <DarkModeSwitch />
            </div>
        </StyledMenu>
    )
}