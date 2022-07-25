import styled from "styled-components";
import mainBg from "./assets/images/main-bg.jpg";

export const MainWrapper = styled.div`
    background-image: url(${mainBg});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 100vw;
	height: 500px;
	object-fit: cover;
	background-position: center;
	background-size: cover;
	position: relative;
	border-radius: 20px;
	z-index: 1;
    &:before {
		background: #355C7D;
		background: -webkit-linear-gradient(to left, #C06C84, #6C5B7B, #355C7D);
		background: linear-gradient(to left, #C06C84, #6C5B7B, #355C7D); 
		opacity: 0.5;
		content: '';
		width: 100%;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		z-index: -1;
		border-radius: 20px;
	}
	@media screen and (max-device-width: 1024px)
		 {
			border-radius: 5px;
			height: 300px;
		}
`;

export const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

export const MainHeading = styled.h1`
	font-size: 3rem;
	color: #EDE6DB;
	font-family: 'Ralway', sans-serif ;
	font-weight: 800;
	text-align: center;
	@media screen and (max-device-width: 1024px)
		 {
			font-size: 1.5rem;
		}
`;

export const MainDesc = styled.p`
	text-align: center;
	margin-top: -20px;
	font-size: 1.2rem;
	color: #EDE6DB;
	font-family: 'Ralway', sans-serif;
	@media screen and (max-device-width: 1024px)
		 {
			font-size: 1rem;
			margin-top: -10px;
		}
`

export const FilterWrapper = styled.div`
    width: 50vw;
    height: 100px;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    display: flex;
	align-items: center;
	justify-content:space-between;
	@media screen and (max-device-width: 1024px) {
		margin-top: 40px;
		width: 80vw;
		height: 50%;
		left: 50%;
    	top: 85%;
    	transform: translate(-50%, -50%);
		border-radius: 5px;
		flex-direction: column;
		}
`;

export const StarFilter = styled.div`
	margin-top: 5px;
    margin-left: 20px;
	@media screen and (max-device-width: 1024px) {
		margin-right: 25px;
	}
`;

export const FiltersWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	@media screen and (max-device-width: 1024px) {
		margin: 0 auto;
	}
`;

export const FilterBtn = styled.button`
	border: none;
	text-align: center;
	margin: auto;
	line-height: 2px;
	background: none;
`;

export const FilterHeading = styled.p`
	margin-right: 2px;
	font-size: 18px;
	margin-top: 18px;
	font-family: 'Lato', sans-serif;
	@media screen and (max-device-width: 1024px) {
		margin-top: 16px;
		font-size: 20px;
	}
`;

export const FilterValue = styled.p`
	font-size: 18px;
	line-height: 5px;
	font-family: 'Lato', sans-serif;
	@media screen and (max-device-width: 1024px) {
		font-size: 20px;
	}
`;
