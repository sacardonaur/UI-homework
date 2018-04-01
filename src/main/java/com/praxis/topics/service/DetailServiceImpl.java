package com.praxis.topics.service;

import com.praxis.topics.model.Detail;
import com.praxis.topics.model.enums.Kind;
import com.praxis.topics.repository.DetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("detail")
public class DetailServiceImpl implements DetailService {
    private DetailRepository detailRepository;

    @Autowired
    public DetailServiceImpl(DetailRepository detailRepository) {
        this.detailRepository = detailRepository;
    }

    @Override
    public List<Detail> getAllDetails() {
        return this.detailRepository.findAll();
    }




}
