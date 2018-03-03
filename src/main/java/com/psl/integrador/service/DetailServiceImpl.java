package com.psl.integrador.service;

import com.psl.integrador.model.Detail;
import com.psl.integrador.repository.DetailRepository;
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
