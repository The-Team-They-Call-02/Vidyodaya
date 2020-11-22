package com.opportunity.hack.vidyodaya.models;

import javax.persistence.*;

@Entity
@Table(name = "articles")
public class Article extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long articleid;

  @Column(nullable = false, unique = true)
  private String title;

  private String description;
  private String imgurl;

  public Article() {}

  public Article(String title, String description, String imgurl) {
    this.title = title;
    this.description = description;
    this.imgurl = imgurl;
  }

  public long getArticleid() {
    return articleid;
  }

  public void setArticleid(long articleid) {
    this.articleid = articleid;
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

  public String getImgurl() {
    return imgurl;
  }

  public void setImgurl(String imgurl) {
    this.imgurl = imgurl;
  }
}
