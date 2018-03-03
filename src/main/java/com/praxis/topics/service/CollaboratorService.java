package com.praxis.topics.service;

import com.praxis.topics.model.Collaborator;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CollaboratorService {
    List<Collaborator> getAllCollaborators();
    Collaborator addCollaborator(Collaborator collaborator);
    Collaborator updateCollaborator(Collaborator collaborator);
    Collaborator getCollaboratorById(String id);
    Collaborator deleteCollaboratorById(String id);
}
