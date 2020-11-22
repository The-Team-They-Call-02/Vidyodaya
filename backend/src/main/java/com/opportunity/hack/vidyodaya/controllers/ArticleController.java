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

  @GetMapping(value = "/article/{id}", produces = "application/json")
  public ResponseEntity<?> getArticleById(@PathVariable long id) {
    Article article = articleService.findArticleById(id);
    return new ResponseEntity<>(article, HttpStatus.OK);
  }

  @PostMapping(value = "/article", consumes = "application/json")
  public ResponseEntity<?> addNewPost(@Valid @RequestBody Article newArticle) {
    newArticle.setArticleId(0);
    newArticle = articleService.save(newArticle);

    // set the location header for the newly created resource
    HttpHeaders responseHeaders = new HttpHeaders();
    URI newUserURI = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(newArticle.getArticleId())
      .toUri();
    responseHeaders.setLocation(newUserURI);

    return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
  }

  @PutMapping(value = "/article/{id}", consumes = "application/json")
  public ResponseEntity<?> updateFullArticle(
    @Valid @RequestBody Article updateArticle,
    @PathVariable long id
  ) {
    updateArticle.setArticleId(id);
    articleService.save(updateArticle);

    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PatchMapping(value = "/article/{id}", consumes = "application/json")
  public ResponseEntity<?> updateArticle(
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
