package com.opportunity.hack.services;

import com.opportunity.hack.models.Post;

import java.util.List;

public interface PostService {

    List<Post> findAll();
    Post findPostById(long id);
    Post save(Post post);
    Post update(Post post, long id);
    void delete(long id);
}
