import { createGlobalStyle } from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

const ReportPageStyles = createGlobalStyle`

    .react-pdf__Page__annotations.annotationLayer {
        display: none;
    }

    .title {
        font-size: 4.8rem;
        text-align: center;
        margin-bottom: 50px;
    }

    .MainContainer {
        width: 100%;
        padding: 50px;
        min-height: calc(100vh - (40vh + 150px));
        position: relative;

    }

    .download-link {
        background: ${colorObj.green};
        padding: 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 2rem;
        position: absolute;
        bottom: 10px;
        right: 50%;
        transform: translateX(50%);
    }

    .DocumentContainer {
        width: 50%;
        margin: 0 auto 50px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        canvas {    
            margin: 0 auto;
            padding: 0;
        }
    }

    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;

        p {
            margin: 0 30px;
        }

        button {
            padding: 10px;
            height: auto;
            color: #fff;
        }
    }



`;

export { ReportPageStyles };
