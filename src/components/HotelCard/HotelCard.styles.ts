import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

export const HotelCardWrapper = styled.div`
    border-radius: 20px;
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    @media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px) {
		width: 95%;
	}
`;

export const HotelCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-left: 15px;
    @media only screen 
  		and (min-device-width: 370px) 
  		and (max-device-width: 812px) {
        grid-template-columns: repeat(2, 1fr);
	}
`;

export const HotelDesc = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: -130px;
    font-family: 'Raleway', sans-serif;
    @media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px) {
            flex-direction: column;
			margin-left: 5px;
            font-size: 12px;
		}   
    @media only screen and (min-device-width: 814px) {
        margin-right: -250px;
    }
`;

export const HotelImg = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 10px;
    @media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px) {
        width: 130px;
        height: 130px;
	}
    @media only screen and (min-device-width: 814px) {
        margin-right: 150px;
    }
`;

export const Silder = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
`
export const StarWrapper = styled.div`
    width: 300px;
    margin-top: 25px;
    @media only screen and (min-device-width: 814px) {
        margin-left: 50px;
    }
`;

export const LeftArrow = styled(AiOutlineLeft)`
    @media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px) {
            width: 24px;
            height: 24px;
        }
`;

export const RightArrow = styled(AiOutlineRight)`
    left: 145px;
    @media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px) {
            left: 103px;
            width: 24px;
            height: 24px;
        }
`;
