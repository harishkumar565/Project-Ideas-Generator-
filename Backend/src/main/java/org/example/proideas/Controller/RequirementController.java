package org.example.proideas.Controller;

import java.util.List;

import org.example.proideas.Entity.RequirementEntity;
import org.example.proideas.Model.ProjectResponse;
import org.example.proideas.Service.RequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/requirements")
@CrossOrigin(origins = "http://localhost:5173/")
public class RequirementController {

    @Autowired
    private RequirementService requirementService;

    // Save Requirement
    @PostMapping
    public ProjectResponse saveRequirement(@RequestBody RequirementEntity requirement) throws Exception {
        return requirementService.saveRequirement(requirement);
    }

    // Get All Requirements
    @GetMapping
    public List<RequirementEntity> getAllRequirements() {
        return requirementService.getAllRequirements();
    }

    // Get Requirement By Id
    @GetMapping("/{id}")
    public RequirementEntity getRequirementById(@PathVariable int id) {
        return requirementService.getRequirementById(id);
    }

    // Update Requirement
    @PutMapping
    public RequirementEntity updateRequirement(@RequestBody RequirementEntity requirement) {
        return requirementService.updateRequirement(requirement);
    }

    // Delete Requirement
    @DeleteMapping("/{id}")
    public String deleteRequirement(@PathVariable int id) {
        return requirementService.deleteRequirement(id);
    }
}
