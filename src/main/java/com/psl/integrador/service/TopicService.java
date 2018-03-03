package com.psl.integrador.service;

import com.psl.integrador.exception.EntityNotFoundException;
import com.psl.integrador.model.Topic;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TopicService {

    List<Topic> getAllTopics();

    List<Topic> getTopicsByStatus(int status);

    Topic addTopic(Topic topic);

    Topic updateTopic(Topic topic) throws EntityNotFoundException;

    Topic getTopicById(String id);

    Topic deleteTopicById(String id);

    List<Topic> getTopicsByName(String search);

}