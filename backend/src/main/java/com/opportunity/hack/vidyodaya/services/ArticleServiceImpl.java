package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Article;
import com.opportunity.hack.vidyodaya.repository.ArticleRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "articleService")
public class ArticleServiceImpl implements ArticleService {

  @Autowired
  private ArticleRepository articlerepos;

  @Override
  public List<Article> findAll() {
    List<Article> list = new ArrayList<>();

    articlerepos.findAll().iterator().forEachRemaining(list::add);
    return list;
  }

  @Override
  public Article findArticleById(long id) throws EntityNotFoundException {
    return articlerepos
      .findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Article id not found"));
  }

  @Override
  public Article save(Article article) {
    Article newArticle = new Article();

    if (article.getArticleId() != 0) {
      articlerepos
        .findById(article.getArticleId())
        .orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
      newArticle.setArticleId(article.getArticleId());
    }

    newArticle.setDescription(article.getDescription());
    newArticle.setImageUrl(article.getImageUrl());
    newArticle.setTitle(article.getTitle());

    return articlerepos.save(newArticle);
  }

  @Override
  public Article update(Article article, long id) {
    Article currentArticle = new Article();

    if (article.getArticleId() != 0) {
      articlerepos
        .findById(article.getArticleId())
        .orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
      currentArticle.setArticleId(article.getArticleId());
    }
    if (article.getDescription() != null) {
      currentArticle.setDescription(article.getDescription());
    }
    if (article.getImageUrl() != null) {
      currentArticle.setImageUrl(article.getImageUrl());
    }
    if (article.getTitle() != null) {
      currentArticle.setTitle(article.getTitle());
    }

    return articlerepos.save(currentArticle);
  }

  @Override
  public void delete(long id) {
    articlerepos
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Article id " + id + " Not Found!")
      );
    articlerepos.deleteById(id);
  }
}
