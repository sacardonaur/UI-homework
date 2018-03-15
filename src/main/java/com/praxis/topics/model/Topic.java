package com.praxis.topics.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.praxis.topics.model.enums.Status;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;


@Document(collection = "Topic")
public class Topic {
    @Id
    private String id;

    @NotEmpty(message = "The name is required")
    private String name;

    @NotEmpty(message = "The description is required")
    private String description;

    private Status status;

    private String chat;

    private int teachers;

    private int students;

    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime createdAt;

    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime openedAt;

    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime closedAt;

    public Topic() {

    }

    public Topic(String name, String description) {
        this.name = name;
        this.description = description;
        this.createdAt = LocalDateTime.now();
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getChat() {
        return chat;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }

    public int getTeachers() {
        return teachers;
    }

    public void setTeachers(int teachers) {
        this.teachers = teachers;
    }

    public int getStudents() {
        return students;
    }

    public void setStudents(int students) {
        this.students = students;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getOpenedAt() {
        return openedAt;
    }

    public void setOpenedAt(LocalDateTime openedAt) {
        this.openedAt = openedAt;
    }

    public LocalDateTime getClosedAt() {
        return closedAt;
    }

    public void setClosedAt(LocalDateTime closedAt) {
        this.closedAt = closedAt;
    }
}
