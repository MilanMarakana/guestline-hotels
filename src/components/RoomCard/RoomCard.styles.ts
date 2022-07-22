import styled from "styled-components";

export const RoomWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    grid-gap: 1rem;
    margin-left: 15px;
`;

export const RoomName = styled.h2`
    font-size: 1.3rem;
    width: 150px;
    font-family: 'Raleway', sans-serif;
`;


export const Roomoccupancy = styled.p`
    margin-top: -10px;
    font-family: 'Lato', sans-serif;
`;

export const RoomDesc = styled.p`
    font-size: 14px;
    width: 100%;
    font-family: 'Raleway', sans-serif;
`;