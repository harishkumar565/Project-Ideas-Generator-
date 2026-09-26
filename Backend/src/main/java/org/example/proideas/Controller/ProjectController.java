package org.example.proideas.Controller;


import org.example.proideas.Entity.ProjectEntity;
import org.example.proideas.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "http://localhost:5173/")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    // Save Project
    @PostMapping
    public ProjectEntity saveProject(@RequestBody ProjectEntity project) {
        return projectService.saveProject(project);
    }

    // Get All Projects
    @GetMapping
    public List<ProjectEntity> getAllProjects() {
        return projectService.getAllProjects();
    }

    // Get Project By Id
    @GetMapping("/{id}")
    public ProjectEntity getProjectById(@PathVariable int id) {
        return projectService.getProjectById(id);
    }

    // Delete Project
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable int id) {
        return projectService.deleteProject(id);
    }

    @GetMapping("/requirement/{requirementId}")
    public List<ProjectEntity> getProjectsByRequirementId(@PathVariable int requirementId) {
        return projectService.getProjectsByRequirementId(requirementId);
    }

    @GetMapping("/recommended/{requirementId}")
    public ProjectEntity getRecommendedProject(@PathVariable int requirementId) {
        return projectService.getRecommendedProject(requirementId);
    }
}
