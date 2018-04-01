package com.praxis.topics.service;

import com.praxis.topics.model.Detail;
import com.praxis.topics.model.Topic;
import com.praxis.topics.model.enums.Expertise;
import com.praxis.topics.repository.DetailRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

//test for details
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class DetailServiceImplTest {

    @Autowired
    DetailServiceImpl detailService;

    @Autowired
    DetailRepository repository;

    @Test
    public void getAllDetails() {
        Topic topic1 = new Topic("Java", "Java course");
        Topic topic2 = new Topic("Java for dummies", "Java course: an introduction");
        Topic topic3 = new Topic("Python", "Data Science in Python");

        Detail detail1 = new Detail(topic1, Expertise.beginner);
        Detail detail12 = new Detail(topic2,Expertise.intermediate);
        Detail detail13 = new Detail(topic3,Expertise.expert);

        repository.save(detail1);
        repository.save(detail12);
        repository.save(detail13);

        assertEquals(3, detailService.getAllDetails().size());

    }
}