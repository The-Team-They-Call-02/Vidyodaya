import React from "react";
import { useHistory } from "react-router-dom";


// styled-components
import {
    BackBtn,
    Container,
    HeadingContainer,
    Heading,
    BodyContainer,
    ContentContainer,
    Content
  } from "../Articles.styles";




const EditArticle = () => {
    const history = useHistory();
  
    const goBack = () => {
      history.push("/articles");
    };
    
    return (
        <Container>
            <HeadingContainer>
                <Heading>Edit Article</Heading>
                <BackBtn onClick={goBack}>Back</BackBtn>
            </HeadingContainer>
            <BodyContainer>
                <ContentContainer edit-article>
                    <Content>Hello</Content>
                </ContentContainer>
            </BodyContainer>
        </Container>
        
    );
};
    
export default EditArticle;