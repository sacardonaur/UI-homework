package com.praxis.topics.service;

import com.praxis.topics.entity.Detail;

import java.util.List;

public interface DetailService {
    List<Detail> getAllDetails();
    void addDetail(Detail detail);
}
