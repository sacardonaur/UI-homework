package com.praxis.topics.model;

import com.praxis.topics.model.enums.Expertise;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Document(collection = "Detail")
public class Detail {

    @NotEmpty(message = "Topic cannot be empty")
    private Topic topic;

    @NotEmpty(message = "Expertise cannot be empty")
    private Expertise expertise;

    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime createdAt;

    private String link;

    public Detail() {

    }

    public Detail(Topic topic, Expertise expertise) {
        this.topic = topic;
        this.expertise = expertise;
        this.createdAt = LocalDateTime.now();
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Topic getTopic() {

        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public Expertise getExpertise() {
        return expertise;
    }

    public void setExpertise(Expertise expertise) {
        this.expertise = expertise;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
