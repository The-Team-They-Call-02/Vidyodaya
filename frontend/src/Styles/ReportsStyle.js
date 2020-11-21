import styled from 'styled-components';
import { colorObj } from './GlobalStyles';

export const ReportsPageContainer = styled.div`
display: flex;
flex-direction: column;
    height: 100%;
    .programs-page-inner-div {
        background-color: #F8F7F7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
        .programs-page-h1 {
            margin: 50px auto;
        }
        .programs-page-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 1533px;
            .card {
                background-color: #ffffff;
                box-shadow: 0px 1px 10px 0px ${colorObj.dark};
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 714px;
                height: 545px;
                border-radius: 20px;
                border: 5px solid #77CC6D;
                margin-bottom: 100px;
                &:last-child {
                    width: 1533px;
                }
            }
            .programs-page-frisbee {

            }
        }
    }

`;