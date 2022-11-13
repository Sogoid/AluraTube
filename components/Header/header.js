import config from "../../config.json";
import styled from "styled-components";

const StyledHeader = styled.header`
            background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
            border: 0px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
            display: flex;
            flex-direction: row;
            height: 65px;
            justify-content: first baseline;
            align-items: center;
            padding: 0 16px;
            gap: 16px;
            width: 100%;
            position: relative;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;

    @media (min-width: 600px) {
        max-width: 127px;
    }
    }
    .user-info {
        
        width: 100%;
        gap: 16px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, "Helvetica Neue", Helvetica, sans-serif, 'Poppins', sans-serif;
        width: 100%;
        padding: 5px 0px;
    
   }
 `;

export default function Header() {
    return (
        <StyledHeader >
            <img src={`https://github.com/${config.github}.png`} />
            <section className="user-info">
                <h2>{config.name}</h2>
                <p >{config.job}</p>
            </section>
        </StyledHeader>
    )
}