package com.praxis.topics.service;

import com.praxis.topics.exception.EntityNotFoundException;
import com.praxis.topics.model.Topic;
import com.praxis.topics.repository.TopicRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class TopicServiceImplTest {

    @Autowired
    TopicServiceImpl topicService;

    @Autowired
    TopicRepository topicRepository;

    @After
    public void tearDown() throws Exception {
        topicRepository.deleteAll();
    }

    /*private TopicService topicService;

        @Autowired
        public TopicServiceImplTest(TopicService topicService) {
            this.topicService = topicService;
        }

        public TopicServiceImplTest(){}
        */
    @Test
    public void addTopic() {
        Topic topic = new Topic("test", "test1");
        assertEquals(topic, topicService.addTopic(topic));
    }


    @Test
    public void getTopicsByStatus() {
        Topic topic = new Topic("test", "test");
    }

    @Test
    public void addTopic1() {
        Topic topic = new Topic("test","test" );
        assertEquals(topic, topicService.addTopic(topic));
    }

    @Test
    public void updateTopic() {
        Topic topic = new Topic("test", "test");
        topicService.addTopic(topic);
        topic.setName("testUpdated");
        try {
            assertEquals(topic, topicService.updateTopic(topic));
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getTopicById() {
        Topic topic = new Topic("test","test");
        topic.setId("123");
        topicService.addTopic(topic);
        assertEquals(topic, topicService.getTopicById("123"));
    }

    @Test
    public void deleteTopicById() {
        Topic topic = new Topic("test","test");
        Topic topic1 = new Topic("test1","test1");
        Topic topic2 = new Topic("test2","test2");
        topic.setId("1234");
        topicService.addTopic(topic);
        topicService.addTopic(topic1);
        topicService.addTopic(topic2);
        topicService.deleteTopicById("1234");

        assertEquals(2, topicService.getAllTopics().size());
    }

    @Test
    public void getTopicsByName() {
        Topic topic = new Topic("java", "test");
        Topic topic1 = new Topic("test2", "test2");
        //assertTrue(topicService.getTopicsByName("java").contains(topic));
        assertEquals(1,topicService.getTopicsByName("java"));
    }

    @Test
    public void getTopicByName() {
        Topic topic = new Topic("test", "test");
        assertEquals(topic, topicService.getTopicByName("test"));
    }

    @Test
    public void getAllTopics() {
        Topic topic = new Topic("test","test");
        Topic topic1 = new Topic("test1","test1");
        Topic topic2 = new Topic("test2","test2");

        topicService.addTopic(topic);
        topicService.addTopic(topic1);
        topicService.addTopic(topic2);

        assertEquals(3, topicService.getAllTopics().size());
    }
}