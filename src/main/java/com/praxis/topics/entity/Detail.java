package com.praxis.topics.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Details")
public class Detail {
    @Id
    private String id;
    private Topic topics;
    private int expertise;

    public Detail(String id, Topic topics, int expertise) {
        this.id = id;
        this.topics = topics;
        this.expertise = expertise;
    }

    public Detail() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Topic getTopics() {
        return topics;
    }

    public void setTopics(Topic topics) {
        this.topics = topics;
    }

    public int getExpertise() {
        return expertise;
    }

    public void setExpertise(int expertise) {
        this.expertise = expertise;
    }
}
