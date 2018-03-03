package com.praxis.topics.service;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.repository.CollaboratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollaboratorServiceImpl implements CollaboratorService{

    private final CollaboratorRepository collaboratorRepository;

    @Autowired
    public CollaboratorServiceImpl(CollaboratorRepository collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }

    @Override
    public List<Collaborator> getAllCollaborators() {
        return collaboratorRepository.findAll();
    }

    @Override
    public Collaborator addCollaborator(Collaborator collaborator) {
        return null;
    }

    @Override
    public Collaborator updateCollaborator(Collaborator collaborator) {
        return this.collaboratorRepository.save(collaborator);
    }

    @Override
    public Collaborator getCollaboratorById(String id) {
        return this.collaboratorRepository.findCollaboratorById(id);
    }

    @Override
    public Collaborator deleteCollaboratorById(String id) {
        return null;
    }
}

