package com.praxis.topics.controller;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.service.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collaborators")
public class CollaboratorController {
    private final CollaboratorService  collaboratorService;

    @Autowired
    public CollaboratorController(CollaboratorService collaboratorService) {
        this.collaboratorService = collaboratorService;
    }
    @GetMapping
    public List<Collaborator> getAllCollaborators() {
        return collaboratorService.getAllCollaborators();
    }

    @GetMapping("/colaborators/{id}")
    public Collaborator getCollaboratorById(@PathVariable("id") String id){
        return collaboratorService.getCollaboratorById(id);
    }

    @PutMapping
    public Collaborator updateCollaborator(Collaborator collaborator){
        return collaboratorService.updateCollaborator(collaborator);
    }






}