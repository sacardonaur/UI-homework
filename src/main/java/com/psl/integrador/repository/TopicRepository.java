package com.psl.integrador.repository;

import com.psl.integrador.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("TopicRepository")
public interface TopicRepository extends MongoRepository<Topic, String> {

    List<Topic> findTopicByStatus(Enum status);
    List<Topic> findAll();
    Topic findTopicById(String id);
    Topic deleteTopicById(String id);
    List<Topic> findAllByNameContains(String search);

}