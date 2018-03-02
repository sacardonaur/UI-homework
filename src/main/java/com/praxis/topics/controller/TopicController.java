package com.praxis.topics.controller;


import com.praxis.topics.entity.Topic;
import com.praxis.topics.service.TopicServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {
    @Autowired
    @Qualifier("topicServiceImp")
    private TopicServiceImpl topicServiceImpl;

    @GetMapping
    public List<Topic> getAllTopics() {

        return topicServiceImpl.getAllTopics();
    }

    @PostMapping
    public void addTopic(@RequestBody Topic topic) {
        topicServiceImpl.addTopic(topic);
    }

    @PutMapping
    public void updateTopic(@RequestBody Topic topic){


        topicServiceImpl.updateTopic(topic);
    }

    @GetMapping("/{name}")
    public Topic getTopicByName(@PathVariable("name") String name){
       return topicServiceImpl.getTopicByName(name);
    }

    /*
    @DeleteMapping("/{name}")
    public void deleteTopic(@PathVariable("name") String name) {
        topicServiceImpl.deleteTopic(name);

    }
    */

    @DeleteMapping("/{listOfNames}")
    public void deleteTopic(@PathVariable("listOfNames") List<String> listOfNames) {
        for (String name: listOfNames){
            topicServiceImpl.deleteTopic(name);
        }

    }

}
