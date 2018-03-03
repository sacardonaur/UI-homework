package com.psl.integrador.repository;

import com.psl.integrador.model.Detail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("DetailRepository")
public interface DetailRepository extends MongoRepository<Detail, String> {

    List<Detail> findAll();

}
