package com.praxis.topics.repository;


import com.praxis.topics.entity.Collaborator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository("CollaboratorRepository")
public interface CollaboratorRepository extends MongoRepository<Collaborator, String> {
    Collaborator findById(String id);
}
