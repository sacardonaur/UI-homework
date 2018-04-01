package com.praxis.topics.repository;

import com.praxis.topics.model.Detail;
import com.praxis.topics.model.enums.Kind;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DetailRepository extends MongoRepository<Detail, String>{
    List<Detail> findAll();
}
