import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

export const FrisbeeContainer = styled.div`
    padding: 50px 0;
    background: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    .frisbee-inner-container {
        width: 90%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        color: ${colorObj.dark};
        p {
            a {
                color: ${colorObj.green};
            }
        }
    }
`;