package com.opportunity.hack.vidyodaya.models;

import javax.persistence.*;

/**
 * Model for table Article - holds articles from website
 */
@Entity
@Table(name = "articles")
public class Article extends Auditable {

  /**
   * The database id of the article
   */
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long articleId;

  /**
   * The article title
   */
  @Column(nullable = false, unique = true)
  private String title;

  /**
   * The description of the article
   */
  private String description;

  /**
   * The url of the article's thumbnail image
   */
  private String imageUrl;

  /**
   * The contents of the article as a stored pdf file
   */
  @Lob
  private byte[] article;

  public Article() {}

  /**
   * Primary constructor
   * @param title The article title
   * @param description The description of the article
   * @param imageUrl The url of the article's thumbnail image
   * @param article The contents of the article as a stored pdf file
   */
  @SuppressWarnings("unused")
  public Article(
    String title,
    String description,
    String imageUrl,
    byte[] article
  ) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.article = article;
  }

  public long getArticleId() {
    return articleId;
  }

  public void setArticleId(long articleId) {
    this.articleId = articleId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @SuppressWarnings("unused")
  public String getDescription() {
    return description;
  }

  @SuppressWarnings("unused")
  public void setDescription(String description) {
    this.description = description;
  }

  @SuppressWarnings("unused")
  public String getImageUrl() {
    return imageUrl;
  }

  @SuppressWarnings("unused")
  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  @SuppressWarnings("unused")
  public byte[] getArticle() {
    return article;
  }

  public void setArticle(final byte[] article) {
    this.article = article;
  }
}
