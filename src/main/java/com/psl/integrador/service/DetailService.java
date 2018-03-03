package com.psl.integrador.service;

import com.psl.integrador.model.Detail;
import org.springframework.stereotype.Service;

import java.util.List;


public interface DetailService {
    List<Detail> getAllDetails();
    Detail addDetail(Detail detail);
    Detail deleteDetail();
}
