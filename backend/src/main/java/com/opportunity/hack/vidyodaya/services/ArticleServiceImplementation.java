package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Article;
import com.opportunity.hack.vidyodaya.repository.ArticleRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "articleService")
public class ArticleServiceImplementation implements ArticleService {

  private final ArticleRepository articleRepository;

  public ArticleServiceImplementation(ArticleRepository articleRepository) {
    this.articleRepository = articleRepository;
  }

  /**
   * Return list of all articles
   * @return List of all Article instances
   */
  @Override
  public List<Article> findAll() {
    List<Article> articles = new ArrayList<>();

    articleRepository.findAll().iterator().forEachRemaining(articles::add);
    return articles;
  }

  /**
   * Return the article with the requested database id
   * @param id The requested database id
   * @return The Article instance with the requested database id
   */
  @Override
  public Article findArticleById(long id) throws EntityNotFoundException {
    return articleRepository
      .findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Article id not found"));
  }

  /**
   * Save the specified article
   * @param article The article being saved
   * @return The finalized saved article
   */
  @Override
  public Article save(Article article) {
    Article newArticle = new Article(article);

    if (article.getArticleId() != 0) {
      articleRepository
        .findById(article.getArticleId())
        .orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
      newArticle.setArticleId(article.getArticleId());
    }

    return articleRepository.save(newArticle);
  }

  /**
   * Update the article with the specified database id using a partial Article
   * instance supplied
   * @param article The partial Article instance supplied
   * @param id The database id of the article being updated
   * @return The updated Article instance
   */
  @Override
  public Article update(Article article, long id) {
    Article currentArticle = findArticleById(id);

    currentArticle.update(currentArticle);

    return articleRepository.save(currentArticle);
  }

  /**
   * Delete the article with the supplied article id
   * @param id The supplied article id
   */
  @Override
  public void delete(long id) {
    articleRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Article id " + id + " Not Found!")
      );
    articleRepository.deleteById(id);
  }
}
