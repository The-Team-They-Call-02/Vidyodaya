import React from "react";
import { useHistory } from "react-router-dom";

import EditButton from "../../../../Assets/Articles/EditButton.svg";
import DeleteButton from "../../../../Assets/Articles/DeleteButton.svg";
import CreateButton from "../../../../Assets/Articles/CreateButton.svg";

// styled-components
import {
    EditBtn,
    CreateBtn,
    DeleteBtn,
    Container,
    HeadingContainer,
    Heading,
    BodyContainer,
    ContentContainer,
    Content,
    TextContainer,
    Info
  } from "../Articles.styles";

// Endpoint for GET request to fetch articles 
// https://opportunity-hack-vidyodaya.herokuapp.com/articles/articles

const fakeData = 
[
    {
        "title": "test title",
        "description": "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        "imgurl": "https://tythedogguy.com/wp-content/uploads/2015/02/Nova-Scotia-Duck-Tolling-Retriever.jpg"
    },
    {
        "title": "test title",
        "description": "test description",
        "imgurl": "data:image/jpeg;base64,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"
    },
]


const ArticlesHome = () => {



    return (
        <Container>
        <HeadingContainer>
            <Heading>Articles</Heading>
        </HeadingContainer>

        {fakeData.map((article) => {
          return (
            <BodyContainer key={article.articleid}>
            <ContentContainer articles>
                {localStorage.getItem('status') !=null &&
                    <div>
                        <a href="/articles/edit-article">
                        <EditBtn src={EditButton}/>
                        </a>
                        {/* Still need to hook up the delete */}
                        <DeleteBtn src={DeleteButton} />
                    </div>}
                <img src={article.imgurl} style={{width: "30%", height: "300px", borderRadius: "20px"}} alt=""/>
                <TextContainer>
                <Heading>{article.title}</Heading>
                <Info>{article.description}</Info>
                </TextContainer>
            </ContentContainer>
            </BodyContainer>
          );
        })}
        {localStorage.getItem('status') !=null &&
            <a href="/articles/create-article">
                <CreateBtn src={CreateButton} />
            </a>}
    </Container>

    );
};
    
export default ArticlesHome;