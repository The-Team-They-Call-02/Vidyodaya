package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Article;
import java.util.List;

public interface ArticleService {
  /**
   * Return list of all articles
   * @return List of all Article instances
   */
  List<Article> findAll();

  /**
   * Return the article with the requested database id
   * @param id The requested database id
   * @return The Article instance with the requested database id
   */
  Article findArticleById(long id);

  /**
   * Save the specified article
   * @param article The article being saved
   * @return The finalized saved article
   */
  Article save(Article article);

  /**
   * Update the article with the specified database id using a partial Article
   * instance supplied
   * @param article The partial Article instance supplied
   * @param id The database id of the article being updated
   * @return The updated Article instance
   */
  Article update(Article article, long id);

  /**
   * Delete the article with the supplied article id
   * @param id The supplied article id
   */
  void delete(long id);
}
