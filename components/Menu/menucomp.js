import * as React from "react";
import config from "../../config.json";
import Search, { Component } from "../Menu/components/search";
import DarkModeSwitch from "./components/DarkModeSwitch";
import styled from "styled-components";
import Image from 'next/image';



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
                <span>
                    <Image src="/images/logoAluraTube.svg" alt="Atulra Tube" width={80} height={30} />
                </span>
                <p style={{
                    fill: "${({ theme }) => theme.textColorBase || '#222222'}",
                    fontSize: "25px",

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
