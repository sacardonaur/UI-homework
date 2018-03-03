package com.psl.integrador.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.psl.integrador.model.enums.Expertise;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Detail {

    @Id
    private int id;

    @NotEmpty(message = "Topic cannot be empty")
    private Topic topic;

    @NotEmpty(message = "Expertise cannot be empty")
    private Expertise expertise;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime createdAt;

    public Detail() {

    }

    public Detail(Topic topic, Expertise expertise) {
        this.topic = topic;
        this.expertise = expertise;
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
