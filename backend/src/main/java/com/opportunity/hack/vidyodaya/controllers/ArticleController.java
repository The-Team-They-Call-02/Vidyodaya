package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Article;
import com.opportunity.hack.vidyodaya.services.ArticleService;
import java.net.URI;
import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/articles")
public class ArticleController {

  private final ArticleService articleService;

  public ArticleController(ArticleService articleService) {
    this.articleService = articleService;
  }

  @GetMapping(value = "/articles", produces = "application/json")
  public ResponseEntity<?> listAllArticles() {
    List<Article> articles = articleService.findAll();
    return new ResponseEntity<>(articles, HttpStatus.OK);
  }

  @GetMapping(value = "/article/{articleid}", produces = "application/json")
  public ResponseEntity<?> getArticleById(@PathVariable long articleid) {
    Article article = articleService.findArticleById(articleid);
    return new ResponseEntity<>(article, HttpStatus.OK);
  }

  @PostMapping(value = "/post", consumes = "application/json")
  public ResponseEntity<?> addNewPost(@Valid @RequestBody Article newArticle) {
    newArticle.setArticleId(0);
    newArticle = articleService.save(newArticle);

    // set the location header for the newly created resource
    HttpHeaders responseHeaders = new HttpHeaders();
    URI newUserURI = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{articleid}")
      .buildAndExpand(newArticle.getArticleId())
      .toUri();
    responseHeaders.setLocation(newUserURI);

    return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
  }

  @PutMapping(value = "/article/{articleid}", consumes = "application/json")
  public ResponseEntity<?> updateFullPost(
    @Valid @RequestBody Article updateArticle,
    @PathVariable long articleid
  ) {
    updateArticle.setArticleId(articleid);
    articleService.save(updateArticle);

    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PatchMapping(value = "/article/{id}", consumes = "application/json")
  public ResponseEntity<?> updatePost(
    @RequestBody Article updateArticle,
    @PathVariable long id
  ) {
    articleService.update(updateArticle, id);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping(value = "/article/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable long id) {
    articleService.delete(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
