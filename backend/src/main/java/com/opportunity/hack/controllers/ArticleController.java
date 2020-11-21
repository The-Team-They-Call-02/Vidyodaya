package com.opportunity.hack.controllers;


import com.opportunity.hack.models.Article;
import com.opportunity.hack.services.ArticleService;
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
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;


    @GetMapping(value = "/articles",produces = "application/json")
    public ResponseEntity<?> listAllArticles(){

        List<Article> articles = articleService.findAll();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @GetMapping(value = "/article/{articleid}",produces = "application/json")
    public ResponseEntity<?> getArticleById(@PathVariable Long articleid){
        Article a = articleService.findArticleById(articleid);
        return new ResponseEntity<>(a,HttpStatus.OK);
    }

    @PostMapping(value = "/post",
            consumes = "application/json")
    public ResponseEntity<?> addNewPost(
            @Valid
            @RequestBody
                    Article newarticle) throws
            URISyntaxException
    {
        newarticle.setArticleid(0);
        newarticle = articleService.save(newarticle);

        // set the location header for the newly created resource
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newUserURI = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{articleid}")
                .buildAndExpand(newarticle.getArticleid())
                .toUri();
        responseHeaders.setLocation(newUserURI);

        return new ResponseEntity<>(null,
                responseHeaders,
                HttpStatus.CREATED);
    }

    @PutMapping(value = "/article/{articleid}",
            consumes = "application/json")
    public ResponseEntity<?> updateFullPost(
            @Valid
            @RequestBody
                    Article updateArticle,
            @PathVariable
                    long articleid)
    {
        updateArticle.setArticleid(articleid);
        articleService.save(updateArticle);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/article/{id}",
            consumes = "application/json")
    public ResponseEntity<?> updatePost(
            @RequestBody
                    Article updateArticle,
            @PathVariable
                    long id)
    {
        articleService.update(updateArticle,
                id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/article/{id}")
    public ResponseEntity<?> deleteUserById(
            @PathVariable
                    long id)
    {
        articleService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
