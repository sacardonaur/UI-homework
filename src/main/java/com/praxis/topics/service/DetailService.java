package com.praxis.topics.service;

import com.praxis.topics.model.Detail;

import java.util.List;


public interface DetailService {
    List<Detail> getAllDetails();
    Detail addDetail(Detail detail);
    Detail deleteDetail();
}
