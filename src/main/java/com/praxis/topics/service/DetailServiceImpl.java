package com.praxis.topics.service;

import com.praxis.topics.model.Detail;
import com.praxis.topics.repository.DetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetailServiceImpl implements DetailService{
    private final DetailRepository detailRepository;

    @Autowired
    public DetailServiceImpl(DetailRepository detailRepository) {
        this.detailRepository = detailRepository;
    }

    @Override
    public List<Detail> getAllDetails() {
        return detailRepository.findAll();
    }

    @Override
    public Detail addDetail(Detail detail) {
        return null;
    }

    @Override
    public Detail deleteDetail() {
        return null;
    }
}
