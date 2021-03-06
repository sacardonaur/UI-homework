package com.praxis.topics.controller;

import com.praxis.topics.exception.EntityNotFoundException;
import com.praxis.topics.model.Topic;
import com.praxis.topics.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@CrossOrigin
@RestController
@Qualifier("topics")
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
        topic.setCreatedAt(LocalDateTime.now());
        return topicService.addTopic(topic);
    }

    @PutMapping
    public Topic updateTopic(@RequestBody @Valid Topic topic) throws EntityNotFoundException {
        return topicService.updateTopic(topic);
    }

    @DeleteMapping("/{id}")
    public void deleteTopicById(@PathVariable("id") String id){
        topicService.deleteTopicById(id);
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
