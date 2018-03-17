package com.praxis.topics.controller;

import com.praxis.topics.model.Detail;
import com.praxis.topics.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Qualifier("detail")
@RequestMapping("/details")
public class DetailController {
    private DetailService detailService;

    @Autowired
    public DetailController(DetailService detailService) {
        this.detailService = detailService;
    }

    @GetMapping
    public List<Detail> getAllDetails() {
        return this.detailService.getAllDetails();
    }

}
