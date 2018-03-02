package com.praxis.topics.repository;

import com.praxis.topics.entity.Collaborator;
import com.praxis.topics.entity.Detail;
import com.praxis.topics.entity.Topic;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DBSeeder implements CommandLineRunner {
    private TopicRepository  topicRepository;
    private DetailRepository detailRepository;
    private CollaboratorRepository collaboratorRepository;


    public DBSeeder(TopicRepository topicRepository, DetailRepository detailRepository, CollaboratorRepository collaboratorRepository) {
        this.topicRepository = topicRepository;
        this.detailRepository = detailRepository;
        this.collaboratorRepository = collaboratorRepository;

    }

    @Override
    public void run(String... strings) throws Exception {

        Topic topic1 = new Topic("Java", "Java for dummies");
        Topic topic2 = new Topic("Python", "Data Science in Python");
        Topic topic3 = new Topic("C++", "OOP in C++");
        Topic topic4 = new Topic("SpringBoot", "SpringBoot Quickstart");

        Detail detail1 = new Detail("12uu33gg5",topic1, 3);
        Detail detail2 = new Detail("66xx4gg56",topic2, 3);
        Detail detail3 = new Detail("98zx88xx3",topic4, 1);

        List<Detail> details = Arrays.asList(detail1,detail2, detail3);

        Collaborator collaborator1 = new Collaborator("uu23nn34", "Luis");
        Collaborator collaborator2 = new Collaborator("jj45j66h", "Jefferson");
        collaborator1.setTopics_to_teach(details);

        // Drop all topics
        this.topicRepository.deleteAll();
        //this.detailRepository.deleteAll();
        this.collaboratorRepository.deleteAll();

        // add topics to the db
        List<Topic> topics = Arrays.asList(topic1,topic2, topic3, topic4);
        this.topicRepository.save(topics);

        //List<Detail> details = Arrays.asList(detail1,detail2, detail3);
        //this.detailRepository.save(details);

        List<Collaborator> collaborators = Arrays.asList(collaborator1, collaborator2);
        this.collaboratorRepository.save(collaborators);

    }



}
