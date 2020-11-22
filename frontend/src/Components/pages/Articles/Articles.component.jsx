import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ArticlesHome from "./Home/ArticlesHome.component";
import CreateArticle from "./Create/CreateArticle.component";
import EditArticle from "./Edit/EditArticle.component";

// styled-components
import { MainContainer } from "./Articles.styles";

const Articles = () => {
    return (
        <MainContainer>
            <Switch>
                <Route path="/articles/create-article" component={CreateArticle} />
                <Route path="/articles/edit-article" component={EditArticle} />
                <Route path="/articles/" component={ArticlesHome} />
            </Switch>
        </MainContainer>
    );
};

export default Articles;