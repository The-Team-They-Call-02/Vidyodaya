package com.opportunity.hack.models;

import javax.persistence.*;

@Entity
@Table(name= "posts")
public class Post extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long postid;

    @Column(nullable = false,unique = true)
    private String title;

    private String description;
    private String imgurl;

    public Post() {
    }

    public Post(String title, String description, String imgurl) {
        this.title = title;
        this.description = description;
        this.imgurl = imgurl;
    }

    public long getPostid() {
        return postid;
    }

    public void setPostid(long postid) {
        this.postid = postid;
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
