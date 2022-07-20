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
`;

export const MainDesc = styled.p`
	text-align: center;
	margin-top: -20px;
	font-size: 1.2rem;
	color: #EDE6DB;
	font-family: 'Lato', sans-serif;
`