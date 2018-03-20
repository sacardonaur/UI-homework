package com.praxis.topics.service;

import com.praxis.topics.model.Collaborator;
import com.praxis.topics.repository.CollaboratorRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

//test for collaborator
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CollaboratorServiceImplTest {

    @Autowired
    CollaboratorServiceImpl collaboratorService;

    @Autowired
    CollaboratorRepository collaboratorRepository;

    @After
    public void tearDown() throws Exception {
        collaboratorRepository.deleteAll();
    }

    @Test
    public void getAllCollaborators() {
        collaboratorRepository.deleteAll();
        Collaborator c = new Collaborator("test");
        Collaborator c1 = new Collaborator("test1");
        Collaborator c2 = new Collaborator("test2");

        collaboratorService.addCollaborator(c);
        collaboratorService.addCollaborator(c1);
        collaboratorService.addCollaborator(c2);

        assertEquals(3, collaboratorService.getAllCollaborators().size());

    }

    @Test
    public void addCollaborator() {
        Collaborator c = new Collaborator("test");

        assertEquals(c, collaboratorService.addCollaborator(c));
    }

    @Test
    public void updateCollaborator() {
        Collaborator c = new Collaborator("test");
        collaboratorService.addCollaborator(c);
        c.setName("testUpdated");

        assertEquals(c,collaboratorService.updateCollaborator(c));
    }

    @Test
    public void getCollaboratorById() {
        Collaborator c = new Collaborator("test");
        c.setId("123");
        collaboratorService.addCollaborator(c);

        assertEquals("123", collaboratorService.getCollaboratorById("123").getId());
    }
}