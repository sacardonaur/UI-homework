package com.psl.integrador.repository;

import com.psl.integrador.model.Collaborator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("Collaborator")
public interface CollaboratorRepository extends MongoRepository<Collaborator, String> {
    List<Collaborator> findAll();
    Collaborator findCollaboratorById(String id);
}