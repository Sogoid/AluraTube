import config from "../../config.json";
import Search, { Component } from "../Menu/components/search.js";
import * as React from "react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
`;
const StyledLogo = styled.div`width: 100%;
max-width: 80px;
background-image: 'url(${config.logo})';
background-repeat: 'no-repeat';
background-size: '80%';
@media (min-width: 600px) {
  max-width: 127px;
}`;

const StyledH2 = styled.h2` fill: ${({ theme }) => theme.textColorBase || "#222222"};
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (
        <StyledMenu>
            <div>
                <StyledLogo />
            </div>
            <StyledH2>{config.namelogo}</StyledH2>
            <div>
                <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            </div>

            <div>
                <DarkModeSwitch />
            </div>



        </StyledMenu>
    )
}