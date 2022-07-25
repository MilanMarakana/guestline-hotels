import styled from "styled-components";

export const ErrorCardContainer = styled.div`
	width: 60vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5%;
	margin-left: 17%;
	background-color: #fff;
	border: 1px solid #E2DCC8;
	border-radius: 5px;
	padding: 25px;
	cursor: pointer;
	transform: translateZ(0);
	transition: transform 0.25s ease-out;

	&:hover {
		transform: scale(1.05);
	}

	@media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px){
			width: 90vw;
			margin: 0 auto;
			margin-top: 40%;
		}
`;

export const ErrorText = styled.h1`
    font-family: 'Raleway', sans-serif;
	@media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px){
			font-size: 20px;
		}
`;

export const ErrorBtn = styled.button`
	margin: 0 auto;
	width: 250px;
	height: 60px;
	border-radius: 10px;
	background-color: #FFDEB4;
	border: none;
	margin-top: 10px;
	font-family: 'Work Sans', sans-serif;
	font-size: 1.5rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #f0a560;
	}
	@media only screen 
  		and (min-device-width: 375px) 
  		and (max-device-width: 812px){
			width: 200px;
			font-size: 1.2rem;
			margin-top: 20px;
		}

`;