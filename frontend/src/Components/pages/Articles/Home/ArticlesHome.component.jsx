import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AxiosWithAuth from "../../../../Utils/AxiosWithAuth";
import { AppContext } from "../../../../context/context";

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
  TextContainer,
  Info,
} from "../Articles.styles";
import { BackgroundImageContainer } from "../../../../Styles/GlobalStyles";
// Endpoint for GET request to fetch articles

// https://opportunity-hack-vidyodaya.herokuapp.com/articles/articles

const ArticlesHome = () => {
  const { addArticles, articleArray, setArticleArray } = useContext(AppContext);

  const getArticles = () => {
    AxiosWithAuth()
      .get("/articles/articles")
      .then((res) => {
        addArticles(res.data);
        setArticleArray(res.data);
        console.log("get article", res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteArticles = (id) => {
    AxiosWithAuth()
      .delete(`/articles/article/${id}`)
      .then((res) => {
        console.log("delete", res.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <BackgroundImageContainer
        style={{ marginTop: "0", height: "150%", position: "fixed" }}
      ></BackgroundImageContainer>
      <HeadingContainer>
        <Heading>Articles</Heading>
      </HeadingContainer>

      {articleArray.map((article) => {
        return (
          <BodyContainer key={article.articleId} articleId={article.articleId}>
            <ContentContainer articles>
              {localStorage.getItem("token") != null && (
                <div>
                  <Link to={`/articles/edit-article/${article.articleId}`}>
                    <EditBtn src={EditButton} />
                  </Link>
                  {/* Still need to hook up the delete */}
                  <DeleteBtn
                    src={DeleteButton}
                    onClick={() => deleteArticles(article.articleId)}
                  />
                </div>
              )}
              <img
                src={article.imgurl}
                style={{ width: "30%", height: "300px", borderRadius: "20px" }}
                alt=""
              />
              <TextContainer>
                <Heading>{article.title}</Heading>
                <Info>{article.description}</Info>
              </TextContainer>
            </ContentContainer>
          </BodyContainer>
        );
      })}
      {localStorage.getItem("token") != null && (
        <a href="/articles/create-article">
          <CreateBtn src={CreateButton} />
        </a>
      )}
    </Container>
  );
};

export default ArticlesHome;
