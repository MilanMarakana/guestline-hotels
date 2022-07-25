import styled from "styled-components";

export const HotelCardWrapper = styled.div`
    border-radius: 20px;
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    @media screen and (max-device-width: 1024px) {
		width: 95%;
	}
`;

export const HotelCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-left: 15px;
    @media screen and (max-device-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
	}
`;

export const HotelDesc = styled.div`
    margin-left: -150px;
    font-family: 'Raleway', sans-serif;
    @media screen and (max-device-width: 1024px) {
			margin-left: 5px;
            font-size: 12px;
		}
`;

export const HotelImg = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 10px;
    @media screen and (max-device-width: 1024px) {
        width: 130px;
        height: 130px;
	}
`;

export const Silder = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`
export const StarWrapper = styled.div`
    margin-top: 25px;
`;
