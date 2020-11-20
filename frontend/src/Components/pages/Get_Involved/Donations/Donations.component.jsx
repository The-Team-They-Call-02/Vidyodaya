import React from "react";
import { useHistory } from "react-router-dom";

// styled-components
import {
  Container,
  Heading,
  HeadingContainer,
  BackBtn,
} from "../GetInvolved.styles";

import {
  ImagesContainer,
  ImgContainer,
  Img,
  InfoContainer,
  InfoHeading,
  CTABtn,
  Description,
  BankDetails,
  Field,
  BankInformation,
} from "./Donations.styles";

import img1 from "../../../../Assets/Get-Involved/01.jpg";
import img2 from "../../../../Assets/Get-Involved/02.jpg";
import img3 from "../../../../Assets/Get-Involved/03.jpg";
import img4 from "../../../../Assets/Get-Involved/04.jpg";
import img5 from "../../../../Assets/Get-Involved/05.jpg";
import img6 from "../../../../Assets/Get-Involved/06.jpg";
import img7 from "../../../../Assets/Get-Involved/07.jpg";

const Donations = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/get-involved");
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Donations</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>
      <ImagesContainer>
        <InfoContainer>
          <InfoHeading>Your support keeps us going!</InfoHeading>
          <CTABtn>Donate</CTABtn>

          <Description>
            Funds for Children Camps: As part of our education program, we run
            camps for the children during holidays. This year we will be running
            3 camps and hope to reach out to more children. To learn more on
            camps please visit
            http://www.vidyodaya.org/vbvt/outreach/quality-education/children-camps/
          </Description>

          <Description>
            It costs around Rs. 600 for each student to be a part of this camp
            and we hope that you would be interested in gifting this unique
            experience to a child. There is no bar on the number of children you
            can sponsor and we hope that you will reach out to your friends and
            family and encourage them to be a part of this experience too.
          </Description>

          <Description>And below is our other wishlist.</Description>
        </InfoContainer>
        <ImgContainer>
          <Img src={img1} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img2} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img3} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img4} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img5} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img6} alt="" />
        </ImgContainer>
        <ImgContainer>
          <Img src={img7} alt="" />
        </ImgContainer>

        <InfoContainer>
          <InfoHeading>Support us by donating.</InfoHeading>
          <CTABtn bankdetails>Donate</CTABtn>

          <Description bankdetails>
            Please use the following bank information or write to us at{" "}
            <span style={{ fontWeight: "900" }}>vbvtgudalur@gmail.com</span> for
            any clarificiations
          </Description>

          <BankDetails>
            <BankInformation heading>
              Bank Details – Indian Contrbution{" "}
            </BankInformation>
            <BankInformation>
              Name of the Account : VISWA BHARATI VIDYODAYA TRUST
            </BankInformation>

            <BankInformation>
              Name of the Bank : THE CATHOLIC SYRIAN BANK LTD
            </BankInformation>

            <BankInformation>
              Name of the Branch : GUDALUR BRANCH
            </BankInformation>
            <BankInformation>
              Account Numbers : 0024-00261094-190001(IC)
            </BankInformation>
            <BankInformation>Bank Code : 0024</BankInformation>
            <BankInformation>IFSC CODE : CSBK0000024</BankInformation>
            <BankInformation>RTGS CODE : CSBK0000024</BankInformation>
            <BankInformation>
              MICR Code : 643047202 Beneficiary Swift Code : CSYB IN 55
            </BankInformation>
            <BankInformation>
              Swift Code of Routing : CSYB IN 55
            </BankInformation>
          </BankDetails>
          <BankDetails>
            <BankInformation heading>
              Bank Details – Foreign Contribution
            </BankInformation>
            <BankInformation>
              Name of the Account : VISWA BHARATI VIDYODAYA TRUST
            </BankInformation>
            <BankInformation>
              Name of the Bank : THE CATHOLIC SYRIAN BANK LTD
            </BankInformation>
            <BankInformation>
              Name of the Branch : GUDALUR BRANCH
            </BankInformation>
            <BankInformation>
              Account Number (FC) :0024-00258503-190001
            </BankInformation>
            <BankInformation>
              Beneficiary Swift Code : CSYB IN 55
            </BankInformation>
            <BankInformation>
              Swift Code of Routing : CSYB IN 55
            </BankInformation>
          </BankDetails>
          <Description bankdetails>
            Please check our Endowment to learn more.
          </Description>
          <Description bankdetails bottom>
            Email us for any further queries:{" "}
            <span style={{ fontWeight: "900" }}>vbvtgudalur@gmail.com</span>
          </Description>
        </InfoContainer>
      </ImagesContainer>
    </Container>
  );
};

export default Donations;
