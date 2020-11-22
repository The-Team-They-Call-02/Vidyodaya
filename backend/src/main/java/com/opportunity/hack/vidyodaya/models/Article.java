package com.opportunity.hack.vidyodaya.models;

import javax.persistence.*;

@Entity
@Table(name = "articles")
public class Article extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long articleId;

  @Column(nullable = false, unique = true)
  private String title;

  private String description;

  public Article() {}

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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imgurl) {
    this.imageUrl = imgurl;
  }

  public byte[] getArticle() {
    return article;
  }

  public void setArticle(final byte[] article) {
    this.article = article;
  }
}
