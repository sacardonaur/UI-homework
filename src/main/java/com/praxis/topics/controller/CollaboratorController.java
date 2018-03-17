package com.praxis.topics.controller;

import com.praxis.topics.exception.EntityNotFoundException;
import com.praxis.topics.model.Collaborator;
import com.praxis.topics.model.Detail;
import com.praxis.topics.model.Topic;
import com.praxis.topics.repository.CollaboratorRepository;
import com.praxis.topics.service.CollaboratorService;
import com.praxis.topics.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
@CrossOrigin
@RestController
@Qualifier("collaborators")
@RequestMapping("/collaborators")
public class CollaboratorController {
    private final CollaboratorService  collaboratorService;
    private final TopicService topicService;
    private final CollaboratorRepository collaboratorRepository;

    @Autowired
    public CollaboratorController(CollaboratorService collaboratorService, TopicService topicService, CollaboratorRepository collaboratorRepository) {
        this.collaboratorService = collaboratorService;
        this.topicService = topicService;
        this.collaboratorRepository = collaboratorRepository;
    }
    @GetMapping
    public List<Collaborator> getAllCollaborators() {
        return collaboratorService.getAllCollaborators();
    }


    @PutMapping
    public Collaborator updateCollaborator(@RequestBody Collaborator collaborator){
        return collaboratorService.updateCollaborator(collaborator);
    }

    @PostMapping
    public Collaborator createCollaborator(@RequestBody  Collaborator collaborator){
        return collaboratorService.addCollaborator(collaborator);
    }


    @GetMapping("/{id}")
    public Collaborator getCollaboratorById(@PathVariable("id") String id){
        return collaboratorService.getCollaboratorById(id);
    }


    @GetMapping("/{id}/topicsToTeach")
    public List<Detail> getDetailsByCollaborator(@PathVariable("id") String id){
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
       return collaborator.getTopicsToTeach();
    }

    @PostMapping("/{id}/topicsToTeach")
    public List<Detail> addDetail(@PathVariable("id") String id, @RequestBody  Detail detail) {
        detail.setCreatedAt(LocalDateTime.now());

        Topic topic = detail.getTopic();
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List <Detail> topicsToTeach = collaborator.getTopicsToTeach();

        // If the topic does not exist in the db
        if(topicService.getTopicById(topic.getId())== null)
        {
            //topic.setTeachers(1);
            topicService.addTopic(topic);
        }

        // The topic exists in the db

        int index = -1;
        for (Detail d : topicsToTeach) {
            if (detail.getTopic().getId().equals(d.getTopic().getId())) {
                index = topicsToTeach.indexOf(d);
            }
        }

        if (index != -1) {
            topicsToTeach.set(index, detail);
        }

        else{
            topicsToTeach.add(detail);
            int nteach = topicService.getTopicById(topic.getId()).getTeachers();
            topic.setTeachers(nteach + 1);
            topicService.addTopic(topic);
        }

        collaborator.setTopicsToTeach(topicsToTeach);
        return collaboratorService.updateCollaborator(collaborator).getTopicsToTeach();

    }

    @DeleteMapping("/{id}/topicsToTeach/{topicId}")
    public List <Detail> deleteDetail(@PathVariable("id") String id, @PathVariable("topicId") String topicId){

        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List <Detail> topicsToTeach = collaborator.getTopicsToTeach();

        int index  = -1;
        for (Detail d: topicsToTeach){
            if (topicId.equals(d.getTopic().getId())){
                index = topicsToTeach.indexOf(d);
            }
        }
        Topic topic = topicService.getTopicById(topicId);

        if(index != -1){
            topicsToTeach.remove(index);
            topic.setTeachers(topic.getTeachers() - 1);
            topicService.addTopic(topic);
        }

        collaborator.setTopicsToTeach(topicsToTeach);
        return collaboratorService.updateCollaborator(collaborator).getTopicsToTeach();
    }

    @GetMapping("/{id}/topicsToLearn")
    public List<Detail> getTopicToLearnByCollaborator(@PathVariable("id") String id){
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        return collaborator.getTopicsToLearn();
    }

    @PostMapping("/{id}/topicsToLearn")
    public List<Detail> addTopicToLearn(@PathVariable("id") String id, @RequestBody  Detail detail) {

        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List<Detail> topicsToLearn = collaborator.getTopicsToLearn();
        Topic topic = topicService.getTopicById(detail.getTopic().getId());
        int nstudents = topic.getStudents();

        int index = -1;
        for (Detail d : topicsToLearn) {
            if (detail.getTopic().getId().equals(d.getTopic().getId())) {
                index = topicsToLearn.indexOf(d);
            }
        }

        if (index != -1) {
            topicsToLearn.set(index, detail);

        }

        else
        {
            topicsToLearn.add(detail);
            topic.setStudents(nstudents + 1);
        }

        topicService.addTopic(topic);
        collaborator.setTopicsToLearn(topicsToLearn);
        return collaborator.getTopicsToLearn();
    }

    @DeleteMapping("/{id}/topicsToLearn/{topicId}")
    public List <Detail> deleteTopicToLearn(@PathVariable("id") String id, @PathVariable("topicId") String topicId){
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List <Detail> topicsToLearn = collaborator.getTopicsToLearn();

        int index  = -1;
        for (Detail d: topicsToLearn){
            if (topicId.equals(d.getTopic().getId())){
                index = topicsToLearn.indexOf(d);
            }
        }
        Topic topic = topicService.getTopicById(topicId);

        if(index != -1){
            topicsToLearn.remove(index);
            topic.setStudents(topic.getStudents() - 1);
            topicService.addTopic(topic);
        }

        collaborator.setTopicsToTeach(topicsToLearn);
        return collaboratorService.updateCollaborator(collaborator).getTopicsToLearn();

    }








}
