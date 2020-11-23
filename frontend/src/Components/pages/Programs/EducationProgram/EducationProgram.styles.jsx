import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

export const EducationContainer = styled.div`
	padding: 50px 0;
	background: #fff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 20px;

	.NIOOSC-image {
		width: 90%;
		height: 770;
	}

	.children-camps-inner-container {
		width: 90%;
		margin: 30px auto;
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
		color: ${colorObj.dark};
		.camp-buttons-container {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			.children-camps-btn-link {
				width: 70%;
				height: 89px;
				border-radius: 20px;
				margin-bottom: 31px;
				border: 5px solid ${colorObj.green};
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0;
				.children-camps-btn-h3 {
					display: flex;
					justify-content: center;
					align-items: center;
					color: ${colorObj.green};
					font-size: 4rem;
				}
			}
		}
	}
`;
