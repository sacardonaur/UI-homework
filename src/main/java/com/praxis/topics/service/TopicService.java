package com.praxis.topics.service;

import com.praxis.topics.entity.Topic;

import java.util.List;

public interface TopicService {
    List<Topic> getAllTopics();
    void addTopic(Topic topic);
}
