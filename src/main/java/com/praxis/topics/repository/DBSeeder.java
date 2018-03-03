package com.praxis.topics.repository;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.model.Detail;
import com.praxis.topics.model.Topic;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.praxis.topics.model.enums.Expertise;

import java.util.Arrays;
import java.util.List;

@Component
public class DBSeeder implements CommandLineRunner {
    private TopicRepository  topicRepository;
    private CollaboratorRepository collaboratorRepository;
    private DetailRepository detailRepository;


    public DBSeeder(TopicRepository topicRepository, CollaboratorRepository collaboratorRepository) {
        this.topicRepository = topicRepository;
        this.collaboratorRepository = collaboratorRepository;
        //this.detailRepository = detailRepository;


    }

    @Override
    public void run(String... strings) throws Exception {


        Topic topic1 = new Topic("name1", "description1");
        Topic topic2 = new Topic("name2", "description2");

        Detail detail1 = new Detail(topic1,Expertise.beginner);
        Detail detail12 = new Detail(topic2,Expertise.intermediate);

        List<Detail> topicsToTeach = Arrays.asList(detail1, detail12);

        Collaborator collaborator1 = new Collaborator("Luis");
        Collaborator collaborator2 = new Collaborator("Jefferson");
        collaborator1.setTopicsToTeach(topicsToTeach);

        // Drop all
        this.topicRepository.deleteAll();
        this.collaboratorRepository.deleteAll();
        //this.detailRepository.deleteAll();

        // add topics, collaborators to the db
        List<Topic> topics = Arrays.asList(topic1,topic2);
        List<Collaborator> collaborators = Arrays.asList(collaborator1, collaborator2);

        this.topicRepository.save(topics);
        this.collaboratorRepository.save(collaborators);
        //this.detailRepository.save(topicsToTeach);
    }
}
