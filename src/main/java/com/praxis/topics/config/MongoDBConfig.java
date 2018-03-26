package com.praxis.topics.config;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.model.Detail;
import com.praxis.topics.model.Topic;
import com.praxis.topics.model.enums.Expertise;
import com.praxis.topics.repository.CollaboratorRepository;
import com.praxis.topics.repository.TopicRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@EnableMongoRepositories(basePackageClasses = {TopicRepository.class, CollaboratorRepository.class})
@Configuration
public class MongoDBConfig {
    private TopicRepository  topicRepository;
    private CollaboratorRepository collaboratorRepository;

    public MongoDBConfig(TopicRepository topicRepository, CollaboratorRepository collaboratorRepository) {
        this.topicRepository = topicRepository;
        this.collaboratorRepository = collaboratorRepository;
    }

    @Bean
    CommandLineRunner commandLineRunner(TopicRepository topicRepository, CollaboratorRepository collaboratorRepository) {

        return strings -> {
            /*
            Topic topic1 = new Topic("Java", "Java course");
            Topic topic2 = new Topic("Java for dummies", "Java course: an introduction");
            Topic topic3 = new Topic("Python", "Data Science in Python");
            topic1.setTeachers(1);
            topic2.setTeachers(1);
            topic3.setTeachers(1);

            Detail detail1 = new Detail(topic1,Expertise.beginner);
            Detail detail2 = new Detail(topic2,Expertise.intermediate);
            Detail detail3 = new Detail(topic3,Expertise.expert);
            detail1.setAddedAt(LocalDateTime.now());
            detail2.setAddedAt(LocalDateTime.now());
            detail2.setAddedAt(LocalDateTime.now());

            List<Detail> topicsToTeach = Arrays.asList(detail1, detail2,detail3);
            List<Detail> topicsToTeach2 = Arrays.asList();
            List<Detail> topicsToLearn = Arrays.asList();

            Collaborator collaborator1 = new Collaborator("Luis", "lualopezpe@unal.edu.co");
            Collaborator collaborator2 = new Collaborator("Jefferson", "jftapias@unal.edu.co");
            collaborator1.setTopicsToTeach(topicsToTeach);
            collaborator2.setTopicsToTeach(topicsToTeach2);
            collaborator1.setTopicsToLearn(topicsToLearn);
            collaborator2.setTopicsToLearn(topicsToLearn);

            // Drop all
            this.topicRepository.deleteAll();
            this.collaboratorRepository.deleteAll();

            // add topics, collaborators to the db
            List<Topic> topics = Arrays.asList(topic1,topic2, topic3);
            List<Collaborator> collaborators = Arrays.asList(collaborator1, collaborator2);

            this.topicRepository.save(topics);
            this.collaboratorRepository.save(collaborators);
*/
        };

    }

}
