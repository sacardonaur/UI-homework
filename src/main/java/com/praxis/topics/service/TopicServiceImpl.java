package com.praxis.topics.service;
// Prueba
import com.praxis.topics.entity.Topic;
import com.praxis.topics.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("topicServiceImp")
public class TopicServiceImpl implements TopicService{

    @Autowired
    @Qualifier("TopicRepository")
    private TopicRepository topicRepository;

    @Override
    public List<Topic> getAllTopics() {

        return this.topicRepository.findAll();
    }

    @Override
    public void addTopic(Topic topic) {
        topicRepository.save(topic);
    }


    public Topic getTopicByName(String name){
        return topicRepository.findByName(name);
    }

    public void updateTopic(Topic topic){
        Topic topicFound = topicRepository.findByName(topic.getName());
        topicFound.setDescription(topic.getDescription());
        topicRepository.save(topicFound);
    }

    public void deleteTopic(String name) {
        Topic topic = topicRepository.findByName(name);
        topicRepository.delete(topic);

    }
}
