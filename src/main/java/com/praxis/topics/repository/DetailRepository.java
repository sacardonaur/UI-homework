package com.praxis.topics.repository;


import com.praxis.topics.entity.Detail;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository("DetailRepository")
public interface DetailRepository extends MongoRepository<Detail, String>{

    Detail findById(String id);

}
