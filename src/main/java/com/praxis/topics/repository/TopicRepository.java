package com.praxis.topics.repository;

import com.praxis.topics.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("TopicRepository")
public interface TopicRepository extends MongoRepository<Topic, String> {

    List<Topic> findTopicByStatus(Enum status);
    List<Topic> findAll();
    Topic findTopicById(String id);
    void deleteTopicById(String id);
    List<Topic> findAllByNameContainsIgnoreCase(String search);
    Topic findTopicByName(String name);

}