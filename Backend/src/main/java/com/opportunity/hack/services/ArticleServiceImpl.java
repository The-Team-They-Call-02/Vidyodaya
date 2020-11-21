package com.opportunity.hack.services;

import com.opportunity.hack.models.Article;
import com.opportunity.hack.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service(value = "articleService")
public class ArticleServiceImpl implements ArticleService{

    @Autowired
    private ArticleRepository articlerepos;

    @Override
    public List<Article> findAll() {
        List<Article> list = new ArrayList<>();

        articlerepos.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public Article findArticleById(long id) throws EntityNotFoundException {
        return articlerepos.findById(id).orElseThrow(() -> new EntityNotFoundException("Article id not found"));
    }

    @Override
    public Article save(Article article) {
        Article newArticle = new Article();

        if (article.getArticleid() != 0) {
            articlerepos.findById(article.getArticleid()).orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
            newArticle.setArticleid(article.getArticleid());
        }

        newArticle.setDescription(article.getDescription());
        newArticle.setImgurl(article.getImgurl());
        newArticle.setTitle(article.getTitle());

        return articlerepos.save(newArticle);
    }

    @Override
    public Article update(Article article, long id) {
        Article currentArticle = new Article();

        if (article.getArticleid() != 0) {
            articlerepos.findById(article.getArticleid()).orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
            currentArticle.setArticleid(article.getArticleid());
        }
        if (article.getDescription() != null) {

            currentArticle.setDescription(article.getDescription());
        }
        if (article.getImgurl() != null) {

            currentArticle.setImgurl(article.getImgurl());
        }
        if (article.getTitle() != null) {

            currentArticle.setTitle(article.getTitle());
        }

        return articlerepos.save(currentArticle);
    }

    @Override
    public void delete(long id) {
        articlerepos.findById(id).orElseThrow(()-> new EntityNotFoundException("Article id " + id + " Not Found!"));
        articlerepos.deleteById(id);
    }
}
