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


const StyledH2 = styled.h2` fill: ${({ theme }) => theme.textColorBase || "#222222"};
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
    return (

        <StyledMenu>
            <div style={{ display: "flex" }}>
                <Image src="/images/logoAluraTube.svg"
                    alt="Vercel logo"
                    width={'40'}
                    height={'40'}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }} />&nbsp;&nbsp;&nbsp;

                <StyledH2>{config.namelogo}</StyledH2>
            </div>
            <div>
                <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            </div>
            <div>
                <DarkModeSwitch />
            </div>
        </StyledMenu >
    )
}