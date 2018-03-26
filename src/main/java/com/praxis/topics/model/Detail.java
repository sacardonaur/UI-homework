package com.praxis.topics.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.praxis.topics.model.enums.Expertise;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URL;
import java.time.LocalDateTime;

@Document(collection = "Detail")
public class Detail {

    @NotEmpty(message = "Topic cannot be empty")
    private Topic topic;

    @NotEmpty(message = "Expertise cannot be empty")
    private Expertise expertise;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "d-M-yyyy H:m:s")
    private LocalDateTime addedAt;

    private URL url;

    public Detail() {

    }

    public Detail(Topic topic, Expertise expertise) {
        this.topic = topic;
        this.expertise = expertise;
        this.addedAt = LocalDateTime.now();
    }

    public Detail(Topic topic, Expertise expertise, URL url) {
        this.topic = topic;
        this.expertise = expertise;
        this.addedAt = LocalDateTime.now();
        this.url = url;
    }

    public URL getUrl() {
        return url;
    }

    public void setUrl(URL url) {
        this.url = url;
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

    public LocalDateTime getAddedAt() {
        return addedAt;
    }

    public void setAddedAt(LocalDateTime addedAt) {
        this.addedAt = addedAt;
    }

}
