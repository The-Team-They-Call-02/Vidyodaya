package com.opportunity.hack.repository;

import com.opportunity.hack.models.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> {}
