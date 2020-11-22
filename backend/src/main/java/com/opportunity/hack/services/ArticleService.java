package com.opportunity.hack.services;

import com.opportunity.hack.models.Article;
import java.util.List;

public interface ArticleService {
  List<Article> findAll();
  Article findArticleById(long id);
  Article save(Article article);
  Article update(Article article, long id);
  void delete(long id);
}
