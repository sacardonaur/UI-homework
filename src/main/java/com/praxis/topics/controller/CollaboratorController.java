package com.praxis.topics.controller;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.model.Detail;
import com.praxis.topics.repository.CollaboratorRepository;
import com.praxis.topics.service.CollaboratorService;
import com.praxis.topics.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

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


    @GetMapping("/{id}/details")
    public List<Detail> getDetailsByCollaborator(@PathVariable("id") String id){
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
       return collaborator.getTopicsToTeach();
    }

    @PostMapping("/{id}/details")
    public List<Detail> addDetail(@PathVariable("id") String id, @RequestBody  Detail detail){
        if(topicService.getTopicById(detail.getTopic().getId())== null){
            topicService.addTopic(detail.getTopic());
        }
        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List <Detail> topicsToTeach = collaborator.getTopicsToTeach();
        topicsToTeach.add(detail);
        collaborator.setTopicsToTeach(topicsToTeach);
        return collaboratorService.updateCollaborator(collaborator).getTopicsToTeach();

    }

    @DeleteMapping("/{id}/details")
    public List <Detail> deleteDetail(@PathVariable("id") String id, @RequestBody  Detail detail){

        Collaborator collaborator = collaboratorService.getCollaboratorById(id);
        List <Detail> topicsToTeach = collaborator.getTopicsToTeach();

        int index = 5;
        for (Detail d: topicsToTeach){
            if (detail.getTopic().getId().equals(d.getTopic().getId())){
                index = topicsToTeach.indexOf(d);
            }
        }
        topicsToTeach.remove(index);
        collaborator.setTopicsToTeach(topicsToTeach);
        return collaboratorService.updateCollaborator(collaborator).getTopicsToTeach();
    }

}