import styled from "styled-components";
import * as React from "react";

const StyledFooter = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#e5e5e5"};
    border: 0px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
    font-weight:bold;  
    -webkit-text-fill-color: red;
     display: flex;
     flex-direction: row;
     height: 65px;
     justify-content: center;
     align-items: center;
     padding: 0 16px;
     gap: 16px;
     width: 100%;


     @media (min-width: 1512px) {
     max-width: 1000px;
    }
`;

export default function Footer() {
    return (
        <StyledFooter >
            <span>Rodapé</span>
        </StyledFooter>
    );
}
