package com.praxis.topics.repository;

import com.praxis.topics.entity.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("TopicRepository")
public interface TopicRepository extends MongoRepository<Topic, String> {

    Topic findByName(String name);
    List<Topic> findAll();

}
