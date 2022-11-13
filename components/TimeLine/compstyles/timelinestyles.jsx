import styled from "styled-components";

export const StyledTimeLine = styled.div`
   flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    padding: 0px 35px
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0px;
    overflow: hidden;
    padding: 16px;

    div {
    padding:0px 20px;
    width: 100%;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(8, minmax(200px, 1fr));
    grid-auto-columns: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: 50px;
    margin-left: 15px;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
