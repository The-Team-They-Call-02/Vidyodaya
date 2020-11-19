package com.opportunity.hack.repository;

import com.opportunity.hack.models.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository  extends CrudRepository<Post,Long> {
}
