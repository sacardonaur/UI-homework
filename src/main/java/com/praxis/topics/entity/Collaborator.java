package com.praxis.topics.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Collaborators")
public class Collaborator {
    private String id;
    private String name;
    private List<Detail> topics_to_teach;
    private List<Detail> topics_to_learn;

    public Collaborator(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public Collaborator() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Detail> getTopics_to_teach() {
        return topics_to_teach;
    }

    public void setTopics_to_teach(List<Detail> topics_to_teach) {
        this.topics_to_teach = topics_to_teach;
    }

    public List<Detail> getTopics_to_learn() {
        return topics_to_learn;
    }

    public void setTopics_to_learn(List<Detail> topics_to_learn) {
        this.topics_to_learn = topics_to_learn;
    }
}
