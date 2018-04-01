package com.praxis.topics.service;

import com.praxis.topics.exception.EntityNotFoundException;
import com.praxis.topics.model.Topic;
import org.springframework.stereotype.Service;

import java.util.List;


public interface TopicService {

    List<Topic> getAllTopics();

    List<Topic> getTopicsByStatus(int status);

    Topic addTopic(Topic topic);

    Topic updateTopic(Topic topic) throws EntityNotFoundException;

    Topic getTopicById(String id);

    void deleteTopicById(String id);

    List<Topic> getTopicsByName(String search);

    Topic getTopicByName(String name);

}