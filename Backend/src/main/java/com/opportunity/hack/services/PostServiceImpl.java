package com.opportunity.hack.services;

import com.opportunity.hack.models.Post;
import com.opportunity.hack.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service(value = "postService")
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postrepos;

    @Override
    public List<Post> findAll() {

        List<Post> list = new ArrayList<>();

        postrepos.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public Post findPostById(long id) throws EntityNotFoundException {
        return postrepos.findById(id).orElseThrow(() -> new EntityNotFoundException("Post id not found"));
    }

    @Override
    public Post save(Post post) {
        Post newPost = new Post();

        if (post.getPostid() != 0) {
            postrepos.findById(post.getPostid()).orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
            newPost.setPostid(post.getPostid());
        }

        newPost.setDescription(post.getDescription());
        newPost.setImgurl(post.getImgurl());
        newPost.setTitle(post.getTitle());

        return postrepos.save(newPost);

    }

    @Override
    public Post update(Post post, long id) {

        Post currentPost = new Post();

        if (post.getPostid() != 0) {
            postrepos.findById(post.getPostid()).orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
            currentPost.setPostid(post.getPostid());
        }
        if (post.getDescription() != null) {

            currentPost.setDescription(post.getDescription());
        }
        if (post.getImgurl() != null) {

            currentPost.setImgurl(post.getImgurl());
        }
        if (post.getTitle() != null) {

            currentPost.setTitle(post.getTitle());
        }

        return postrepos.save(currentPost);

    }

    @Override
    public void delete(long id) {
        postrepos.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Post id " + id + " not found!"));
        postrepos.deleteById(id);
    }
}
