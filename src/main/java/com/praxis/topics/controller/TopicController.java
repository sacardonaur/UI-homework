package com.praxis.topics.controller;

import com.praxis.topics.exception.EntityNotFoundException;
import com.praxis.topics.model.Topic;
import com.praxis.topics.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping
    public List<Topic> getAllTopics() {

        return topicService.getAllTopics();
    }

    @PostMapping
    public Topic createTopic(@RequestBody @Valid Topic topic) {
        return topicService.addTopic(topic);
    }

    @PutMapping
    public Topic updateTopic(@RequestBody @Valid Topic topic) throws EntityNotFoundException {
        return topicService.updateTopic(topic);
    }

    @DeleteMapping("/topics/{id}")
    public Topic deleteTopicById(@PathVariable("id") String id){
        return topicService.deleteTopicById(id);
    }

    @GetMapping("/findByName/{name}")
    public List<Topic> getTopicsByName(@PathVariable("name") String name){
        return topicService.getTopicsByName(name);
    }

    @RequestMapping("/findByStatus")
    public List<Topic> getTopicsByStatus(@RequestParam("status") int status) {
        return topicService.getTopicsByStatus(status);
    }

}