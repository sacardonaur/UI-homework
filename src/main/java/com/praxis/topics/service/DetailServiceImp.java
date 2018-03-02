package com.praxis.topics.service;
// bbbb
import com.praxis.topics.entity.Collaborator;
import com.praxis.topics.entity.Detail;
import com.praxis.topics.repository.CollaboratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("detailServiceImp")
public class DetailServiceImp implements DetailService{
    @Autowired
    private CollaboratorRepository collaboratorRepository;

    @Override
    public List<Detail> getAllDetails() {

        return this.collaboratorRepository.findById("uu23nn34").getTopics_to_teach();
    }

    @Override
    public void addDetail(Detail detail) {
        Collaborator collaborator = this.collaboratorRepository.findById("uu23nn34");
        List<Detail> details = collaborator.getTopics_to_teach();
        details.add(detail);
        collaborator.setTopics_to_teach(details);
        collaboratorRepository.save(collaborator);
    }

/*
    public void deleteDetail(String id){
        List<Detail> details = this.collaboratorRepository.findById("uu23nn34").getTopics_to_teach();
        for (Detail detail: details){
            if(detail.getId().equals(id)){
                details.remove(detail);
            }
        }

        this.collaboratorRepository.findById("uu23nn34").setTopics_to_teach(details);
    }
*/

    public void deleteDetail(String id){
        Collaborator collaborator = this.collaboratorRepository.findById("uu23nn34");
        List<Detail> details = collaborator.getTopics_to_teach();

        Detail detailtmp = null;
        for (Detail detail: details){
            if(detail.getId().equals(id)){
                detailtmp = detail;
            }
        }

        details.remove(detailtmp);
        collaborator.setTopics_to_teach(details);
        collaboratorRepository.save(collaborator);
    }

}
