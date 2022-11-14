import * as React from "react";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search";
import DarkModeSwitch from "./components/DarkModeSwitch";
import styled from "styled-components";


const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
   justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  width: 100%;

`;
const StyLedLogo = styled.div`
    background-image: url(${({ lg }) => lg});
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
      
    }
`;
export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (

        <StyledMenu>
            <div style={{
                display: "flex",
                flexDirection: "row",
                height: "65px",
                justifyContent: "first baseline",
                alignItems: "center"
            }}>
                <StyLedLogo lg={config.lg} />
                <p style={{
                    fill: "${({ theme }) => theme.textColorBase || '#222222'}",

                }}>{config.namelogo}</p>
            </div>
            <div>
                <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            </div>
            <div>
                <DarkModeSwitch />
            </div>
        </StyledMenu >

    );
}
