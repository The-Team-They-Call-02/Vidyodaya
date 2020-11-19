package com.opportunity.hack.controllers;

import com.opportunity.hack.models.Post;
import com.opportunity.hack.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping(value = "/posts",produces = "application/json")
    public ResponseEntity<?> listAllPosts(){

        List<Post> posts = postService.findAll();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping(value = "/post/{postid}",produces = "application/json")
    public ResponseEntity<?> getPostById(@PathVariable Long postid){
        Post p = postService.findPostById(postid);
        return new ResponseEntity<>(p,HttpStatus.OK);
    }

    @PostMapping(value = "/post",
            consumes = "application/json")
    public ResponseEntity<?> addNewPost(
            @Valid
            @RequestBody
                    Post newpost) throws
            URISyntaxException
    {
        newpost.setPostid(0);
        newpost = postService.save(newpost);

        // set the location header for the newly created resource
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newUserURI = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{postid}")
                .buildAndExpand(newpost.getPostid())
                .toUri();
        responseHeaders.setLocation(newUserURI);

        return new ResponseEntity<>(null,
                responseHeaders,
                HttpStatus.CREATED);
    }

    @PutMapping(value = "/post/{postid}",
            consumes = "application/json")
    public ResponseEntity<?> updateFullPost(
            @Valid
            @RequestBody
                    Post updatePost,
            @PathVariable
                    long postid)
    {
        updatePost.setPostid(postid);
        postService.save(updatePost);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/post/{id}",
            consumes = "application/json")
    public ResponseEntity<?> updatePost(
            @RequestBody
                    Post updatePost,
            @PathVariable
                    long id)
    {
        postService.update(updatePost,
                id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/post/{id}")
    public ResponseEntity<?> deleteUserById(
            @PathVariable
                    long id)
    {
        postService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
