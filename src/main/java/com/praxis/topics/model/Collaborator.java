package com.praxis.topics.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "Collaborator")
public class Collaborator {

    @Id
    private String id;

    @NotEmpty(message = "The name is required")
    private String name;

    private List<Detail> topicsToTeach;

    private List<Detail> topicsToLearn;

    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime createdAt;

    public Collaborator() {

    }

    public Collaborator(String name) {
        this.name = name;
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

    public List<Detail> getTopicsToTeach() {
        return topicsToTeach;
    }

    public void setTopicsToTeach(List<Detail> topicsToTeach) {
        this.topicsToTeach = topicsToTeach;
    }

    public List<Detail> getTopicsToLearn() {
        return topicsToLearn;
    }

    public void setTopicsToLearn(List<Detail> topicsToLearn) {
        this.topicsToLearn = topicsToLearn;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
