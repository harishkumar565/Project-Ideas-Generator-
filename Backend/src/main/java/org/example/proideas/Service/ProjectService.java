package org.example.proideas.Service;


import org.example.proideas.Entity.ProjectEntity;
import org.example.proideas.Repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    // Save Project
    public ProjectEntity saveProject(ProjectEntity project) {
        return projectRepo.save(project);
    }

    // Get All Projects
    public List<ProjectEntity> getAllProjects() {
        return projectRepo.findAll();
    }

    // Get Project By Id
    public ProjectEntity getProjectById(int id) {
        return projectRepo.findById(id).orElse(null);
    }

    // Delete Project
    public String deleteProject(int id) {
        projectRepo.deleteById(id);
        return "Project Deleted Successfully";
    }

    public List<ProjectEntity> getProjectsByRequirementId(int requirementId) {
        return projectRepo.findByRequirementId(requirementId);
    }

    public ProjectEntity getRecommendedProject(int requirementId) {
        return projectRepo.findByRequirementIdAndRecommendedTrue(requirementId);
    }
}