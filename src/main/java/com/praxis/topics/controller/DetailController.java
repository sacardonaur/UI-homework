package com.praxis.topics.controller;

import com.praxis.topics.entity.Detail;
import com.praxis.topics.service.DetailServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collaborators/topics")
public class DetailController {

    @Autowired
    @Qualifier("detailServiceImp")
    private DetailServiceImp detailServiceImp;


    @GetMapping
    public List<Detail> getAllDetails(){
        return detailServiceImp.getAllDetails();
    }

    @PostMapping
    public void addDetail(@RequestBody Detail detail){
        detailServiceImp.addDetail(detail);
    }
    @DeleteMapping("/{id}")
    public void deleteDetail(@PathVariable("id") String id){
        detailServiceImp.deleteDetail(id);
    }


}
