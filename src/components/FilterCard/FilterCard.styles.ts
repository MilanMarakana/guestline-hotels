import styled from "styled-components";

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
	@media screen and (min-device-width: 768px)
		and (max-device-width: 1024px) {
			width: 70vw;
		}
`;

export const StarFilter = styled.div`
	margin-top: 5px;
    margin-left: 20px;
`;

export const FiltersWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
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
`;

export const FilterValue = styled.p`
	font-size: 18px;
	line-height: 5px;
`;