package com.psl.integrador.service;

import com.psl.integrador.exception.EntityNotFoundException;
import com.psl.integrador.model.Topic;
import com.psl.integrador.model.enums.Status;
import com.psl.integrador.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicServiceImpl implements TopicService {

    private final TopicRepository topicRepository;

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @Override
    public List<Topic> getTopicsByStatus(int status) {
        // Check if status exists in enum
        if (status < 0 || Status.values().length - 1 < status)
            throw new ArrayIndexOutOfBoundsException(status);

        return topicRepository.findTopicByStatus(Status.values()[status]);
    }

    @Override
    public Topic addTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    @Override
    public Topic updateTopic(Topic topic) throws EntityNotFoundException {

        if (topicRepository.findTopicById(topic.getId()) == null)
            throw new EntityNotFoundException(String.format("Topic with id: %s was not found", topic.getId()));

        return topicRepository.save(topic);
    }

    @Override
    public Topic getTopicById(String id) {
        return topicRepository.findTopicById(id);
    }

    @Override
    public Topic deleteTopicById(String id) {
        return topicRepository.deleteTopicById(id);
    }

    @Override
    public List<Topic> getTopicsByName(String name) {
        return topicRepository.findAllByNameContains(name);
    }

    @Override
    public List<Topic>getAllTopics(){
        return topicRepository.findAll();
    }



}